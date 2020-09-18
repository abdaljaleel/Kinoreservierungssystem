package saue.kinoticketreservierungssystem.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.time.LocalDateTime;

@Entity
public class ShowEvent {

    @Id private int SID;
    private LocalDateTime showTime;
    private boolean is3D;
    private int mid;
    private int sepId;


    public int getSID() {
        return SID;
    }

    public void setSID(int SID) {
        this.SID = SID;
    }

    public LocalDateTime getShowTime() {
        return showTime;
    }

    public void setShowTime(LocalDateTime showTime) {
        this.showTime = showTime;
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

    public ShowEvent() {

    }
}
