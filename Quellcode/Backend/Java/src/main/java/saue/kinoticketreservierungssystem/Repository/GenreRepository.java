package saue.kinoticketreservierungssystem.Repository;

import org.springframework.data.repository.CrudRepository;
import saue.kinoticketreservierungssystem.entity.Genre;

public interface GenreRepository extends CrudRepository<Genre, Integer> {
    Genre findById(int id);
}
