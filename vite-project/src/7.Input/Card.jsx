import { AlignRight } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Table } from "reactstrap";
import { Button, Form, FormGroup } from "reactstrap";
import { Input, Label } from "reactstrap";

export default function Card() {
  let [card, setCard] = useState({
    email: "",
    password: "",
  });
  let [mycard, setMycard] = useState([]);
  let [index, setIndex] = useState(null);
  const addTask = () => {
    if (card.email.length > 0 && card.password.length > 0) {
      setMycard([...mycard, card]);
      localStorage.setItem("todo", JSON.stringify([...mycard, card]));
      setCard({
        email: "",
        password: "",
      });
    } else {
      alert("fill in value");
    }
  };
  useEffect(() => {
  let json= localStorage.getItem("todo")
  let normal=JSON.parse(json)
  console.log(normal);
  setMycard(normal || [])
  }, []);
  const deleteHandler = (index) => {
    setMycard(mycard.filter((e,i) => index !== i));
    localStorage.setItem("todo", JSON.stringify(mycard));
  };
  const updateData = () => {
    if (index || index === 0) {
      mycard.splice(index, 1, card);
      setCard([...mycard]);
      setCard({
        email: "",
        password: "",
      });
      setIndex(null);
    } else {
      alert("please select");
    }
  };
  const updateHandler = (data, index) => {
    setCard(data);
    setIndex(index);
  };

  const AllDeletHandler= () =>{
    setMycard([])
  }
  return (
    <div>
      {/* <h1>{card.email}</h1> */}
      <Form className="w-25 border border-3 border-dark p-5 rounded-3 m-auto mt-4 bg-info">
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input
            value={card.email}
            id="exampleEmail"
            name="email"
            placeholder="with a placeholder"
            type="email"
            onChange={(e) => setCard({ ...card, email: e.target.value })}
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input
            value={card.password}
            id="examplePassword"
            name="password"
            placeholder="password placeholder"
            type="password"
            onChange={(e) => setCard({ ...card, password: e.target.value })}
          />
        </FormGroup>
        {index || index === 0 ? (
          <Button className="w-100 " style={{ backgroundColor: "red" }} onClick={updateData}>
            Update...
          </Button>
        ) : (
          <Button className="w-100 bg-black" onClick={(e) => addTask(e)}>Submit</Button>
        )}
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
          {
          mycard.map((e, i) => {
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

          <Button onClick={()=>AllDeletHandler()}>DeleteAll</Button>
        </tbody>
      </Table>
    </div>
  );
}
