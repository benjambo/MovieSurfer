package com.msgroup.moviesurfer.services;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.support.ResourceBundleMessageSource;
import org.springframework.web.servlet.LocaleResolver;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;
import org.springframework.web.servlet.i18n.LocaleChangeInterceptor;
import org.springframework.web.servlet.i18n.SessionLocaleResolver;

import java.util.Locale;

/**
 * Configuration class for Internationalization
 */
@Configuration
public class InternationalizationConfiguration implements WebMvcConfigurer { // tai extends WebMvcConfigurerAdapter

    @Bean
    public ResourceBundleMessageSource messageSource() {
        ResourceBundleMessageSource messageSource = new ResourceBundleMessageSource();
        messageSource.addBasenames("messages");
        return messageSource;
    }

    /**
     * LocaleResolver Bean enables to define a default Locale for the application
     *
     *  @return default Locale set by the user
     */
    @Bean
    public LocaleResolver localeResolver() {
        SessionLocaleResolver sessionLocaleResolver = new SessionLocaleResolver();
        sessionLocaleResolver.setDefaultLocale(Locale.US);
        return sessionLocaleResolver;
    }

    /**
     * LocaleChangeInterceptor is a used to change the new Locale based
     * on the value of the language parameter added to a request.
     *
     * @language should be the name of the request param i.e  localhost:8010/api/movies?language=fi
     *
     * @return localeChangeInterceptor
     * Note: All requests to the backend needing Internationalization should have the "language" request param
     */

    @Bean
    public LocaleChangeInterceptor localeChangeInterceptor(){
        LocaleChangeInterceptor localeChangeInterceptor = new LocaleChangeInterceptor();
        localeChangeInterceptor.setParamName("language");
        return localeChangeInterceptor;
    }

    // addInterceprtors() method enables the application to change the language
    // depending on the language parameter appended to any request.
    //  If the request does not have a language parameter or if
    //  the language parameter does not exist, it falls back to the default Locale specified
    @Override
    public void addInterceptors(InterceptorRegistry registry) {
      registry.addInterceptor(localeChangeInterceptor());
    }
}
