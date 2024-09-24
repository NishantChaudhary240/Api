import { createContext, useState } from "react";
import UsernameContext from "./context/UsernameContext";
// import Profile from "./components/Profile";
// import Login from "./components/Login";
import Menu from "./components/Menu";

export const Context = createContext();

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); //state variable
  
  return (
    <>
      <Context.Provider value={[isLoggedIn, setIsLoggedIn]}>
        <Menu />
        <h1 className="text-center mt-5">
          {isLoggedIn? 'Logged In':'Not Logged In'}
        </h1>
      </Context.Provider>
    </>
  );
}

export default App;
