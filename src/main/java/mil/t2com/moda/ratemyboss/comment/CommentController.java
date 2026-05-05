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

    @GetMapping("/api/v1/comment")
    public List<Comment> findAllComments() {
       return commentService.findAllComments();
    }
    @GetMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Comment saveComment(@RequestBody Comment comment) {
        return commentService.saveComment(comment);

    }
}
