package mil.t2com.moda.ratemyboss.review;

import mil.t2com.moda.ratemyboss.leader.Leader;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Captor;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.webmvc.test.autoconfigure.WebMvcTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.bean.override.mockito.MockitoBean;
import org.springframework.test.web.servlet.MockMvc;
import tools.jackson.databind.ObjectMapper;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.only;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;


import static org.junit.jupiter.api.Assertions.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;

@WebMvcTest(ReviewController.class)
class ReviewControllerTest {
    Review review1;
    Review review2;
    Review review3;
    @BeforeEach
    void setUp() {


    }
    @Autowired
    MockMvc mockMvc;
    @Autowired
    ObjectMapper objectMapper;
    @MockitoBean
    ReviewService reviewService;
    @Test
    void shouldSaveReview() throws  Exception {
        Leader leader = new Leader("Keno", "Deary", "Chief");
        review1 = new Review(1, "My boss has no integrity.", LocalDateTime.now(), leader);
        review1.setId(1L);


        when(reviewService.saveReview(any(Review.class))).thenReturn(review1);
        mockMvc.perform(post("/api/v1/review")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(review1)))
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.description").value("My boss has no integrity."));
    }
    @Test
    void shouldGetAllReviews() throws Exception{
        List<Review> reviews = new ArrayList<>();
        Leader leader = new Leader("Keno", "Deary", "Chief");
        review1 = new Review(1, "My boss has no integrity.", LocalDateTime.now(), leader);
        review1.setId(1L);
        review2 = new Review(2, "He smells funny.", LocalDateTime.now(), leader);
        review2.setId(2L);
        reviews.add(review1);
        reviews.add(review2);
        when(reviewService.findAllReviews()).thenReturn(reviews);

        mockMvc.perform(get("/api/v1/review"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[0].description").value("My boss has no integrity."))
                .andExpect(jsonPath("$[1].rating").value(2));


    }
}