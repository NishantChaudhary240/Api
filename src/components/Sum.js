import { useState } from "react";

export default function Add(){
    const[number1,setNumber1]=useState(0);
    const[number2,setNumber2]=useState(0);
    const [sum,setSum]=useState(0);
    const calculateSum=()=>{
        setSum(parseInt(number1)+parseInt(number2));
    }
    const changeEvent=(event)=>{
        setNumber1(event.target.value);
    }
    
    const changeEvent1=(event)=>{
        
        setNumber2(event.target.value);
    }
    
    return (
        <>
            <div className="form-group">
                <label>Enter first number</label>
                <input type="text" value={number1} onChange={changeEvent} className="form-control"/>
            </div>
            <div className="form-group">
                <label>Enter econd number</label>
                <input type="text" value={number2} onChange={changeEvent1} className="form-control"/>
            </div>
            <span onClick={calculateSum} className="btn btn-primary">Add</span>
            <p>The sum is {sum}.</p>
        </>
    )

}