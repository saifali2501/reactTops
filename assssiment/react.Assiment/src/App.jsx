import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import UseEfectMatch from "./MODULE_10_LIST_HOOK/HOOKS/UseEfectMatch";
import UseStatePro from "./MODULE_10_LIST_HOOK/HOOKS/UseStatePro";
import LifecycleMethod from "./MODULE_10_LIST_HOOK/LIFECYCLE/LifeCycleMethod";
import ClassCom from "./MODULE-REACT-PROPS-STATE/COMPONENT/CLASS/ClassCom";
import FunCom from "./MODULE-REACT-PROPS-STATE/COMPONENT/FUNCTIONAL/FunCom";
import ClassProps from "./MODULE-REACT-PROPS-STATE/PROPS/ClassProps";
import CardData from "./MODULE-REACT-PROPS-STATE/PROPS/CardData";
import FunProps from "./MODULE-REACT-PROPS-STATE/PROPS/FunProps";
import ChangingValue from "./MODULE-REACT-PROPS-STATE/PROPS/ChengingValue";
import UseStateFun from "./MODULE-REACT-PROPS-STATE/STATE/UseStateFun";
import UseStateClass from "./MODULE-REACT-PROPS-STATE/STATE/UseStateClass";
import UseStateSty from "./MODULE-REACT-PROPS-STATE/STATE/UseStateSty";

import NavBar from "./MODULE_11/NavBar";
import DarkVariantExample from "./MODULE_11/Page";
import Page3 from "./MODULE_11/Page3";
import Router from "./MODULE_11/Router";
import MainRouter from "./MODULE-Reacter-Router/MainRouter";






function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        {/* <UseEfectMatch/> */}
        {/* <UseStatePro /> */}
        {/* <LifecycleMethod/> */}
        {/* <ClassCom/> */}
        {/* <FunCom/> */}
        {/* <ClassProps data={{name:"saifu",greeting:"good morning"}}/> */}
        {/* <CardData/> */}
        {/* <FunProps Name={"saif"} color={"green"}/> */}

        {/* <ChangingValue/> */}
        {/* <UseStateFun/> */}
        {/* <UseStateClass/> */}
        {/* <UseStateSty/> */}
        
        
        {/* <NavBar/> */}
        {/* <DarkVariantExample/> */}
        {/* <Page3/> */}
        {/* <Router/> */}
        
      <MainRouter/>
        
       
        

      </div>
    </>
  );
}

export default App;
