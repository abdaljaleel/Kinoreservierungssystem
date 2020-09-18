package saue.kinoticketreservierungssystem.Repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import saue.kinoticketreservierungssystem.entity.ShowEvent;

import java.util.List;

@CrossOrigin(origins = "*")
public interface ShowEventRepository extends CrudRepository<ShowEvent, Integer> {

    @Query("select se from ShowEvent se where se.dateTime = current_date")
    List<ShowEvent> findAll();
    //ShowEvent findById(int id);
    List<ShowEvent> findByMid(int mid);
}
