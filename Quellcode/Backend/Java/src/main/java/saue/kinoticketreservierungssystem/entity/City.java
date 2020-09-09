import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class City {
    @Id
    private int plz;
    private String city;

    public int getPlz() {
        return plz;
    }

    public void setPlz(int plz) {
        this.plz = plz;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }
}

