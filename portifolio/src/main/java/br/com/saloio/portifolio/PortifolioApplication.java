package br.com.saloio.portifolio;

import lombok.RequiredArgsConstructor;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;

@SpringBootApplication
public class PortifolioApplication {

	public static void main(String[] args) {
		SpringApplication.run(PortifolioApplication.class, args);
	}

}
