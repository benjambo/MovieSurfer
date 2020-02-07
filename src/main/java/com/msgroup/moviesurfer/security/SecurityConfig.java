package com.msgroup.moviesurfer.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@Configuration
@EnableWebSecurity // To enable Spring security's web security support and provide the Spring MVC integration
//@EnableGlobalMethodSecurity(securedEnabled = true, jsr250Enabled = true, prePostEnabled = true)
public class SecurityConfig extends WebSecurityConfigurerAdapter {


    // Global Cross Origins - Cors Configuration
    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurerAdapter() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**");
                //registry.addMapping("/*").allowedOrigins("*");
            }

        };
    }

    @Bean
    BCryptPasswordEncoder bCryptPasswordEncoder(){
        return new BCryptPasswordEncoder();
    }

    //       **** Authorization  ****
    // configure method defines which URL paths should be secured and which should not
    @Override
    protected void configure(HttpSecurity http) throws Exception {

        //super.configure(http);
        http.cors()
                .and().csrf().disable().exceptionHandling()
                .and().authorizeRequests().antMatchers("/api/users/register").permitAll()
                //.antMatchers("/api/**").permitAll()
                .anyRequest().authenticated();

    }

    /*
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        //super.configure(http);
        http
                .authorizeRequests()
                .antMatchers("/css/**", "/index","/api/**").permitAll();
                //.antMatchers("/user/**").hasRole("USER")
                //.and()
               //.formLogin()
                //.loginPage("/sign").failureUrl("/login-error");


    }

     */
}