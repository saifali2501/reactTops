import React from "react";
import Servis from "./Servis";
import Contact from "./Contact";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

export default function Router() {
  return (
      <>
      <BrowserRouter>
      <div>
        <ul>
          <li>
            <Link to={"/"}>sirvise</Link>
          </li>
          <li>
            <Link to={"/Contact"}>Contact</Link>
          </li>
        </ul>
      </div>
      <div className="d-flex justify-content-center align-items-center ">

        <Routes>
         <Route path="/" element={<Servis/>}></Route>
         <Route path="/contact" element={<Contact/>}/>
          
        </Routes>
            </div>
      </BrowserRouter>
            </>
    
  );
}
