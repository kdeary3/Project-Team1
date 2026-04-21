package mil.t2com.moda.ratemyboss.leader;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.data.jpa.test.autoconfigure.DataJpaTest;
import static org.assertj.core.api.Assertions.assertThat;

@DataJpaTest
//@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
public class LeaderRepositoryTest {

    @Autowired
    private LeaderRepository leaderRepository;

    @Test
    void shouldFindLeaderById() {
        // ARRANGE
        Leader leader = new Leader("Keno", "Deary", "Chief");
        leaderRepository.save(leader);
        var found = leaderRepository.findById(leader.getId());

        // ASSERT
        assertThat(found).isPresent();
        assertThat(found.get().getFirstName()).isEqualTo("Keno");  // open box and check
        assertThat(found.get().getLastName()).isEqualTo("Deary");  // open box and check
        assertThat(found.get().getJobTitle()).isEqualTo("Chief");  // open box and check
        
    }

    @Test
    void shouldFindAllLeadersById() {
        // ARRANGE — create the object
        Leader leader= new Leader("Keno", "Deary", "Chief");
        leaderRepository.save(leader);
        var found = leaderRepository.findById(leader.getId());
        leader.setId(1L);

        // ASSERT — read back from the real database and verify
        assertThat(found).isNotEmpty();
        assertThat(found.get().getFirstName()).isEqualTo("Keno");
        assertThat(found.get().getLastName()).isEqualTo("Deary");
        assertThat(found.get().getJobTitle()).isEqualTo("Chief");
    }

}