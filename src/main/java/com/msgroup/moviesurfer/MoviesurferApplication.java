package com.msgroup.moviesurfer;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.LocaleResolver;
import org.springframework.web.servlet.i18n.LocaleChangeInterceptor;
import org.springframework.web.servlet.i18n.SessionLocaleResolver;

import java.util.Locale;


/**
 * The main class of Spring-Boot application
 */
@SpringBootApplication
//@ComponentScan(basePackages ={"com.msgroup.moviesurfer.controller", "com.msgroup.moviesurfer.services" })
//@EnableJpaRepositories
public class MoviesurferApplication {
    public static void main(String[] args) {
        SpringApplication.run(MoviesurferApplication.class, args);

    }


    /*
    @Bean
    BCryptPasswordEncoder bCryptPasswordEncoder(){
        return new BCryptPasswordEncoder();
    }

     */
    /*
    // Global Cross Origins
    @Configuration
    public class MyConfiguration {

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
    }


 */

}
