package saue.kinoticketreservierungssystem;

import com.ulisesbocchio.jasyptspringboot.annotation.EnableEncryptableProperties;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@EnableEncryptableProperties
public class KinoticketreservierungssystemApplication {

    public static void main(String[] args) {
        SpringApplication.run(KinoticketreservierungssystemApplication.class, args);
    }

}
