package saue.kinoticketreservierungssystem.entity;

import javax.persistence.*;
import java.util.List;

@Entity
public class Seatplan {

    @Id
    private int SpID;
    private int SpTID;
    private int HID;



    public int getSpID() {
        return SpID;
    }

    public void setSpID(int spID) {
        SpID = spID;
    }

    public int getSpTID() {
        return SpTID;
    }

    public void setSpTID(int spTID) {
        SpTID = spTID;
    }

    public int getHID() {
        return HID;
    }

    public void setHID(int HID) {
        this.HID = HID;
    }

}
