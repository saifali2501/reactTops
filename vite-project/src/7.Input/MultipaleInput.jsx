import { Button } from 'reactstrap';
import React, { useState } from 'react';
import { Form, FormGroup, Table } from 'react-bootstrap';
import { Input, Label } from 'reactstrap';

export default function MultipaleInput() {
  const [user, setUser] = useState({
    email: '',
    password: '',
    Mother: '',
    Father: '',
  });

  const [addUser, setAddUser] = useState([]);

  const addData = (e) => {
    e.preventDefault();

    if (
      user.email.length > 0 &&
      user.Father.length > 0 &&
      user.Mother.length > 0 &&
      user.password.length > 0
    ) {
      setAddUser([...addUser, user]);
      setUser({
        email: '',
        password: '',
        Mother: '',
        Father: '',
      });
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <div>
      <div>
        <Form className="w-50 m-auto mt-5 border border-dark p-5">
          <FormGroup className="p-2">
            <Label for="exampleEmail">Email</Label>
            <Input
            value={user.email}
              id="exampleEmail"
              name="email"
              placeholder="Enter your Email"
              type="email"
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
          </FormGroup>

          <FormGroup className="p-2">
            <Label for="exampleEmail">Father Name</Label>
            <Input
            value={user.Father}
              name="Father Name"
              placeholder="Name"
              type="text"
              onChange={(e) => setUser({ ...user, Father: e.target.value })}
            />
          </FormGroup>

          <FormGroup className="p-2">
            <Label for="exampleEmail">Mother Name</Label>
            <Input
            value={user.Mother}
              name="Mother Name"
              placeholder="Name"
              type="text"
              onChange={(e) => setUser({ ...user, Mother: e.target.value })}
            />
          </FormGroup>

          <FormGroup className="p-2">
            <Label for="examplePassword">Password</Label>
            <Input
            value={user.password}
              name="password"
              placeholder="password placeholder"
              type="password"
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
          </FormGroup>

          <Button onClick={(e) => addData(e)} className="mt-3 w-100" color="danger">
            Submit
          </Button>
        </Form>

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
            {addUser.map((e, i) => (
              <tr key={i}>
                <th scope="row">{i + 1}</th>
                <td>{e.email}</td>
                <td>{e.Father}</td>
                <td>{e.Mother}</td>
                <td>{e.password}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
