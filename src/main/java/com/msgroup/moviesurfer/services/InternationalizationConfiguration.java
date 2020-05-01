package com.msgroup.moviesurfer.services;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.support.ResourceBundleMessageSource;
import org.springframework.web.servlet.LocaleResolver;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
//import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;
import org.springframework.web.servlet.i18n.LocaleChangeInterceptor;
import org.springframework.web.servlet.i18n.SessionLocaleResolver;

import java.util.Locale;

/**
 * Configuration class for localization & Internationalization
 */
@Configuration
public class InternationalizationConfiguration implements WebMvcConfigurer { // tai extends WebMvcConfigurerAdapter

    /**
     * Spring uses this Bean to know which language will be returned.
     * This Bean has access to the ResourceBundles with the specified basenames "messages"
     * ResourceBundleMessageSource resolves the messages using Java resource bundles.
     * Spring's locale decides which language will be returned. messageSource always needs a Locale
     * parameter to resolve a message. If none can be found Spring falls back to Locale.getDefault().
     * @return messageSource of type ResourceBundleMessageSource
     */
    @Bean
    public ResourceBundleMessageSource messageSource() {
        ResourceBundleMessageSource messageSource = new ResourceBundleMessageSource();
        // Set default encoding as UTF-8 to make letters like ö,ä,å appears correctly (to support different languages)
        messageSource.setDefaultEncoding("UTF-8");
        // The addBasenames() method adds the specified basenames to the existing basename configuration.
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
     * LocaleChangeInterceptor is a used to change Locale based
     * on the value of the language parameter added to the request.
     *
     * @language should be the name of the request param i.e  localhost:8010/api/movies?language=fi
     *
     * @return localeChangeInterceptor
     * Note: All requests to the backend needing Internationalization should have the "language" param
     */

    @Bean
    public LocaleChangeInterceptor localeChangeInterceptor(){
        LocaleChangeInterceptor localeChangeInterceptor = new LocaleChangeInterceptor();
        localeChangeInterceptor.setParamName("language");
        return localeChangeInterceptor;
    }

    /**
     * addInterceprtors() method enables the application to change the language
     * depending on the language parameter appended to any request.
     *  If the request does not have a language parameter or if
     *   the language parameter does not exist, it falls back to the default Locale specified
     * @param registry
     */
    @Override
    public void addInterceptors(InterceptorRegistry registry) {
      registry.addInterceptor(localeChangeInterceptor());
    }
}
