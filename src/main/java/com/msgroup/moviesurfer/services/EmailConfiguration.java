package com.msgroup.moviesurfer.services;


import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

/**
 * Acts as a component to set the email configuration
 */
@Component
public class EmailConfiguration {
    //@Value("${spring.mail.host}")
    @Value("${spring.mail.host}")
    private String host;
    @Value("${spring.mail.port}")
    private int port;
    @Value("${spring.mail.username}")
    private String username;
    @Value("${spring.mail.password}")
    private String password;

    /**
     * Empty constructor
     */
    public EmailConfiguration() {
    }

    /**
     * To get email server's host
     * @return host of type String
     */
    public String getHost() {
        return host;
    }

    /**
     * To set email server's host
     * @param host of type String
     */
    public void setHost(String host) {
        this.host = host;
    }

    /**
     * To get email server's port
     * @return port of type integer
     */
    public int getPort() {
        return port;
    }

    /**
     * To set email server's port
     * @param port of type integer
     */
    public void setPort(int port) {
        this.port = port;
    }

    /**
     * To get email server's username
     * @return username of type String
     */
    public String getUsername() {
        return username;
    }

    /**
     * To set email server's username
     * @param username of type String
     */
    public void setUsername(String username) {
        this.username = username;
    }

    /**
     * To get email server's password
     * @return password of type String
     */
    public String getPassword() {
        return password;
    }

    /**
     * To set email server's password
     * @param password of type String
     */
    public void setPassword(String password) {
        this.password = password;
    }
}
