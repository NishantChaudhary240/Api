import React, { useContext } from 'react';
import { Context } from '../App';


export default function Button() {
    const [isLoggedIn,setIsLoggedIn]=useContext(Context);
  return (
    <button onClick={()=>setIsLoggedIn(!isLoggedIn)} >
        {isLoggedIn? 'Logout':'Login'}
    </button>
  )
}
