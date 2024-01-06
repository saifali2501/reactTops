import React, { useState } from "react";
import { Button, Form, FormGroup, Input, Label, Table } from "reactstrap";

export default function Inpute_Rev_2() {
  let [car, setCar] = useState({
    email: "",
    password: ""
  });
  let [index, setindex] = useState(null);
  let [myCar, setMyCar] = useState([]);

  const ChangeHandler = (e) => {
  const matchh =  myCar.some((e)=>{
    console.log(e);
      return e.email === car.email
  
    })
   
    if (car.email.length > 0 && car.password.length > 0) {
      if (matchh) {
        alert("same value")
      }
      else{
        setMyCar([...myCar, car]);
        setCar({
          email: "",
          password: "",
        });
      }
  
    }     
    else{
      alert("fill value")
     }
  };
  const deleteHandler = (index) => {
    let filterData = myCar.filter((e, i) => index !== i);
    setMyCar(filterData);
  };

  const updateData = () => {
    if (index || index === 0) {
      myCar.splice(index, 1, car);
      setCar([...myCar]);
      setCar({
        email: "",
        password: "",
      });
      setindex(null);
    } else {
      alert("fill");
    }
  };
  const updateHandler = (data, index) => {
    setCar(data);
    setindex(index);
  };

  return (
    <div>
      <Form className="w-25 m-auto border border-black border-3 p-3 bg-primary mt-5 ">
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input
            value={car.email}
            id="exampleEmail"
            name="email"
            placeholder="with a placeholder"
            type="email"
            onChange={(e) => setCar({ ...car, email: e.target.value })}
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input
            value={car.password}
            id="examplePassword"
            name="password"
            placeholder="password placeholder"
            type="password"
            onChange={(e) => setCar({ ...car, password: e.target.value })}
          />
        </FormGroup>

        <Button className="W-100" onClick={(e) => ChangeHandler(e)}>
          Submit
        </Button>

        <Button onClick={updateData} className="W-100 mx-2 ">
          update
        </Button>
      </Form>

      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Email</th>

            <th>Password</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {myCar.map((e, i) => {
            return (
              <tr key={i}>
                <th scope="row">{i + 1}</th>
                {e.email.length < 8 ? (
                  <td style={{ color: "red" }}>{e.email}</td>
                ) : (
                  <td>{e.email}</td>
                )}

                {e.password.length < 8 ? (
                  <td style={{ color: "red" }}>{e.password}</td>
                ) : (
                  <td>{e.password}</td>
                )}
                <td>
                  <button color="red" onClick={() => deleteHandler(i)}>
                    Delete
                  </button>
                  <button color="red" onClick={() => updateHandler(e, i)}>
                    update
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
