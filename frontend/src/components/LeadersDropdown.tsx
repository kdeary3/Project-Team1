import {useState} from "react";

const LeadersDropdown = () => {

    const [filter, setFilter] = useState("All")

    return (
        <div>
            <select
                name="form-select"
                onChange={(event) => setFilter(event.target.value)}
                value={filter}
                id="">
                <option value="All">All</option>
                <option value="Leader 1">Leader 1</option>
                <option value="Leader 2">Leader 2</option>
                <option value="Leader 3">Leader 3</option>
                <option value="Leader 4">Leader 4</option>
            </select>

        </div>
    );
};

export default LeadersDropdown;