import {useEffect, useState} from "react";
import type {Leader} from "~/leader/LeaderType";

const LeadersDropdown = ({onLeaderSelect}) => {

    const [selectLeader, setSelectLeader] = useState("")

    const [leaders, setLeaders] = useState<Leader[]>([])

    const url = 'http://localhost:8080'

    useEffect(() => {
        fetch(`${url}/api/leaders`)
            .then(res => res.json())
            .then(data => setLeaders(data))
    }, []);

    return (
        <div>
            <label htmlFor="leaderSelect">
            <select name="leaderSelect" id="leaderSelect" onChange={(e) => {
                setSelectLeader(e.target.value);
                const leaderId = e.target.value;
                onLeaderSelect(leaderId);
            }}>
                {leaders.map((leader) => (
                        <option key={leader.id} value={leader.id}>{leader.firstName}</option>
                        )
                    )}
            </select>
            <h1>Selected Leader:</h1>
            </label>
        </div>
    );
};

export default LeadersDropdown;