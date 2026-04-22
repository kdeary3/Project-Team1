package mil.t2com.moda.ratemyboss.review;

import mil.t2com.moda.ratemyboss.leader.Leader;
import mil.t2com.moda.ratemyboss.leader.LeaderRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.data.jpa.test.autoconfigure.DataJpaTest;

import static org.assertj.core.api.Assertions.assertThat;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;

@DataJpaTest
class ReviewRepositoryTest {
    @Autowired
    private ReviewRepository reviewRepository;
    @Autowired
    private LeaderRepository leaderRepository;


@Test
void shouldSaveANewReview() {
    // Arrange
    Leader leader = new Leader("Keno", "Deary", "Chief");
    Review reviewOne = new Review(5, "My boss has no integrity.", LocalDateTime.now(), leader);

    // Act
    Review savedReview = reviewRepository.save(reviewOne);
    Optional<Review> result = reviewRepository.findById(savedReview.getId());

    // Assert
    assertThat(result).isNotEmpty();
    assertEquals("My boss has no integrity.", result.get().getDescription());
    assertEquals(5, result.get().getRating());

}
}