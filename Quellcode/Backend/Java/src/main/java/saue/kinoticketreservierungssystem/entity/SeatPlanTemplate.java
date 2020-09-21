package saue.kinoticketreservierungssystem.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
@Entity
public class SeatPlanTemplate {
    @Id
    private int spTId;
    private int totalNumberOfSeat;

    public int getSpTId() {
        return spTId;
    }

    public void setSpTId(int spTId) {
        this.spTId = spTId;
    }

    public int getTotalNumberOfSeat() {
        return totalNumberOfSeat;
    }

    public void setTotalNumberOfSeat(int totalNumberOfSeat) {
        this.totalNumberOfSeat = totalNumberOfSeat;
    }
}
