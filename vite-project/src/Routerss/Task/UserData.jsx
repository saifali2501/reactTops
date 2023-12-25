import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Table } from "reactstrap";
export default function UserData() {
  let nameArr = [
    { name: "saif ali", age: 22 },
    { name: "Tahid", age: 22 },
  ];
  const navigate = useNavigate();
  return (
    <div>
      <h1>Home</h1>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Age</th>
            
          </tr>
        </thead>
        <tbody>
          {nameArr.map((e, i) => {
            return (
              <tr key={i}>
                <th scope="row">{i + 1}</th>
                <td role="button" onClick={() => navigate(`/name/${e?.name}`)}>
                  {e.name}
                </td>
                <td role="button" onClick={() => navigate(`/age/${e?.age}`)}>
                  {e.age}
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
