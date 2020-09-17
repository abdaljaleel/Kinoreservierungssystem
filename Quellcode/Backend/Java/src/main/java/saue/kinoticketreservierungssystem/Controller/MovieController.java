package saue.kinoticketreservierungssystem.Controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import saue.kinoticketreservierungssystem.entity.ShowEvent;
import saue.kinoticketreservierungssystem.Repository.MovieRepository;
import saue.kinoticketreservierungssystem.Repository.ShowEventRepository;
import saue.kinoticketreservierungssystem.entity.Movie;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/movie")
public class MovieController {
    @Autowired
    private MovieRepository movieRepository;


    @GetMapping(value= "/movies", produces= MediaType.APPLICATION_JSON_VALUE)
    public List<Movie> getMovies() {
        return (List<Movie>) movieRepository.findAll();
    }

    @GetMapping(value = "/movie")
    public Movie getMovie(@RequestParam("mid") int mid) {
        return movieRepository.findById(mid);
    }
}
