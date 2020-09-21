package saue.kinoticketreservierungssystem.Repository;



import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import saue.kinoticketreservierungssystem.entity.Seat;

import java.util.List;

@CrossOrigin(origins = "*")
public interface SeatRepository extends CrudRepository<Seat, Integer> {

    @Query(value = "select s from Seatplan as sp inner join  Seat s on sp.SpID = s.sp_id where sp.SpID = (select se.sepId from ShowEvent se where se.SID = ?1)")
    List<Seat> findBySID(int sid);

}
