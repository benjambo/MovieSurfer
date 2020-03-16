package com.msgroup.moviesurfer.services;

import com.itextpdf.text.*;
import com.itextpdf.text.Document;
import com.itextpdf.text.pdf.PdfWriter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.InputStreamSource;
import org.springframework.http.MediaType;
import org.springframework.mail.MailParseException;
import org.springframework.mail.SimpleMailMessage;

import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;


import javax.activation.DataHandler;
import javax.activation.DataSource;
import javax.mail.*;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeBodyPart;
import javax.mail.internet.MimeMessage;
import javax.mail.internet.MimeMultipart;
import javax.mail.util.ByteArrayDataSource;
import java.io.*;
import java.util.Properties;

@Service
public class CustomEmailService {

    @Autowired
    private JavaMailSenderImpl javaMailSender;

    @Autowired
    private EmailConfiguration emailConfiguration;



    public void sendSimpleMessage(String from,String to, String subject, String text){
        javaMailSender.setHost(emailConfiguration.getHost());
        javaMailSender.setPort(emailConfiguration.getPort());
        javaMailSender.setUsername(emailConfiguration.getUsername());
        javaMailSender.setPassword(emailConfiguration.getPassword());

        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom(from);
        message.setTo(to);
        message.setSubject(subject);
        message.setText(text);

        javaMailSender.send(message);
    }


    public void sendEmailWithAttachments(String from, String to, String subject, String text) throws Exception{

        javaMailSender.setHost(emailConfiguration.getHost());
        javaMailSender.setPort(emailConfiguration.getPort());
        javaMailSender.setUsername(emailConfiguration.getUsername());
        javaMailSender.setPassword(emailConfiguration.getPassword());

        //create the sender/recipient addresses
        InternetAddress iaSender = new InternetAddress(from);
        InternetAddress iaRecipient = new InternetAddress(to);


        ByteArrayOutputStream outputStream = null;

        try{

            //construct the text body part
            MimeBodyPart textBodyPart = new MimeBodyPart();
            textBodyPart.setText(text);

            //now write the PDF content to the output stream
            outputStream = new ByteArrayOutputStream();

            Document document = new Document();
            PdfWriter.getInstance(document, outputStream);
            document.open();
            Paragraph paragraph = new Paragraph();
            paragraph.add(new Chunk(text));
            document.add(paragraph);
            document.close();

            byte[] bytes = outputStream.toByteArray();

            //construct the pdf body part
            DataSource dataSource = new ByteArrayDataSource(bytes, "application/pdf");
            MimeBodyPart pdfBodyPart = new MimeBodyPart();
            pdfBodyPart.setDataHandler(new DataHandler(dataSource));
            pdfBodyPart.setFileName("test.pdf");

            //construct the mime multi part
            MimeMultipart mimeMultipart = new MimeMultipart();
            mimeMultipart.addBodyPart(textBodyPart);
            mimeMultipart.addBodyPart(pdfBodyPart);

            //construct the mime message
            MimeMessage mimeMessage =  javaMailSender.createMimeMessage();
            mimeMessage.setFrom(iaSender);
            mimeMessage.setSubject(subject);
            mimeMessage.setRecipient(Message.RecipientType.TO,iaRecipient);


            mimeMessage.setContent(mimeMultipart);

            //send the the email
            javaMailSender.send(mimeMessage);





        }catch(Exception e){
            e.getMessage();
        }






        /*
        MimeMessage message = javaMailSender.createMimeMessage();
        try{
            MimeMessageHelper helper = new MimeMessageHelper(message, true);

            helper.setFrom(from);
            helper.setTo(to);
            helper.setSubject(subject);
            helper.setText(text);

            // FileSystemResource file = new FileSystemResource("C:\\log.txt");
            // helper.addAttachment(file.getFilename(), file);

           // File attachment = new File("iText.pdf");


        }catch (MessagingException e) {
            throw new MailParseException(e);

        }
        javaMailSender.send(message);

         */




    }


    public FileOutputStream generatePdf(){

        Document document = new Document();
        FileOutputStream outputStream = null;

        try{
            outputStream = new FileOutputStream("iText.pdf");
            PdfWriter.getInstance(document, outputStream);


        document.open();
        Font font = FontFactory.getFont(FontFactory.COURIER, 16, BaseColor.BLACK);
        //Chunk is a string with applied font
        Chunk chunk = new Chunk("Hello world", font);

        document.add(chunk);
        document.close();
        }catch(FileNotFoundException | DocumentException ex){
            ex.getMessage();
        }

        return outputStream;


    }







}
