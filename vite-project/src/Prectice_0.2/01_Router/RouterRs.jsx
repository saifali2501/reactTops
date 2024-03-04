import React from "react";
import { BrowserRouter, Outlet, Route, Router, Routes } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import Servise from "./Servise/Servise";
import Contactct from "./Contactct";
import BikeServisc from "./Servise/BikeServisc";
import CarServise from "./Servise/CarServise";
import SportsBike from "./Servise/Bike/SportsBike";
import NormalBike from "./Servise/Bike/NormalBike";
import UseParms from "./UseParms";
import MyData from "../UseParmsTask/MyData";
import Name from "../UseParmsTask/Name";
import Age from "../UseParmsTask/Age";

export default function RouterRs() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servise">
            <Route index element={<Servise />} />
            <Route path="bike">
              <Route index element={<BikeServisc />} />
              <Route path="sports" element={<SportsBike />} />
              <Route path="normal" element={<NormalBike />} />
            </Route>
            <Route path="car" element={<CarServise />} />
          </Route>

          <Route path="/contact" element={<Contactct />} />
          <Route path="/user/:name" element={<UseParms/>}/>
          <Route path="/userdata" element={<MyData/>}/>
          <Route path="/name/:name" element={<Name/>}/>
          <Route path="/age/:age" element={<Age/>}/>
        </Routes>
      </BrowserRouter>
      <Outlet />
    </div>
  );
}
