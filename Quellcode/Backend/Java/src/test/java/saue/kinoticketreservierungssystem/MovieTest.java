package saue.kinoticketreservierungssystem;

import org.junit.Before;
import org.junit.Test;
import org.junit.jupiter.api.BeforeAll;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.request.MockHttpServletRequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import saue.kinoticketreservierungssystem.entity.Movie;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

public class MovieTest extends AbstractTest {

    @Override
    @Before
    public void setUp(){
        super.setUp();
    }

    @Test
    public void getProductsList() throws Exception {
        String uri = "/movies";
        MockHttpServletRequestBuilder a = MockMvcRequestBuilders.get(uri).accept(MediaType.APPLICATION_JSON_VALUE);
        MvcResult mvcResult = mvc.perform(a).andReturn();

        int status = mvcResult.getResponse().getStatus();
        assertEquals(200, status);
        String content = mvcResult.getResponse().getContentAsString();
        Movie[] movielist = super.mapFromJson(content, Movie[].class);
        assertTrue(movielist.length > 0);
    }
}
