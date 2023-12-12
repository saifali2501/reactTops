import React, { useState } from "react";
import { Button, Form, FormGroup, Input, Label, Table } from "reactstrap";

export default function Input_Rev_3() {
  let [mobile, setmobile] = useState({
    email: "",
    password: "",
    name: "",
  });
  let [mymobile, setmymobile] = useState([]);
  let [index, setindex] = useState(null);
  const addtask = (e) => {
    if (
      mobile.email.length > 0 &&
      mobile.password.length > 0 &&
      mobile.name.length > 0
    ) {
      setmymobile([...mymobile, mobile]);
      
      setmobile({
        email: "",
        password: "",
        name: "",
      });
    } else {
      alert("please fill value");
    }
  };
  const DeleteHandaler = (index) => {
    let filterdata = mymobile.filter((e, i) => index !== i);
    setmymobile(filterdata);
  };
  const updateData = () => {
    if (index || index === 0) {
      mymobile.splice(index, 1, mobile);
      setmobile([...mymobile]);
      setmobile({
        email: "",
        password: "",
        name: "",
      });
      setindex(null);
    } else {
      alert("please select data");
    }
  };
  const UpdateHandaler = (data, index) => {
    setmobile(data);
    setindex(index);
  };
  return (
    <>
      <Form>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input
            value={mobile.email}
            id="exampleEmail"
            name="email"
            placeholder="with a placeholder"
            type="email"
            onChange={(e) => setmobile({ ...mobile, email: e.target.value })}
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input
            value={mobile.password}
            id="examplePassword"
            name="password"
            placeholder="password placeholder"
            type="password"
            onChange={(e) => setmobile({ ...mobile, password: e.target.value })}
          />
        </FormGroup>

        <FormGroup>
          <Label for="examplePassword">Name</Label>
          <Input
            value={mobile.name}
            id="examplePassword"
            name="name"
            placeholder="Enter your name"
            type="text"
            onChange={(e) => setmobile({ ...mobile, name: e.target.value })}
          />
        </FormGroup>

        <Button onClick={updateData}>Update</Button>

        <Button onClick={(e) => addtask(e)}>Submit</Button>
      </Form>

      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Email</th>
            <th>Password</th>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {mymobile.map((e, i) => {
            return (
              <tr key={i}>
                <th scope="row">{i + 1}</th>
                <td>{e.email}</td>
                <td>{e.password}</td>
                <td>{e.name}</td>
                <td>
                  <Button onClick={() => DeleteHandaler(i)}>Delete</Button>
                  <Button onClick={() => UpdateHandaler(e, i)}>edit</Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}
