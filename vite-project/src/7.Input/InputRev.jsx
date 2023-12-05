import React, { useState } from "react";
import { Button, Form, FormGroup, Input, Label, Table } from "reactstrap";

export default function InputRev() {
  let [user, setUser] = useState({
    email: '',
    password: '',
    name: '',
    last: '',
  });
  const [alluser, setAllUser] = useState([]);
  const addTask = (e) => {
    e.preventDefault();
    if (
      user.email.length > 0 &&
      user.password.length > 0 &&
      user.name.length > 0 &&
      user.last.length > 0
    ) {
      setAllUser([...alluser, user]);
      setUser({
        email: '',
        password: '',
        name: '',
        last: '',
      });
    } else {
      alert("please fill the fro");
    }
  };
  return (
    <div>
      <Form className="w-50 m-auto pt-5">
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input
            value={user.email}
            name="email"
            placeholder="with a placeholder"
            type="email"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input
            value={user.password}
            name="password"
            placeholder="password placeholder"
            type="password"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
        </FormGroup>

        <FormGroup>
          <Label for="exampleEmail">Name</Label>
          <Input
            value={user.name}
            name="Name"
            placeholder="with a placeholder"
            type="Name"
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          />
        </FormGroup>

        <FormGroup>
          <Label for="exampleEmail">Last Name</Label>
          <Input
            value={user.last}
            name="Last Name"
            placeholder="with a placeholder"
            type="Name"
            onChange={(e) => setUser({ ...user, last: e.target.value })}
          />
        </FormGroup>

        <Button onClick={(e) => addTask(e)}>Submit</Button>
      </Form>
      <div>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Email</th>
              <th>Father Name</th>
              <th>Mother Name</th>
              <th>Password</th>
            </tr>
          </thead>
          <tbody>
            {alluser.map((e, i) => (
              <tr key={i}>
                <th scope="row">{i + 1}</th>
                <td>{e.email}</td>
                <td>{e.password}</td>
                <td>{e.name}</td>
                <td>{e.last}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
