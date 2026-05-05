package mil.t2com.moda.ratemyboss.comment;

import jakarta.persistence.*;
import mil.t2com.moda.ratemyboss.review.Review;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;

@Entity
public class Comment {

    @Id
    @GeneratedValue
    private int id;

    @ManyToOne
    private Review review;

    private String comment;

    @CreationTimestamp
    @Column(nullable = false, updatable = false)
    private LocalDateTime createdAt;

    public Comment() {}

    public Comment(String comment, Review review) {
        this.comment = comment;
        this.review = review;
    }

    public Comment(LocalDateTime createdAt, String comment, Review review) {
        this.createdAt = createdAt;
        this.comment = comment;
        this.review = review;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
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
}
