package mil.t2com.moda.ratemyboss.comment;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping
public class CommentController {

    @Autowired
    private CommentService commentService;

    public CommentController(CommentService commentService) {
        this.commentService = commentService;
    }

    @GetMapping("/api/v1/{reviewId}/comments")
    @ResponseStatus(HttpStatus.OK)
    public List<Comment> findAllCommentsByReviewId(@PathVariable Long reviewId) {
       return commentService.findAllCommentsByReviewId(reviewId);
    }
    @GetMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Comment addComment(@RequestBody Comment comment) {
        return commentService.saveComment(comment);

    }
}
