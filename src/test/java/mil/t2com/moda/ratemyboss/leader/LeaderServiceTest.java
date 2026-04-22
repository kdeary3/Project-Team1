package mil.t2com.moda.ratemyboss.leader;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import java.util.List;
import java.util.Optional;
import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
public class LeaderServiceTest {

    @Mock
    private LeaderRepository leaderRepository;

    @InjectMocks
    private LeaderService leaderService;

    @Test
    void shouldGetAllLeaders() {
        Leader leader = new Leader("Tairrque", "Baker", "Ceo");
        when(leaderRepository.findAll()).thenReturn(List.of(leader));

        var result = leaderService.getAllLeaders();

        assertThat(result).hasSize(1);
        assertThat(result.get(0).getFirstName()).isEqualTo("Tairrque");
        assertThat(result.get(0).getLastName()).isEqualTo("Baker");
        assertThat(result.get(0).getJobTitle()).isEqualTo("Ceo");
    }

    @Test
    void shouldGetLeaderById() {
        // ARRANGE
        Leader leader = new Leader("Tairrque", "Baker", "Ceo");
        when(leaderRepository.findById(1L)).thenReturn(Optional.of(leader));

        // ACT
        var result = leaderService.getLeaderById(1L);

        // ASSERT
        assertThat(result.getFirstName()).isEqualTo("Tairrque");
        assertThat(result.getLastName()).isEqualTo("Baker");
        assertThat(result.getJobTitle()).isEqualTo("Ceo");
    }
}