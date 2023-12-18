import React, { createContext, useContext } from "react";
import { NameContaxt } from "./UseContext";

export default function ComB3({ name3 }) {
  const data = useContext(NameContaxt);
  console.log("  data:", data);
  return (
    <div>
      <h1>1. my name is {name3}</h1>

      <h1>2. my name is {data}</h1>
    </div>
  );
}
