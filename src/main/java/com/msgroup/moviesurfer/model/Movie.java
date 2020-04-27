package com.msgroup.moviesurfer.model;


import javax.persistence.*;
import javax.validation.constraints.NotBlank;

/**
 * Movie Entity
 */

@Entity // Specifies that the class is an entity and is mapped to a database table
public class Movie {

    // Generate automatically an id for every movie object
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    //@NorBlank: constraint on the server level
    @NotBlank(message = "Title is required")
    private String title;

    //@NorBlank: constraint on the server level
    @NotBlank(message = "Genre is required")
    private String genre;

    //@NorBlank: constraint on the server level
    @NotBlank(message = "Image is required")
    private String image;


 /*
    //@Embedded
    @ElementCollection//(fetch = FetchType.EAGER)
   // @CollectionTable(name = "seat", joinColumns = @JoinColumn(name = "movie"))
    private Set<Seat> seats = new HashSet<>();

*/

    /**
     * Empty constructor
     */
    public Movie() {

    }

    /**
     * To get movie's id
     * @return id type Long
     */
    public Long getId() {
        return id;
    }

    /**
     * To set movie's id
     * @param id type Long
     */
    public void setId(Long id) {
        this.id = id;
    }

    /**
     * Too get movie's title
     * @return title type String
     */
    public String getTitle() {
        return title;
    }

    /**
     * To set movie's title
     * @param title type String
     */
    public void setTitle(String title) {
        this.title = title;
    }

    /**
     * To get movie's genre
     * @return genre String
     */
    public String getGenre() {
        return genre;
    }

    /**
     * To set movie's genre
     * @param genre type String
     */
    public void setGenre(String genre) {
        this.genre = genre;
    }

    /**
     * To get movie's image
     * @return image type String
     */
    public String getImage() {
        return image;
    }

    /**
     * To set movie's image
     * @param image type String
     */
    public void setImage(String image) {
        this.image = image;
    }

}
