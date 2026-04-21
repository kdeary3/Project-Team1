package mil.t2com.moda.ratemyboss.review;

import jakarta.persistence.*;
import mil.t2com.moda.ratemyboss.leader.Leader;
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

    @ManyToOne
    @JoinColumn(name = "leader_id")
    private Leader leader;

    public Review() {
    }

    public Review(Integer rating, String description, Leader leader) {
        this.rating = rating;
        this.description = description;
        this.leader = leader;
    }

    public Review(Long id, Integer rating, String description, LocalDateTime createdAt, Leader leader) {
        this.id = id;
        this.rating = rating;
        this.description = description;
        this.createdAt = createdAt;
        this.leader = leader;
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

    public Leader getLeader() {
        return leader;
    }

}
