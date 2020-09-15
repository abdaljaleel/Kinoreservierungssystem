package saue.kinoticketreservierungssystem.entity;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Genre {
    @Id
    private int GID;
    private String name;

    public int getGID() {
        return GID;
    }

    public void setGID(int GID) {
        this.GID = GID;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getBeschreibung() {
        return beschreibung;
    }

    public void setBeschreibung(String beschreibung) {
        this.beschreibung = beschreibung;
    }

    String beschreibung;
}
