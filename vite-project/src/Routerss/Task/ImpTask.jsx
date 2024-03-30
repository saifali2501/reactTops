import React from "react";

export default function ImpTask({ saif }) {
  return (
    <div>
      <input placeholder="Enter" type="text" value={saif.name} />
      <input placeholder="Enter" type="text" value={saif.email} />
      <input placeholder="Enter" type="password" value={saif.password} />
    </div>
  );
}

// import React, { useState } from "react"

// () {
//   const [input, setInput] = useState("")
//   return (
//     <div>
//       <div>
//         <h1>input 1</h1>
//         <input type="text" onChange={(e) => setInput(e.target.value)} />
//         <input type="text" value={input} />
//       </div>
//     </div>
//   )
// }

// ChildComponent.js
