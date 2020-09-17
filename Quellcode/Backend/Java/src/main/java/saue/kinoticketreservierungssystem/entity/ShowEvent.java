package saue.kinoticketreservierungssystem.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import java.time.LocalDateTime;

@Entity
public class ShowEvent {
    @Id
    private int sID;
    private LocalDateTime dateTime;
    private boolean is3D;
    private int mid;
    private int sepId;



    public int getsID() {
        return sID;
    }

    public void setsID(int sID) {
        this.sID = sID;
    }

    public LocalDateTime getDateTime() {
        return dateTime;
    }

    public void setDateTime(LocalDateTime dateTime) {
        this.dateTime = dateTime;
    }

    public boolean isIs3D() {
        return is3D;
    }

    public void setIs3D(boolean is3D) {
        this.is3D = is3D;
    }

    public int getMid() {
        return mid;
    }

    public void setMid(int mid) {
        this.mid = mid;
    }

    public int getSepId() {
        return sepId;
    }

    public void setSepId(int sepId) {
        this.sepId = sepId;
    }
}
