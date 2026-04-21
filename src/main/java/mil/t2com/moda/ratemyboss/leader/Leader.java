package mil.t2com.moda.ratemyboss.leader;

import jakarta.persistence.*;
import mil.t2com.moda.ratemyboss.review.Review;

@Entity
public class Leader {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String firstName;
    private String lastName;
    private String jobTitle;
    protected Leader() {}

    public Leader(String firstName, String lastName, String jobTitle) {
        this.jobTitle = jobTitle;
        this.lastName = lastName;
        this.firstName = firstName;
    }

    public Long getId() {
        return id;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public String getJobTitle() {
        return jobTitle;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public void setJobTitle(String jobTitle) {
        this.jobTitle = jobTitle;
    }
}
