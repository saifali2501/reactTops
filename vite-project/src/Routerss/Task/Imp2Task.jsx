import React, { useState } from "react";
import ImpTask from "./ImpTask";

export default function Imp2Task() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  return (
    <div>
      <input
        type="text"
        placeholder="Enter value"
        value={user.name}
        onChange={(e) => setUser({ ...user, name: e.target.value })}
      />

      <input
        type="text"
        placeholder="Enter value"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
      />

      <input
        type="password"
        placeholder="Enter value"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />
      <ImpTask saif={user} />
    </div>
  );
}

// export default function Imp2Task({input,setInput}) {
// //   const [input, setInput] = useState("")s
//   return (
//     <div>
//       <div>
//         <h1>Inpute 2</h1>
//         <input type="text" onChange={(e) => setInput(e.target.value)} />
//         <input type="text" value={input} />
//       </div>
//     </div>
//   )
// }
