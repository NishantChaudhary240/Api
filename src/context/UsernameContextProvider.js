import { useState } from "react";
import UsernameContext from "./UsernameContext";

const UsernameContextProvider = (props) => {
    const [username, setUsername] = useState('');
    return (
        <UsernameContext.Provider value={{ username, setUsername }}>
            {props.children}
        </UsernameContext.Provider>
    );
}

export default UsernameContextProvider;
