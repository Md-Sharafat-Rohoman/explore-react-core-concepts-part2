import { useState } from "react"

export default function Counter(){
    const [count, setCount] = useState(0);

    const handleAdd = () =>{
        const newCount = count + 1;
        setCount(newCount);
    }
    const handleReuce = () =>{
        const newCount = count - 1;
        setCount(newCount);
    }

    return (
        <div style={{border:'3px solid green',borderRadius:'10px'}}>
            <h3>Counter : {count}</h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleReuce}>Reduce</button>
        </div>
    )
}