package saue.kinoticketreservierungssystem;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import saue.kinoticketreservierungssystem.Repository.MovieRepository;
import saue.kinoticketreservierungssystem.entity.Movie;

import java.util.List;

@RestController
public class MovieController {
    @Autowired
    private MovieRepository movieRepository;

    @GetMapping(value= "/movie", produces= MediaType.APPLICATION_JSON_VALUE)
    public List<Movie> movie() {

        return (List<Movie>) movieRepository.findAll();
    }
}
