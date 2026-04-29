package mil.t2com.moda.ratemyboss.leader;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.webmvc.test.autoconfigure.WebMvcTest;
import org.springframework.test.context.bean.override.mockito.MockitoBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import tools.jackson.databind.ObjectMapper;

import java.util.List;

import static org.mockito.Mockito.*;
import static org.mockito.ArgumentMatchers.any;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

// Only loads the web layer — no database, no service logic
@WebMvcTest(LeaderController.class)
public class LeaderControllerTest {

    // MockMvc simulates HTTP requests without starting a real server
    @Autowired
    private MockMvc mockMvc;

    // Fake the service — controller tests don't need real business logic
    @MockitoBean
    private LeaderService leaderService;

    @Autowired
    private ObjectMapper objectMapper;

    @Test
    void shouldGetAllLeaders() throws Exception {
        // ARRANGE — tell the fake service what to return
        Leader leader = new Leader("Tairrique", "Baker", "CEO");
        when(leaderService.getAllLeaders()).thenReturn(List.of(leader));

        // ACT + ASSERT — send a fake GET request and check the JSON response
        mockMvc.perform(get("/api/leaders"))
                .andExpect(status().isOk())               // HTTP 200
                .andExpect(jsonPath("$[0].firstName").value("Tairrique")) // first item in array
                .andExpect(jsonPath("$[0].lastName").value("Baker")) // first item in array
                .andExpect(jsonPath("$[0].jobTitle").value("CEO")); // first item in array
    }

    @Test
    void shouldSaveNewLeader() throws Exception {
        // ARRANGE
        Leader leader = new Leader("Tairrique", "Baker", "Janitor");
        leader.setId(1L);
        when(leaderService.saveLeader(any(Leader.class))).thenReturn(leader);

        // ACT
        mockMvc.perform(post("/api/leaders")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(leader)))
                .andExpect(status().isCreated())
                .andDo(print())
                .andExpect(jsonPath("$.id").value(1L));
    }

}
