package saue.kinoticketreservierungssystem.Repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import saue.kinoticketreservierungssystem.entity.Genre;
import saue.kinoticketreservierungssystem.entity.Movie;
import saue.kinoticketreservierungssystem.entity.ShowEvent;

import java.util.List;

public interface ShowEventRepository extends CrudRepository<ShowEvent, Integer> {
    ShowEvent findById(int id);
    List<ShowEvent> findByMid(int mid);
}
