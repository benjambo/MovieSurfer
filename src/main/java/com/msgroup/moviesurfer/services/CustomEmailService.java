package com.msgroup.moviesurfer.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;

import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.stereotype.Service;

@Service
public class CustomEmailService {

    @Autowired
    private JavaMailSenderImpl javaMailSender = new JavaMailSenderImpl();

    @Autowired
    private EmailConfiguration emailConfiguration = new EmailConfiguration();



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
}
