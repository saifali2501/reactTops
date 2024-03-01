// import React from 'react'

// export default function Sungless() {
//   return (
//     <div>
//       <h1>sungless</h1>
//       <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda sequi nesciunt tenetur enim dicta culpa officia soluta explicabo odit fugiat, non quis quod nobis beatae praesentium itaque harum! Ex, corporis.</p>
//     </div>
//   )
// }

import React, { useEffect, useState } from "react";
import { Table } from "reactstrap";


export default function Sungless() {
  const [local, setLocal] = useState([]);

  useEffect(() => {
    const JsonData = localStorage.getItem("addd");
    console.log(" JsonData:", JsonData)
    
    const normalData = JSON.parse(JsonData);
    console.log("---->..>>", normalData);
    setLocal(normalData || []);
  }, []);
  return (
    <>
    <div  className="d-flex justify-content-center align-items-center " style={{display:"flex",justifyContent:"center",alignItems:"center",minHeight: "100vh",}}>
      <Table>
        <thead>
          <tr>
            <th>Sr.no</th>
            <th>Email</th>
            <th>Password</th>
            
          </tr>
        </thead>
        <tbody>
          {local?.map((e, i) => (
            <tr key={i}>
              <td color="danger">{i + 1}</td>
              <td>{e.email}</td>
              <td>{e.password}</td>
              
            </tr>
          ))}
        </tbody>
      </Table>
    </div>

      <h1>djhksjhkjh</h1>
    </>
  )
}
