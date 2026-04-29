package mil.t2com.moda.ratemyboss.leader;

import org.springframework.stereotype.Service;

import java.util.List;

// Tells Spring "this is a business logic component — manage it"
@Service
public class LeaderService {

    // final means this reference never changes after assignment
    private final LeaderRepository leaderRepository;

    // Constructor injection — Spring passes the repository in automatically
    public LeaderService(LeaderRepository leaderRepository) {
        this.leaderRepository = leaderRepository;
    }

    // Returns all rows from the database as a Java list
    public List<Leader> getAllLeaders() {
        return leaderRepository.findAll();
    }

    // Returns one row by ID — throws error if not found instead of returning null
    public Leader getLeaderById(Long id) {
        return leaderRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Leader not found"));
    }

    public Leader saveLeader(Leader leader) {
        return leaderRepository.save(leader);
    }
}


