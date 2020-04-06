package com.msgroup.moviesurfer;

import com.msgroup.moviesurfer.model.Seat;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;
import org.junit.After;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

/**
 * Database test for seat entities
 */

public class SeatDatabaseTest {

    static SessionFactory sessionFactory;
    static Session session = null;
    static Seat seat;

    @BeforeAll
    static void before() {
        // setup the session factory and configure hibernate
        Configuration configuration = new Configuration();
        configuration.addAnnotatedClass(Seat.class);
        configuration.setProperty("hibernate.dialect",
                "org.hibernate.dialect.MySQL5Dialect");
        configuration.setProperty("hibernate.connection.driver_class",
                "com.mysql.cj.jdbc.Driver");
        configuration.setProperty("hibernate.connection.url", "jdbc:mysql://10.114.32.11:3306/moviesurfer");
        configuration.setProperty("hibernate.connection.username", "abdullah");
        configuration.setProperty("hibernate.connection.password", "moviesurfer");
        configuration.setProperty("hibernate.hbm2ddl.auto", "create-drop");
        sessionFactory = configuration.buildSessionFactory();
        session = sessionFactory.openSession();

        Seat seat = new Seat();
        //movie object setup
        seat.setReservedTo("email.address@ms.com");
        seat.setReserved(true);
        seat.setNumber(15);
        session.beginTransaction();
        session.saveOrUpdate(seat);
        session.evict(seat); //clear object from cache
        session.getTransaction().commit();
    }
    @Test
    public void getReservedToFromSeatDatabaseTest(){
        Seat testSeat = new Seat();
        session.load(testSeat, (long)1);
        assertEquals("email.address@ms.com", testSeat.getReservedTo());
        session.evict(testSeat);
    }
    @Test
    public void getIsReservedFromSeatDatabaseTest(){
        Seat testSeat = new Seat();
        session.load(testSeat, (long)1);
        assertTrue(testSeat.isReserved());
        session.evict(testSeat);
    }

    @Test
    public void getSeatNumberFromSeatDatabaseTest(){
        Seat testSeat = new Seat();
        session.load(testSeat, (long)1);
        assertEquals(15, testSeat.getNumber());
        session.evict(testSeat);
    }

    @After
    public void after () {
        session.close();
        sessionFactory.close();
    }
}
