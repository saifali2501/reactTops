import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Heder from "./Heder";
// import Home from "./Home";
import Panding from "./Panding";
import Done from "./Done";
import TodoTask from "./TodoTask";

export default function MainRouter() {
  return (
    <>
      <BrowserRouter>
        {/* <Header /> */}
        {/* <Heder expand="lg" /> */}
        <Heder />
        <div
          style={{
            width: "100vw",
            minHeight: "100vh",
            backgroundColor: "lightgray",
          }}
          className="d-flex justify-content-center align-items-center "
        >
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            {/* <Route path="/panding" element={<Panding />} /> */}
            {/* <Route path="/done" element={<Done />} /> */}
            <Route path="/todo" element={<TodoTask />} />

          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}
