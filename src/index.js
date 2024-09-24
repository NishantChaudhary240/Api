import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from './App';
import reportWebVitals from "./reportWebVitals";
// import Header  from './components/Header';
// import Counter from './components/Counter';
// import Sum from './components/Sum';
// import Multiplication from './components/Multiply';
// import Form from './components/Form';
// import Newslist from './components/Newslist';
import Password from "./components/Password";
import Login from "./components/Login";
import App from "./App";
import UsernameContext from "./context/UsernameContext";
import UsernameContextProvider from "./context/UsernameContextProvider";
import Api from "./components/Api";
import Horoscope from "./components/Horoscope";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <UsernameContextProvider>
    {/* <App /> */}
    {/* <Api/> */}
    <Horoscope/>
  </UsernameContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
