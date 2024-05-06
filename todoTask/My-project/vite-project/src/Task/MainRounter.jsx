import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// import Heder from "./Heder";
// import Home from "./Home";
import Panding from "./Panding";
import Done from "./Done";
import TodoTask from "./TodoTask";
// import Home from "./Home";
// import RegisterModal from "./RegisterModal";
import LogingData from "./LogingData";
import UserData from "./UserData";
import "./Todo.css"
import Header from "./Header";

export default function MainRouter() {
  return (
    <>
      <BrowserRouter>
     
        <Header expand="lg"/>
        <div
          style={{
            // width: "100vw",
            minHeight: "100vh",
            backgroundColor: "lightgray",
          }}
         
        >
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
         <Route path="/user" element={<UserData/>}/>
         <Route path="/loging" element={<LogingData/>}/>

            <Route path="/" element={<TodoTask />} />

          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}
