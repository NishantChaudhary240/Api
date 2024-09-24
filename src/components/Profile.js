import React, { useContext } from 'react';
import UsernameContext from '../context/UsernameContext';

export default function Profile(props) {
    const address=useContext(UsernameContext);
  return (
    <>
      <h1>Profile Page</h1>
      <p>Welcome {props.user}</p>
    </>
  )
}
