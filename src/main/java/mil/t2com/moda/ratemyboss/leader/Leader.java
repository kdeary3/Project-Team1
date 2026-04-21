package mil.t2com.moda.ratemyboss.leader;

import jakarta.persistence.*;

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
}
