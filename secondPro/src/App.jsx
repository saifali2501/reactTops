import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Router from "./Router/Router";
import ApiCurd from "./ApiCrud";

function App() {
  return (
    <>
      <div>
        <Router />
        {/* <ApiCurd/> */}
      </div>
    </>
  );
}

export default App;
