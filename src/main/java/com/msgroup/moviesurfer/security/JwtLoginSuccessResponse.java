package com.msgroup.moviesurfer.security;

/**
 * Represents login success response object which has TOKEN
 */
public class JwtLoginSuccessResponse {
    private boolean success;
    private String token;

    /**
     * Constructor
     * @param success type boolean
     * @param token type String
     */
    public JwtLoginSuccessResponse(boolean success, String token) {
        this.success = success;
        this.token = token;
    }

    /**
     * Indicates whether the user's login request is success.
     * @return seccess type boolean
     */
    public boolean isSuccess() {
        return success;
    }

    /**
     * To set success value depending on the user's login request
     * @param success type boolean
     */
    public void setSuccess(boolean success) {
        this.success = success;
    }

    /**
     * To get login request's token
     * @return token type String
     */
    public String getToken() {
        return token;
    }

    /**
     * To set login request's token
     * @param token type String
     */

    public void setToken(String token) {
        this.token = token;
    }

    /**
     * Returns the string representation of the object
     * @return string representation of the object
     */
    @Override
    public String toString() {
        return "JWTLoginSuccessResponse{" +
                "success=" + success +
                ", token='" + token + '\'' +
                '}';
    }
}
