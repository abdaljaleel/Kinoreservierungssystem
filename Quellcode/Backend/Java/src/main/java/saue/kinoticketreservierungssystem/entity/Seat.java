package saue.kinoticketreservierungssystem.entity;

import javax.persistence.*;

@Entity
public class Seat {
    @Id
    @Column(name = "SeID")
    private int seId;
    private int row;
    private int seat;
    private boolean booked;
    private boolean handicap;
    private float DefaultPrice;
    private String Category;
    private boolean isDiscounted;
    private int sp_id;

    public int getSp_id() {
        return sp_id;
    }

    public void setSp_id(int sp_id) {
        this.sp_id = sp_id;
    }

    public int getSeId() {
        return seId;
    }

    public void setSeId(int seId) {
        this.seId = seId;
    }

    public int getRow() {
        return row;
    }

    public void setRow(int row) {
        this.row = row;
    }

    public int getSeat() {
        return seat;
    }

    public void setSeat(int seat) {
        this.seat = seat;
    }

    public boolean isBooked() {
        return booked;
    }

    public void setBooked(boolean booked) {
        this.booked = booked;
    }

    public boolean isHandicap() {
        return handicap;
    }

    public void setHandicap(boolean handicap) {
        this.handicap = handicap;
    }

    public float getDefaultPrice() {
        return DefaultPrice;
    }

    public void setDefaultPrice(float defaultPrice) {
        DefaultPrice = defaultPrice;
    }

    public String getCategory() {
        return Category;
    }

    public void setCategory(String category) {
        Category = category;
    }

    public boolean isDiscounted() {
        return isDiscounted;
    }

    public void setDiscounted(boolean discounted) {
        isDiscounted = discounted;
    }
}
