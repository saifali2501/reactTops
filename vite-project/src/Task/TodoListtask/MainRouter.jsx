import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Heder from "./Heder";
// import Home from "./Home";
import Panding from "./Panding";
import Done from "./Done";
import TodoTask from "./TodoTask";
import Home from "./Home";
import RegisterModal from "./RegisterModal";
import LogingData from "./LogingData";
import UserData from "./UserData";

export default function MainRouter() {
  return (
    <>
      <BrowserRouter>
     
        <Heder expand="lg"/>
        <div
          style={{
            width: "100vw",
            minHeight: "100vh",
            backgroundColor: "lightgray",
          }}
          className="d-flex justify-content-center align-items-center "
        >
          <Routes>
            <Route path="/" element={<Home />} />
         <Route path="/user" element={<UserData/>}/>
         <Route path="/loging" element={<LogingData/>}/>

            <Route path="/todo" element={<TodoTask />} />

          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}
