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

    public Leader(String jobTitle, String lastName, String firstName) {
        this.jobTitle = jobTitle;
        this.lastName = lastName;
        this.firstName = firstName;
    }
}
