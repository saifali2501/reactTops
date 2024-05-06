import React, { useEffect, useState } from "react";
import { Table } from "reactstrap";

export default function User() {
  const [local, setLocal] = useState(null);
  console.log("🚀 ~ User ~ local:", local)

  useEffect(() => {
    const JsonData = localStorage.getItem("addd");
    console.log(" JsonData:", JsonData)
    
    const normalData = JSON.parse(JsonData);
    console.log("---->..>>", normalData);
    setLocal(normalData);
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
            <th>Gender</th>
            <th>Hobby</th>
            <th>select</th>
          </tr>
        </thead>
        <tbody>
          {local?.map((e, i) => (
            <tr key={i}>
              <td color="danger">{i + 1}</td>
              <td>{e.email}</td>
              <td>{e.password}</td>
              <td>{e.gender}</td>
              <td>{`${e.hobby}`}</td>
              <td>{e.userType}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
      
    </>
  );
}

