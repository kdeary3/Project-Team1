import Dropdown from 'react-bootstrap/Dropdown';
import {useEffect, useState} from "react";

const LeadersDropdown = () => {

    const [filter, setFilter] = useState("All")
    const [selectLeader, setSelectLeader] = useState("")

    const [leader, setLeader] = useState<any>([])

    const url = 'http://localhost:8080'

    useEffect(() => {
         fetch(`${url}/api/leaders`)
            .then(res => res.json())
            .then(data => setLeader(data))
    }, []);



    return (
        <div>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    {filter}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    {leader.map(leader => (
                        <Dropdown.Item onClick={() => {
                            setSelectLeader(leader.firstName)
                            setFilter(`${leader.firstName}`)}}>{leader.firstName}</Dropdown.Item>
                        )
                    )}
                </Dropdown.Menu>
            </Dropdown>
            <h1> {selectLeader}</h1>
        </div>
    );
};

export default LeadersDropdown;