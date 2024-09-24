import { useEffect, useState } from "react";
import Preview from "./Preview";


export default function Form(){

    const[fullname,setFullname]=useState('Mark');
    const[email,setEmail]=useState('mark@mark.com');
    const[dob,setDOB]=useState('2021-09-11');

    const submitForm=(event)=>{
        event.preventDefault();
    }
    const changeName=(event)=>{
        setFullname(event.target.value);
    }
    const changeEmail=(event)=>{
        setEmail(event.target.value);
    }
    const changeDOB=(event)=>{
        setDOB(event.target.value);
    }

    useEffect(()=>{ //initialization, mounting, updating, unmounting=>stages
        console.log('empty dependency arrat');
    },[]);

    useEffect(()=>{
        console.log('fullname changed');

        return function(){
            alert('unmounted');
        };
    },[fullname,email]);

    return(
        <>
            <div className="row mt-5">
                <div className="col-6 box">
                    <form action="" method="post" onSubmit={submitForm}>
                    <div className="form-group mb-3">
                        <label className="mb-2"> FullName</label>
                        <input type="text" value={fullname} onChange={changeName} className="form-control" required/>
                    </div>
                    <div className="form-group mb-3">
                        <label className="mb-2"> Email</label>
                        <input type="text" value={email} onChange={changeEmail} className="form-control" required/>
                    </div>
                    <div className="form-group mb-3">
                        <label className="mb-2"> DOB</label>
                        <input type="text" value={dob} onChange={changeDOB} className="form-control" required/>
                    </div>
                    <input type="submit" className="btn btn-primary w-100 mt-3" value="Submit"/>
                    </form>
                    
                </div>
                <div className="col-6">
                    <Preview fullname={fullname} email={email} dob={dob}/>
                </div>
            </div>
        </>
    )
}