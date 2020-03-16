package com.msgroup.moviesurfer;

import com.msgroup.moviesurfer.services.CustomEmailService;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

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

    CustomEmailService customEmailService = new CustomEmailService();

    public void sendEmail() {
        System.out.println("################");
        String text = "Seat Number has been reserved for movie ";
        customEmailService.sendSimpleMessage("moviesurfer2020@gmail.com", "moviesurfer2020@gmail.com", "Seat Reservation Confirmation", text);
        System.out.println("Confirmation email sent successfully!");
    }
*/


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
