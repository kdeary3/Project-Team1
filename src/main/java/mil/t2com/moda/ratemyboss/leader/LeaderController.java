package mil.t2com.moda.ratemyboss.leader;


import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

// Combines @Controller + @ResponseBody — returns JSON automatically
@RestController
// All routes in this controller start with this base path
@RequestMapping("/api/leaders")
// Allow requests from the React frontend running on a different port
@CrossOrigin(origins = "http://localhost:5173")
public class LeaderController {

    private final LeaderService leaderService;

    // Spring injects the service automatically
    public LeaderController(LeaderService leaderService) {
        this.leaderService = leaderService;
    }

    // Handles GET /api/models — returns all items as JSON array
    @GetMapping
    public List<Leader> getAllLeaders() {
        return leaderService.getAllLeaders();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Leader> getLeaderById(@PathVariable Long id) {
        try {
            Leader leader = leaderService.getLeaderById(id);
            return ResponseEntity.ok(leader);
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
    }
}