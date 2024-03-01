import React, { useState } from "react";
import { Button, Form, FormGroup, Input, Label, Table } from "reactstrap";

export default function Crud() {
  let [car, setCar] = useState({
    email: "",
    password: "",
  });

  let [mycar, setMycar] = useState([]);

  const incHandler = (e) => {
    setMycar([...mycar, car]);
    setCar({ email: "",
    password: "",})
  };
  return (
    <>

      <div className=" pt-5">
        <Form className="border p-3 border-black rounded-2 m-auto w-50">
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input
              id="exampleEmail"
              name="email"
              placeholder="with a placeholder"
              type="email"
              value={car.email}
              onChange={(e) => setCar({...car, email: e.target.value })}
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input
              id="examplePassword"
              name="password"
              placeholder="password placeholder"
              type="password"
              value={car.password}
              onChange={(e) => setCar({...car, password: e.target.value })}
            />
          </FormGroup>

          <Button onClick={(e) => incHandler(e)}>Submit</Button>
        </Form>
        <div>
          <Table>
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
              </tr>
            </thead>
            
            <tbody>
              {mycar.map((e, i) => (
                <tr key={i}>
                  <th scope="row">{i + 1}</th>
                  <td>{e?.email}</td>
                  <td>{e?.password}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
}


