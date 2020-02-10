package com.msgroup.moviesurfer;

import com.msgroup.moviesurfer.model.User;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;
import org.junit.After;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;


/**
 * database test will not work if you are not connected
 * to metropolia VPN
 */
public class DatabaseTest {

    static SessionFactory sessionFactory;
    static Session session = null;
    static User user;

    @BeforeAll
    static void before() {
        // setup the session factory
        Configuration configuration = new Configuration();
        configuration.addAnnotatedClass(User.class);
        configuration.setProperty("hibernate.dialect",
                "org.hibernate.dialect.MySQL5Dialect");
        configuration.setProperty("hibernate.connection.driver_class",
                "com.mysql.cj.jdbc.Driver");
        configuration.setProperty("hibernate.connection.url", "jdbc:mysql://10.114.32.11:3306/moviesurfer");
        configuration.setProperty("hibernate.connection.username", "abdullah");
        configuration.setProperty("hibernate.connection.password", "moviesurfer");
        configuration.setProperty("hibernate.hbm2ddl.auto", "create");
        sessionFactory = configuration.buildSessionFactory();
        session = sessionFactory.openSession();

        user = new User();
        //user object setup
        user.setFirstName("user");
        user.setLastName("name");
        user.setEmail("user.name@setemail.com");
        user.setPassword("verysecure");


        session.beginTransaction();
        session.saveOrUpdate(user);
        session.evict(user); //clear object from cache

        session.getTransaction().commit();
    }

    @Test
    public void getEmailFromDbTest(){
        User testUser = new User();
        session.load(testUser, (long)1);

        assertEquals("user.name@setemail.com", testUser.getEmail());
        session.evict(testUser);
    }

    @Test
    public void getFistNameFromDbTest(){
        User testUser = new User();
        session.load(testUser, (long)1);

        assertEquals("user", testUser.getFirstName());
        session.evict(testUser);
    }

    @Test
    public void getLastNameFromDbTest(){
        User testUser = new User();
        session.load(testUser, (long)1);

        assertEquals("name", testUser.getLastName());
        session.evict(testUser);
    }

    @Test
    public void getPasswordFromDbTest(){
        User testUser = new User();
        session.load(testUser, (long)1);

        assertEquals("verysecure", testUser.getPassword());
        session.evict(testUser);
    }

    @Test
    public void dbTest(){

        User testUser = new User();
        session.load(testUser, (long)1);

        assertEquals("user", testUser.getFirstName());
        assertEquals("user.name@setemail.com", testUser.getEmail());
        assertEquals("name", testUser.getLastName());
        assertEquals("verysecure", testUser.getPassword());
        session.evict(testUser);
    }

    @After
    public void after() {
        session.close();
        sessionFactory.close();
    }

}
