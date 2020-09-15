package saue.kinoticketreservierungssystem;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import saue.kinoticketreservierungssystem.entity.ShowEvent;
import saue.kinoticketreservierungssystem.Repository.MovieRepository;
import saue.kinoticketreservierungssystem.Repository.ShowEventRepository;
import saue.kinoticketreservierungssystem.entity.Movie;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@CrossOrigin(origins = "*")
public class MovieController {
    @Autowired
    private MovieRepository movieRepository;
    private ShowEventRepository showEventRepository;

    @GetMapping(value= "/movies", produces= MediaType.APPLICATION_JSON_VALUE)
    public List<Movie> getMovies() {
        return (List<Movie>) movieRepository.findAll();
    }

    @GetMapping(value = "/movie")
    public Movie getMovie(@RequestParam("id") int id) {
//        class MovieWithTime extends Movie{
//            public List<String> playTime;
//            public List<String> getPlayTime() {
//                return playTime;
//            }
//
//            public void setPlayTime(List<String> playTime) {
//                this.playTime = playTime;
//            }
//
//
//        }
//        Movie movie = movieRepository.findById(id);
//        MovieWithTime movieWithTime = (MovieWithTime) movie;
//        List<ShowEvent> events = showEventRepository.getByMid(id);
//        List<String> playTime = new ArrayList<>();
//        for (ShowEvent event:  events) {
//            playTime.add(event.getDataTime());
//        }
//        movieWithTime.setPlayTime(playTime);
//        return movieWithTime;
        return movieRepository.findById(id);
    }


}
