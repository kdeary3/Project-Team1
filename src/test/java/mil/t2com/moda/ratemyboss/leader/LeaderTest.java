package mil.t2com.moda.ratemyboss.leader;

import org.junit.jupiter.api.Test;
import static org.assertj.core.api.Assertions.assertThat;

public class LeaderTest {

    @Test
    void shouldReturnLeader() {
        // ARRANGE — create the object in memory (no database needed)
        Leader leader = new Leader("Keno", "Deary", "Supreme Overlord");

        // ASSERT — call each getter and verify it returns the correct value
        assertThat(leader.getFirstName()).isEqualTo("Keno");
        assertThat(leader.getLastName()).isEqualTo("Deary");
        assertThat(leader.getJobTitle()).isEqualTo("Supreme Overlord");

    }
}