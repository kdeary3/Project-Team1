package mil.t2com.moda.ratemyboss.comment;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CommentRepository extends JpaRepository<Comment, Long> {
    List<Comment> findAllByReviewId(Long reviewId);
}
