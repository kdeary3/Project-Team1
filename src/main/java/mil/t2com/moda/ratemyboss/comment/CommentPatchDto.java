package mil.t2com.moda.ratemyboss.comment;

import java.util.Date;

public class CommentPatchDto {
    Long id;
    Long reviewId;
    String comment;
    Date created_at;
    int happyEmoji;
    int sadEmoji;
    int angryEmoji;
    int poopEmoji;

    public CommentPatchDto(Long id, Long reviewId, String comment, Date created_at, int happyEmoji, int sadEmoji, int angryEmoji, int poopEmoji) {
        this.id = id;
        this.reviewId = reviewId;
        this.comment = comment;
        this.created_at = created_at;
        this.happyEmoji = happyEmoji;
        this.sadEmoji = sadEmoji;
        this.angryEmoji = angryEmoji;
        this.poopEmoji = poopEmoji;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getReviewId() {
        return reviewId;
    }

    public void setReviewId(Long reviewId) {
        this.reviewId = reviewId;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public Date getCreated_at() {
        return created_at;
    }

    public void setCreated_at(Date created_at) {
        this.created_at = created_at;
    }

    public int getHappyEmoji() {
        return happyEmoji;
    }

    public void setHappyEmoji(int happyEmoji) {
        this.happyEmoji = happyEmoji;
    }

    public int getSadEmoji() {
        return sadEmoji;
    }

    public void setSadEmoji(int sadEmoji) {
        this.sadEmoji = sadEmoji;
    }

    public int getAngryEmoji() {
        return angryEmoji;
    }

    public void setAngryEmoji(int angryEmoji) {
        this.angryEmoji = angryEmoji;
    }

    public int getPoopEmoji() {
        return poopEmoji;
    }

    public void setPoopEmoji(int poopEmoji) {
        this.poopEmoji = poopEmoji;
    }
}
