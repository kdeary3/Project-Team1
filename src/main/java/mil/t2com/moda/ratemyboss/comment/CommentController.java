package mil.t2com.moda.ratemyboss.comment;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/")
@CrossOrigin(origins = "*")
public class CommentController {

    @Autowired
    private CommentService commentService;

    public CommentController(CommentService commentService) {
        this.commentService = commentService;
    }

    @GetMapping("{reviewId}/comments")
    public List<Comment> findAllComments(@PathVariable Long reviewId) {
        return commentService.findAllCommentsByReviewId(reviewId);
    }

    @PostMapping("comment")
    @ResponseStatus(HttpStatus.CREATED)
    public Comment addComment(@RequestBody CommentRequestDto commentRequestDto) {
        return commentService.saveComment(commentRequestDto);
    }

    @PatchMapping("comment")
    @ResponseStatus(HttpStatus.CREATED)
    public Comment updateComment(@RequestBody CommentPatchDto comment) {
        return commentService.updateComment(comment);
    }
}
