import { useState } from "react"

export default function Team(){

    const [team, setTeam] = useState(11);
    const handleAdd = () =>{
        const newTeam = team + 1;
        setTeam(newTeam)
    }
    const handleRemove = () =>{
        setTeam(team - 1)
    }

    const teamStyles = {
        border: '3px solid pink',
        margin: '10px',
        padding: '20px',
        borderRadius: '10px '
    }

    return (
        <div style={teamStyles}>
            <h3>Players : {team}</h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleRemove}>Remove</button>
        </div>
    )
}