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

    @ElementCollection
    @CollectionTable(name = "reaction", joinColumns = @JoinColumn(name = "comment_id"))
    @MapKeyColumn(name = "emoji")
    @Column(name = "count")
    private Map<String, Integer> reaction = new HashMap<>();

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
        this.reaction = reaction;
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

    public Map<String, Integer> getReaction() {
        return reaction;
    }

    public void setReaction(Map<String, Integer> reaction) {
        this.reaction = reaction;
    }
}
