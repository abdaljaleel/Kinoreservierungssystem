package saue.kinoticketreservierungssystem.Repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import saue.kinoticketreservierungssystem.entity.Movie;

@CrossOrigin(origins = "*")
public interface MovieRepository extends CrudRepository<Movie, Integer> {
    Movie findById(int id);
}
