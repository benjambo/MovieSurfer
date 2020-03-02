package com.msgroup.moviesurfer.model;


import javax.persistence.*;
import javax.validation.constraints.NotBlank;


@Entity
public class Movie {



    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "Title is required")
    private String title;


    @NotBlank(message = "Genre is required")
    private String genre;

    @NotBlank(message = "Image is required")
    private String image;


 /*
    //@Embedded
    @ElementCollection//(fetch = FetchType.EAGER)
   // @CollectionTable(name = "seat", joinColumns = @JoinColumn(name = "movie"))
    private Set<Seat> seats = new HashSet<>();

*/


    public Movie() {

    }


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getGenre() {
        return genre;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }
}
