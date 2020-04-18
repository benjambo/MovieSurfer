package com.msgroup.moviesurfer.services;

import com.itextpdf.text.*;
import com.itextpdf.text.Document;
import com.itextpdf.text.pdf.PdfWriter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.context.i18n.LocaleContextHolder;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.stereotype.Service;
import javax.activation.DataHandler;
import javax.activation.DataSource;
import javax.mail.*;
import javax.mail.internet.*;
import javax.mail.util.ByteArrayDataSource;
import java.io.*;
import java.util.ArrayList;


/**
 * Acts as a service to send emails with or without attachments.
 *
 */

@Service
public class CustomEmailService {


    @Autowired
    MessageSource messageSource;

    @Autowired
    private JavaMailSenderImpl javaMailSender;

    @Autowired
    private EmailConfiguration emailConfiguration;


    /**
     * To send a simple email without attachments
     * @param from sender email
     * @param to recipient email
     * @param subject email title
     * @param text email content
     */
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

    /**
     * To send an email with attachments
     * @param from sender email
     * @param to recipient email
     * @param subject email title
     * @param ticket ticket information
     * @throws Exception any
     */

    public void sendEmailWithAttachments(String from, String to, String subject, ArrayList<String> ticket) throws Exception{

        // set email configuration
        javaMailSender.setHost(emailConfiguration.getHost());
        javaMailSender.setPort(emailConfiguration.getPort());
        javaMailSender.setUsername(emailConfiguration.getUsername());
        javaMailSender.setPassword(emailConfiguration.getPassword());

        //create the sender/recipient addresses
        InternetAddress iaSender = new InternetAddress(from,false); // use false to disable strict policy on internet address
        InternetAddress  iaRecipient = new InternetAddress(to, false); // use false to disable strict policy on internet address

        ByteArrayOutputStream outputStream = null;



        try{
            //construct the ticketInfo body part
            MimeBodyPart textBodyPart = new MimeBodyPart();

            //String thanks = "\nDear Customer\nThank you for using our service!\n\n\nReservation Information: \n\n";
            // @LocaleContextHolder.getLocale():
            // Return the Locale associated with the given user context,if any, or the system default Locale otherwise.
            // This is effectively a replacement for Locale.getDefault(), able to optionally respect a user-level Locale setting.
            //
            // messageSource.getMessage(String key, @Nullable Object[] params, Locale locale)
            String thanks = messageSource.getMessage("customEmailService.thanks", null, LocaleContextHolder.getLocale());

            StringBuilder ticketInfo = new StringBuilder();
            for(String s: ticket){
                ticketInfo.append(s).append("\n");
            }

            String contactInfo = messageSource.getMessage("customEmailService.contactInfo", null, LocaleContextHolder.getLocale());
            // Set body part's text
            textBodyPart.setText(thanks + ticketInfo.toString() + contactInfo);


            //now write the PDF content to the output stream
            outputStream = new ByteArrayOutputStream();


            Document document = new Document();
            PdfWriter.getInstance(document, outputStream);
           // PdfWriter.getInstance(document, new FileOutputStream(new File("src/main/resources/tickets/ticket.pdf")));
            document.open();
            document.setPageSize(PageSize.A4.rotate());
            document.setMargins(10,10,0,10);

            Image img = Image.getInstance("src/main/resources/1.png");
            img.setAlignment(Element.ALIGN_CENTER);
            img.scaleToFit(PageSize.A4.getWidth(), PageSize.A4.getHeight());
            //img.setAbsolutePosition(0,0);
            img.setAbsolutePosition(0, PageSize.A4.getHeight() - img.getScaledHeight());




            Font font=new Font(Font.FontFamily.COURIER,12,Font.NORMAL,BaseColor.BLACK);
            String tiString = messageSource.getMessage("customEmailService.tiString", null, LocaleContextHolder.getLocale());
            Paragraph information = new Paragraph(tiString,new Font(Font.FontFamily.COURIER,16,Font.UNDERLINE,BaseColor.BLACK));
            information.setSpacingBefore(200f);
            //Paragraph paragraph = new Paragraph();
            // paragraph.add(new Chunk(ticketInfo));
            Paragraph paragraph = new Paragraph(ticketInfo.toString()+ contactInfo,font);
            paragraph.setSpacingBefore(20f);


            document.add(img);
            document.add(information);
            document.add(paragraph);
            document.close();


            byte[] bytes = outputStream.toByteArray();

            //construct the pdf body part
            DataSource dataSource = new ByteArrayDataSource(bytes, "application/pdf");
            MimeBodyPart pdfBodyPart = new MimeBodyPart();
            pdfBodyPart.setDataHandler(new DataHandler(dataSource));
            pdfBodyPart.setFileName("ticket.pdf");

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

            //send the email
            javaMailSender.send(mimeMessage);




        } catch (Exception e){
            e.getMessage();
        }


    }










}
