package mil.t2com.moda.ratemyboss.review;

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
        reviewOne = new Review(1, "My boss has no integrity.", LocalDateTime.now());
        reviewTwo = new Review(5, "My boss gave me every 4-day off last year!", LocalDateTime.now());
        reviewThree = new Review(3, "I'm not sure what my boss is doing 25% of the time.", LocalDateTime.now());

        reviews.addAll(List.of(reviewOne, reviewTwo, reviewThree));
        when(reviewRepository.findAll()).thenReturn(reviews);

        List<Review> results = reviewService.findAllReviews();

        verify(reviewRepository, only()).findAll();
        assertThat(results).isEqualTo(reviews);

    }


}