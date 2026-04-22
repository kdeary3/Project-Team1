package mil.t2com.moda.ratemyboss.review;

import mil.t2com.moda.ratemyboss.leader.Leader;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.*;


@ExtendWith(MockitoExtension.class)
class ReviewServiceTest {

    List<Review> reviews = new ArrayList<>();

    @InjectMocks
    ReviewService reviewService;

    Review reviewOne;
    Review reviewTwo;
    Review reviewThree;

    @Mock
    private ReviewRepository reviewRepository;


    @Test
    void shouldGetAllReviews() {
        Leader leader = new Leader("Keno", "Deary", "Chief");
        Leader leader1 = new Leader("James", "Larimer", "Company Commander");
        leader.setId(1L);
        leader1.setId(2L);
        reviewOne = new Review(1, "My boss has no integrity.", LocalDateTime.now(), leader);
        reviewTwo = new Review(5, "My boss gave me every 4-day off last year!", LocalDateTime.now(), leader);
        reviewThree = new Review(3, "I'm not sure what my boss is doing 25% of the time.", LocalDateTime.now(), leader1);

        reviews.addAll(List.of(reviewOne, reviewTwo, reviewThree));
        when(reviewRepository.findAll()).thenReturn(reviews);

        List<Review> results = reviewService.findAllReviews();

        verify(reviewRepository, only()).findAll();
        assertThat(results).isEqualTo(reviews);

    }

    @Test
    void shouldSaveReview() {
        Leader leader = new Leader("Keno", "Deary", "Chief");
        reviewOne = new Review(1, "My boss has no integrity.", LocalDateTime.now(), leader);
        when(reviewRepository.save(reviewOne)).thenReturn(reviewOne);
        Review result = reviewService.saveReview(reviewOne);
        assertThat(result).isEqualTo(reviewOne);
        verify(reviewRepository, only()).save(reviewOne);
    }


}