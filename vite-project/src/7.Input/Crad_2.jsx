import { Button, Table } from "reactstrap";
import React, { useState } from "react";
import { Form, FormGroup, Input, Label } from "reactstrap";

export default function Crad_2() {
  let [name, setName] = useState({
    email: "",
    password: "",
  });
  let [myName, setMyname] = useState([]); 
  let [index,setIndex] = useState(null)
  const changeHandler = (e) => {
    if (name.email.length > 0 && name.password.length > 0) {
      setMyname([...myName, name]);
      setName({
        email: "",
        password: "",
      });
    } else {
      alert("please fill in value");
    }
  };
  const deleteHandler = (index) => {
    setMyname(myName.filter((e, i) => index !== i));
  };
  const updateData=()=>{
    if(index || index === 0){

        myName.splice(index,1,name)
        setName([...myName])
        setName({
            email:"",
            password:""
        })
        setIndex(null)
    }else{
        alert("please select")
    }
    
  }
  const updateHandler =(data,index) =>{
    setName(data)
    setIndex(index)
  }
  return (
    <div>
      <Form>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input
            value={name.email}
            id="exampleEmail"
            name="email"
            placeholder="with a placeholder"
            type="email"
            onChange={(e) => setName({ ...name, email: e.target.value })}
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input
            value={name.password}
            id="examplePassword"
            name="password"
            placeholder="password placeholder"
            type="password"
            onChange={(e) => setName({ ...name, password: e.target.value })}
          />
        </FormGroup>
        <Button onClick={(e) => changeHandler(e)}>Submit</Button>
        <Button onClick={updateData}>Update..</Button>
      </Form>
      <Table className="w-50 m-auto mt-4 border border-4 border-danger p-5 rounded-5">
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {myName.map((e, i) => {
            return (
              <tr key={i}>
                <th scope="row">{i + 1}</th>
                <td>{e.email}</td>
                <td>{e.password}</td>
                <td>
                  <Button onClick={() => deleteHandler(i)}>Delete</Button>
                  <Button onClick={() => updateHandler(e, i)}>Edite..!</Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
