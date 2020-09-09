package saue.kinoticketreservierungssystem;

import com.ulisesbocchio.jasyptspringboot.annotation.EnableEncryptableProperties;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.data.rest.RepositoryRestMvcAutoConfiguration;


@SpringBootApplication(exclude = RepositoryRestMvcAutoConfiguration.class)
@EnableEncryptableProperties
public class KinoticketreservierungssystemApplication {

    public static void main(String[] args) {
        SpringApplication.run(KinoticketreservierungssystemApplication.class, args);
    }

}
