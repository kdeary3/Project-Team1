package mil.t2com.moda.ratemyboss.comment;

import mil.t2com.moda.ratemyboss.leader.Leader;
import mil.t2com.moda.ratemyboss.review.Review;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.ArrayList;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class CommentServiceTest {
    @Mock
    private CommentRepository commentRepository;

    @InjectMocks
    private CommentService commentService;

    List<Comment> comments = new ArrayList<Comment>();

    @Test
    void shouldFindCommentByReviewId() {
        Leader leader = new Leader("Joe", "Mama", "CEO");
        Review review = new Review(5, "terrible", leader);
        Comment comment = new Comment("i agree", review);

        when(commentRepository.save(comment)).thenReturn(comment);
        Comment saved = commentService.saveComment(comment);

        assertThat(saved).isEqualTo(comment);
        verify(commentRepository, only()).save(comment);
    }

    @Test
    void shouldFindAllComments() {
        Leader leader = new Leader("Joe", "Mama", "CEO");
        Review review = new Review(5, "terrible", leader);
        Comment comment = new Comment("i agree", review);
        Comment comment2 = new Comment("i also agree", review);
        review.setId(1L);

        comments.addAll(List.of(comment, comment2));

        when(commentRepository.findAll()).thenReturn(comments);

        List<Comment> results = commentService.findAllComments();

        verify(commentRepository, only()).findAll();
        assertThat(results).isEqualTo(comments);
    }

}