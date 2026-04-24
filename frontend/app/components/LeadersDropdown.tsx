import {useEffect, useState, type JSXElementConstructor, type ReactElement, type ReactNode, type ReactPortal, type SetStateAction} from "react";
import type {Leader} from "~/leader/LeaderType";

const LeadersDropdown = () => {

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
            <select name="leaderSelect" id="leaderSelect" onChange={(e) => {
                setSelectLeader(e.target.value)}}>
                {leaders.map((leader) => (
                        <option>{leader.firstName}</option>
                        )
                    )}
            </select>
            <h1>Selected Leader: <strong>{selectLeader || "None Selected"}</strong></h1>
        </div>
    );
};

export default LeadersDropdown;