import { useState } from "react"

export default function Counter(){
    const[counter, setCounter]=useState(0);
    const countUp=()=>{
        setCounter(counter+1);
    }
    return (
        <>
            <h1>
                {counter}
            </h1>
            <button onClick={countUp} class="btn btn-primary">Click me</button>
        </>
    )
}