import React from "react";
import Servis from "./Servis";
import Contact from "./Contact";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import BikeService from "./BikeService";
import CarService from "./CarService";
import Homee from "./Homee";
import Error from "./Error";
import SportBike from "./SportBike";
import NormalBike from "./NormalBike";
import RouterRs from "./RouterRs";
import User from "./User";

export default function Router() {
  return (
    <>
      <BrowserRouter>
      <RouterRs expand="lg"/>
        <div>
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/Contact"}>Contact</Link>
            </li>
            <li>
              <Link to={"/Servis"}>Servis</Link>
            </li>
          </ul>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Routes>
            <Route path="/" element={<Homee />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/Servis" >
              <Route index element={<Servis />}/>
              <Route path="Bike"  >
                <Route index element={<BikeService />}/>
                <Route path="Sports" element={<SportBike/>}/>
                <Route path="Normal" element={<NormalBike/>}/>

              </Route>
              <Route path="Car" element={<CarService />} />
            </Route>

            <Route path="*" element={<Error />} />
            <Route path="/user/:name" element={<User/>} />

            

            {/* <Homee />
            <Contact /> */}
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

{
  /* <BrowserRouter>
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
     <Route path="/" element={<Homee/>}/>
     <Route path="/contact" Component={Contact}>

     <Route path="/bike" Component={BikeService}/>
     <Route path="/bar" Component={CarService}/>
     </Route>
    </Routes>
        </div>
  </BrowserRouter> */
}
