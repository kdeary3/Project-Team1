package mil.t2com.moda.ratemyboss.comment;

import mil.t2com.moda.ratemyboss.leader.Leader;
import mil.t2com.moda.ratemyboss.review.Review;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CommentService {
    private final CommentRepository commentRepository;

    public CommentService(CommentRepository commentRepository) {
        this.commentRepository = commentRepository;
    }

    public Comment saveComment(Comment comment) {
        return commentRepository.save(comment);
    }

    public List<Comment> findAllCommentsByReviewId(Long reviewId) {
        return commentRepository.findAllById(reviewId);
    }

    public Comment saveComment(Comment comment, Review review) {
        return commentRepository.save(comment);
    }
}
