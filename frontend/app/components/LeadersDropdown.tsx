import {useEffect, useState} from "react";
import type {LeaderType} from "~/leader/LeaderType";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronDown} from "@fortawesome/free-solid-svg-icons"

const LeadersDropdown = ({onLeaderSelect}: any) => {

    const [filteredLeaders, setFilteredLeaders] = useState<LeaderType[]>([]);
    const [leaders, setLeaders] = useState<LeaderType[]>([])
    const [isHidden, setIsHidden] = useState<boolean>(true);
    const [name, setName] = useState<string>("");

    const url = 'http://localhost:8080'

    useEffect(() => {
        fetch(`${url}/api/leaders`)
            .then(res => res.json())
            .then(data => {
                setLeaders(data)
                setFilteredLeaders(data);
            })
    }, []);



    // const filteredLeaders = filterLeader === -1
    //     ? leaders
    //     : leaders.filter(leader => leader.id.toString() === filterLeader)
    // console.log(filteredLeaders)

    const setFilter = (leaderName : string) =>{
        setName(leaderName);
        if (leaderName === "" || leaderName === undefined || leaderName === "ALL"){
            setFilteredLeaders(leaders);
            return;
        }
        setFilteredLeaders(leaders.filter(leader => (`${leader.firstName}, ${leader.lastName}`).toUpperCase().indexOf(leaderName.toUpperCase()) > -1));
    }

    const showDropDown = () => {
        setIsHidden(!isHidden);
    }

    const handleClick = (leaderIdString : string) =>{
        setFilter("ALL");
        onLeaderSelect(leaderIdString);
        showDropDown();
        setName("");
    }

    return (
        <div onMouseLeave={!isHidden ? showDropDown : () => {}} className={"relative flex flex-col bg-gray-400 rounded-t w-50"}>
            <button className={"cursor-pointer rounded-t hover:bg-gray-300 hover:rounded-t flex flex-row p-2 justify-between items-center"} onClick={showDropDown}>Dropdown <FontAwesomeIcon icon={faChevronDown} /></button>
            <div hidden={isHidden} className={"absolute w-full mt-10 bg-gray-400 b-rounded p-2"}>
                <div className={"flex flex-col"}>
                    <input className={"bg-white h-fit rounded flex flex-row justify-between"} type="text" value={name} onChange={e => setFilter(e.target.value)}/>
                    <a onClick={() => handleClick("ALL")} className={"hover:cursor-pointer hover:bg-gray-300"}>ALL</a>
                    {filteredLeaders.map((leader) => (
                        <a onClick={() => handleClick(leader.id.toString())} key={leader.id} className={"hover:cursor-pointer hover:bg-gray-300"}>{`${leader.firstName}, ${leader.lastName}`}</a>)
                    )}
                </div>
            </div>
        </div>
    );
};

export default LeadersDropdown;