package mil.t2com.moda.ratemyboss.comment;

import jakarta.persistence.*;
import mil.t2com.moda.ratemyboss.review.Review;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;

@Entity
public class Comment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private Review review;

    private String comment;

    private Integer happyEmoji = 0;
    private Integer sadEmoji = 0;
    private Integer angryEmoji = 0;
    private Integer poopEmoji = 0;

    @CreationTimestamp
    @Column(nullable = false, updatable = false)
    private LocalDateTime createdAt;

    public Comment() {}

    public Comment(String comment, Review review) {
        this.comment = comment;
        this.review = review;
    }

    public Comment(LocalDateTime createdAt, String comment, Review review, Map<String, Integer> reaction) {
        this.createdAt = createdAt;
        this.comment = comment;
        this.review = review;
    }

    public Comment(Review review, String comment, Integer happyEmoji, Integer sadEmoji, Integer angryEmoji, Integer poopEmoji, LocalDateTime createdAt) {
        this.review = review;
        this.comment = comment;
        this.happyEmoji = happyEmoji;
        this.sadEmoji = sadEmoji;
        this.angryEmoji = angryEmoji;
        this.poopEmoji = poopEmoji;
        this.createdAt = createdAt;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Review getReview() {
        return review;
    }

    public void setReview(Review review) {
        this.review = review;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    public Integer getHappyEmoji() {
        return happyEmoji;
    }

    public void setHappyEmoji(Integer happyEmoji) {
        this.happyEmoji = happyEmoji;
    }

    public Integer getSadEmoji() {
        return sadEmoji;
    }

    public void setSadEmoji(Integer sadEmoji) {
        this.sadEmoji = sadEmoji;
    }

    public Integer getAngryEmoji() {
        return angryEmoji;
    }

    public void setAngryEmoji(Integer angryEmoji) {
        this.angryEmoji = angryEmoji;
    }

    public Integer getPoopEmoji() {
        return poopEmoji;
    }

    public void setPoopEmoji(Integer poopEmoji) {
        this.poopEmoji = poopEmoji;
    }
}
