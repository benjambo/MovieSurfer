package com.msgroup.moviesurfer;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


@SpringBootApplication
//@ComponentScan(basePackages ={"com.msgroup.moviesurfer.controller", "com.msgroup.moviesurfer.services" })
//@EnableJpaRepositories
public class MoviesurferApplication{


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
