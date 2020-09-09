package saue.kinoticketreservierungssystem.Repository;

import org.springframework.data.repository.CrudRepository;
import saue.kinoticketreservierungssystem.entity.Movie;

public interface MovieRepository extends CrudRepository<Movie, Integer> {
    Movie findById(int id);
}
