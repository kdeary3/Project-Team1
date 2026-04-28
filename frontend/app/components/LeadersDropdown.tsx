import {useEffect, useState} from "react";
import type {Leader} from "~/leader/LeaderType";

const LeadersDropdown = ({onLeaderSelect}: any) => {

    const [filterLeader, setFilterLeader] = useState("ALL")
    const [leaders, setLeaders] = useState<Leader[]>([])
    const [selectLeader, setSelectLeader] = useState("")

    const url = 'http://localhost:8080'

    useEffect(() => {
        fetch(`${url}/api/leaders`)
            .then(res => res.json())
            .then(data => setLeaders(data))
    }, []);

    const filteredLeaders = filterLeader === "ALL"
        ? leaders
        : leaders.filter(leader => leader.id.toString() === filterLeader)
    console.log(filteredLeaders)

    return (
        <div>
            <label htmlFor="leaderSelect">
                <select onChange={(e) => onLeaderSelect(e.target.value)}>
                    <option value="ALL">All Leaders</option>
                    {leaders.map((leader) => (
                        <option key={leader.id} value={leader.id}>
                            {leader.firstName}
                        </option>
                    ))}
                </select>
            </label>
        </div>
    );
};

export default LeadersDropdown;