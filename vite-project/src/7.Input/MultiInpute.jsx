import React, { useState } from "react";
import { Button, Form, FormGroup, Input, Label, Table } from "reactstrap";

export default function MultiInpute() {
  let [city, setCity] = useState({
    email: "",
    password: "",
  });
  let [addcity, setAddcity] = useState([]);

  const Addtask = (e) => {
    e.preventDefault
    if(city.email.length > 0 && city.password.length > 0){
    setAddcity([...addcity, city]);
    setCity({
      email: "",
      password: "",
    
    });
}else{
    alert("plaese fill value")
}
  };
  return (
    <>
      {/* <h1>{city.email}</h1>
      <h2>{city.password}</h2> */}
      <div>
        <Form className="w-50 m-auto border border-danger p-3">
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input
            value={city.email}
              name="email"
              placeholder="please Enter the Email"
              type="email"
              onChange={(e) => setCity({ ...city, email: e.target.value })}
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input
            value={city.password}
              name="password"
              placeholder="password placeholder"
              type="password"
              onChange={(e) => setCity({ ...city, password: e.target.value })}
            />
          </FormGroup>

          <Button className="w-100" color="danger" onClick={(e) => Addtask(e)}>
            Submit
          </Button>
        </Form>

        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Email</th>
             
              <th>Password</th>
            </tr>
          </thead>
          <tbody>
            {addcity.map((e, i) => (
              <tr key={i}>
                <th scope="row">{i + 1}</th>
                <td>{e.email}</td>
                
                <td>{e.password}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
}
