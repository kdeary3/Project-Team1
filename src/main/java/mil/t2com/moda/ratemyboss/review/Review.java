package mil.t2com.moda.ratemyboss.review;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;

@Entity
public class Review {
    @Id
    @GeneratedValue
    private Long id;
    private Integer rating;
    private String description;
    @CreationTimestamp
    @Column(nullable = false, updatable = false)
    private LocalDateTime createdAt;

    public Review() {
    }

    public Review(Integer rating, String description) {
        this.rating = rating;
        this.description = description;
    }

    public Review(Integer rating, String description, LocalDateTime createdAt) {
        this.rating = rating;
        this.description = description;
        this.createdAt = createdAt;
    }

    public Review(Long id, Integer rating, String description, LocalDateTime createdAt) {
        this.id = id;
        this.rating = rating;
        this.description = description;
        this.createdAt = createdAt;
    }

    public Long getId() {
        return id;
    }

    public Integer getRating() {
        return rating;
    }

    public void setRating(Integer rating) {
        this.rating = rating;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

}
