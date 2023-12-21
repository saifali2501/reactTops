// import { Home, Route } from "lucide-react";
import React from "react";
import Tst from "./Tst";
import Contact from "./Contact";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import { Home } from "lucide-react";

export default function Router() {
  return (
    <>
      <BrowserRouter>
      <div>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
        </ul>
      </div>
      <div style={{width:"100vw",minHeight:"100vh",backgroundColor:"lightgrey"}} className="d-flex justify-content-center align-items-center">

        <Routes>
            <Route path="/Tst" element={<Tst/>}/>
            <Route path="/con" element={<Contact/>}/>


          {/* <Contact />
          <Tst /> */}
          
        </Routes>
          </div>
      </BrowserRouter>
    </>
  );
}
