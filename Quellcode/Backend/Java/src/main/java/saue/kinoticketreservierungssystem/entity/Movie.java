package saue.kinoticketreservierungssystem.entity;

import javax.persistence.*;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "movie")
public class Movie {
    @Id private int MID;
    private String title;
    private String description;
    private String prodCountry;
    private String trailer;
    private String cover;
    private int length, fsk, bookedCounter;

    @ManyToMany
    @JoinTable(
            name = "movie_genre",
            joinColumns = @JoinColumn(name = "mid"),
            inverseJoinColumns = @JoinColumn(name = "gid")
    )
    private Set<Genre> genres;

    @ManyToMany
    @JoinTable(
            name = "plays_in",
            joinColumns = @JoinColumn(name = "mid"),
            inverseJoinColumns = @JoinColumn(name = "pid")
    )
    private Set<Person> actors;

    @ManyToMany
    @JoinTable(
            name = "directs",
            joinColumns = @JoinColumn(name = "mid"),
            inverseJoinColumns = @JoinColumn(name = "pid")
    )
    private Set<Person> directors;

    public Set<Genre> getGenres() {
        return genres;
    }

    public void setGenres(Set<Genre> genres) {
        this.genres = genres;
    }

    public Set<Person> getDirectors() {
        return directors;
    }

    public void setDirectors(Set<Person> directors) {
        this.directors = directors;
    }

    public Set<Person> getActors() {
        return actors;
    }

    public void setActors(Set<Person> actors) {
        this.actors = actors;
    }

    public String getTitle() {
        return this.title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getCover() {
        return cover;
    }

    public void setCover(String cover) {
        this.cover = cover;
    }

    public String getDescription() {
        return this.description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getProdCountry() {
        return this.prodCountry;
    }

    public void setProdCountry(String prodCountry) {
        this.prodCountry = prodCountry;
    }

    public String getTrailer() {
        return this.trailer;
    }

    public void setTrailer(String trailer) {
        this.trailer = trailer;
    }

    public int getMID() {
        return this.MID;
    }

    public void setMID(int MID) {
        this.MID = MID;
    }

    public int getLength() {
        return this.length;
    }

    public void setLength(int length) {
        this.length = length;
    }

    public int getFsk() {
        return this.fsk;
    }

    public void setFsk(int fsk) {
        this.fsk = fsk;
    }

    public int getBookedCounter() {
        return this.bookedCounter;
    }

    public void setBookedCounter(int bookedCounter) {
        this.bookedCounter = bookedCounter;
    }

}
