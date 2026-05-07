package mil.t2com.moda.ratemyboss.comment;

import java.time.LocalDateTime;
import java.util.Date;

public record CommentResponse(
        Long id,
        String comment,
        LocalDateTime created_at

) { }
