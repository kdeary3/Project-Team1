package mil.t2com.moda.ratemyboss.comment;

import jakarta.persistence.Id;
import mil.t2com.moda.ratemyboss.leader.Leader;
import mil.t2com.moda.ratemyboss.review.Review;
import mil.t2com.moda.ratemyboss.review.ReviewRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class CommentService {
    private final CommentRepository commentRepository;
    private final ReviewRepository reviewRepository;

    public CommentService(CommentRepository commentRepository, ReviewRepository reviewRepository) {
        this.commentRepository = commentRepository;
        this.reviewRepository = reviewRepository;
    }

    public Comment saveComment(Comment comment) {
        return commentRepository.save(comment);
    }

//    public List<CommentResponse> findAllCommentsByReviewId(Long reviewId) {
//       return commentRepository.findAllByReviewId(reviewId).stream()
//               .map(c -> new CommentResponse(
//                       c.getComment(),
//                       c.getCreatedAt()
//               )).toList();
//
//    }

    public List<Comment> findAllCommentsByReviewId(Long reviewId) {
        return commentRepository.findAllByReviewId(reviewId);
    }

    public Comment saveComment(CommentRequestDto commentRequestDto) {
        Review review = reviewRepository.getReviewById(commentRequestDto.getReviewId());
        //todo add check if review exists
        Comment comment = new Comment(commentRequestDto.getComment(), review);
        return commentRepository.save(comment);
    }

    public Comment updateComment(CommentPatchDto comment) {
        Comment commentUpdate = commentRepository.findById(comment.getId()).get();
        commentUpdate.setAngryEmoji(comment.getAngryEmoji());
        commentUpdate.setSadEmoji(comment.getSadEmoji());
        commentUpdate.setPoopEmoji(comment.getPoopEmoji());
        commentUpdate.setHappyEmoji(comment.getHappyEmoji());

        return commentRepository.save(commentUpdate);
    }

}
