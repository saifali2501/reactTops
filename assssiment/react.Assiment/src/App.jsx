import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import UseEfectMatch from "./MODULE_10_LIST_HOOK/HOOKS/UseEfectMatch";
import UseStatePro from "./MODULE_10_LIST_HOOK/HOOKS/UseStatePro";
import LifecycleMethod from "./MODULE_10_LIST_HOOK/LIFECYCLE/LifeCycleMethod";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        {/* <UseEfectMatch/> */}
        {/* <UseStatePro /> */}
        <LifecycleMethod/>
      </div>
    </>
  );
}

export default App;
