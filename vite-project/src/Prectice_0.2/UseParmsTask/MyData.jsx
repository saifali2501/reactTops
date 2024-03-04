import React from "react";
import { useNavigate } from "react-router-dom";
import { Table } from "reactstrap";

export default function MyData() {
  let array = [
    { name: "saif", age: 22 },
    { name: "tahid", age: 22 },
  ];

  const navigate = useNavigate()
  return (
    <div>
      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {array.map((e,i) => {
            return (
              <tr key={i}>
                <th scope="row">{i+1}</th>
                <td role="button" onClick={()=>navigate(`/name/${e.name}`)}>{e.name}</td>
                <td role="button" onClick={()=>navigate(`/age/${e.age}`)}>{e.age}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
