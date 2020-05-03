package com.msgroup.moviesurfer.security;

import com.msgroup.moviesurfer.services.CustomUserDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.BeanIds;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

/**
 *  This class sets the security configuration for the whole app
 */
@Configuration
@EnableWebSecurity // To enable Spring security's web security support and provide the Spring MVC integration
//@EnableGlobalMethodSecurity(securedEnabled = true, jsr250Enabled = true, prePostEnabled = true)
public class SecurityConfig extends WebSecurityConfigurerAdapter {


    /**
     * Global Cross Origins - Cors Configuration
     * @return web mvc configurer adapter
     */
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

    /**
     * Used to encrypt passwords
     * @return BCrypt password encoder object
     */
    @Bean
    BCryptPasswordEncoder bCryptPasswordEncoder(){

        return new BCryptPasswordEncoder();
    }

    @Autowired
    private CustomUserDetailsService customUserDetailsService;

    @Autowired
    private JwtAuthenticationEntryPoint unauthorizedHandler;


    //       **** Authorization  ****
    /**
     * Configure method defines which URL paths should be secured and which should not
     * @param http
     * @throws Exception
     */
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        // csrf means Cross Site Request Forgery
        // csrf enabled by default to protect the application from CSRF attacks
        http.cors().and().csrf().disable()
                //authenticationEntryPoint handles what exceptions need to be thrown when user is not authenticated
                .exceptionHandling().authenticationEntryPoint(unauthorizedHandler).and()
                .authorizeRequests().antMatchers("/api/register", "/api/login").permitAll()
                .antMatchers("/",
                        "/favicon.ico",
                        "/**/*.png",
                        "/**/*.gif",
                        "/**/*.svg",
                        "/**/*.jpg",
                        "/**/*.html",
                        "/**/*.css",
                        "/**/*.js").permitAll()
                .anyRequest().authenticated();

    }

    /**
     * AuthenticationManagerBuilder takes the userDetailsService and the passwordEncoder
     * to build the authenticationManager, which used to authenticate the user
     * when he tying to log in.
     *
     * @param authenticationManagerBuilder object
     * @throws Exception exception
     */
    @Override
    protected void configure(AuthenticationManagerBuilder authenticationManagerBuilder) throws Exception {
        authenticationManagerBuilder.userDetailsService(customUserDetailsService).passwordEncoder(bCryptPasswordEncoder());
    }

    /**
     * The AuthenticationManager used to authenticate the user when he tying to log in.
     * It is built using the AuthenticationManagerBuilder.
     * @return super.authenticationManager()
     * @throws Exception exception
     */
    @Override
    @Bean(BeanIds.AUTHENTICATION_MANAGER)
    protected AuthenticationManager authenticationManager() throws Exception {
        return super.authenticationManager();
    }


}