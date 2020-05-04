package com.msgroup.moviesurfer.security;

import com.msgroup.moviesurfer.model.User;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.security.core.Authentication;

import org.springframework.stereotype.Component;


import java.util.Date;
import java.util.HashMap;
import java.util.Map;

/**
 * This class generates the TOKEN
 */
@Component
public class JwtProvider {
    // Constants
    public static final String SECRET = "SecretKeyToGenJWTs";
    public static final String TOKEN_PREFIX = "Bearer ";
    public static final String HEADER_STRING = "Authorization";
    public static final long EXPIRATION_TIME = 3600000; // 3600000 milliseconds = 60 minutes

    /**
     * TO generate the token
     * @param authentication
     * @return TOKEN which is a String
     */
    public String generateToken(Authentication authentication){
        // At this point the user is authenticated, so get the user
        User user = (User)authentication.getPrincipal();

        Date now = new Date(System.currentTimeMillis());
        Date expiryDate = new Date(now.getTime() + EXPIRATION_TIME);

        // Because the TOKEN is a String, convert the userId to String
        String userId = Long.toString(user.getId());


        // Claims are information about the user to be included in the token, so when the token
        // is decoded in the client side, it will return this info about the user
        Map<String, Object> claims = new HashMap<>();
        claims.put("id", userId);
        claims.put("email", user.getEmail());
        claims.put("firstName", user.getFirstName());
        claims.put("lastName", user.getLastName());

        // build Jwt
       return Jwts.builder()
                    .setSubject(userId)
                    .setClaims(claims) // claims hold information about the user
                    .setIssuedAt(now)
                    .setExpiration(expiryDate)
                    .signWith(SignatureAlgorithm.HS512, SECRET)
                    .compact();
    }


}
