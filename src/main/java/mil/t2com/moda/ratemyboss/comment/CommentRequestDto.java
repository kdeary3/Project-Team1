package mil.t2com.moda.ratemyboss.comment;

public class CommentRequestDto {
    private String comment;
    private Long  reviewId;

    public CommentRequestDto() {
    }

    public CommentRequestDto(String comment, Long reviewId) {
        this.comment = comment;
        this.reviewId = reviewId;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public Long getReviewId() {
        return reviewId;
    }

    public void setReviewId(Long reviewId) {
        this.reviewId = reviewId;
    }
}
