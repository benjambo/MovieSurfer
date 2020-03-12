package com.msgroup.moviesurfer.security;

/**
 * Represents log in success response object which has TOKEN
 */
public class JwtLoginSuccessResponse {
    private boolean success;
    private String token;

    // Constructor
    public JwtLoginSuccessResponse(boolean success, String token) {
        this.success = success;
        this.token = token;
    }

    // Getters and setters

    public boolean isSuccess() {
        return success;
    }

    public void setSuccess(boolean success) {
        this.success = success;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    @Override
    public String toString() {
        return "JWTLoginSuccessResponse{" +
                "success=" + success +
                ", token='" + token + '\'' +
                '}';
    }
}
