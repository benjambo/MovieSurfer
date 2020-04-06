package com.msgroup.moviesurfer;

import com.msgroup.moviesurfer.model.Theater;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;

public class TheaterTest {

    Theater theater = new Theater();

    @Test
    public void testTheaterId(){

        long id = 1;
        theater.setId(id);
        assertEquals(id, theater.getId(), "wrong id");
    }

    @Test
    public void testTheaterName(){

        String name = "teatteri";
        theater.setName(name);
        assertEquals(name, theater.getName(), "wrong name");
    }

    @Test
    public void testTheaterCity(){

        String city = "Espoo";
        theater.setCity(city);
        assertEquals(city, theater.getCity(), "wrong city");
    }

    @Test
    public void testTheaterAddress(){

        String address = "Karakallion kampus";
        theater.setAddress(address);
        assertEquals(address, theater.getAddress(), "wrong address");
    }

}
