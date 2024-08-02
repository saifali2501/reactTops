import { Filter } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Button, Form, FormGroup, Input, Label, Table } from "reactstrap";

export default function CrudThree() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [myUser, setMyUser] = useState([]);

  const [index, setIndex] = useState(null);

  const emailMatch = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const Handler = (e) => {
    const match = myUser.some((e) => {
      return e.email === user.email;
    });

    if (user.email.length > 0 && user.password.length > 0) {
      if (!emailMatch.test(user.email)) {
        alert("Please enter a valid email address.");
      } else if (match) {
        alert("Same value");
      } else if (user.password.length < 6) {
        alert("Password must be at least 6 characters long.");
      } else {
        setMyUser([...myUser, user]);
        localStorage.setItem("todo", JSON.stringify([...myUser, user]));
        setUser({
          email: "",
          password: "",
        });
      }
    } else {
      alert("Please fill in the values");
    }
  };

  useEffect(() => {
    let jsondata = localStorage.getItem("todo");
    let normalData = JSON.parse(jsondata);
    setMyUser(normalData || []);
  }, []);

  const UpdateHandler = () => {
    if (index || index === 0) {
      if (!emailMatch.test(user.email)) {
        alert("Please enter a valid email address.");
      } else {
        myUser.splice(index, 1, user);
        setMyUser([...myUser]);
        localStorage.setItem("todo", JSON.stringify([...myUser]));
        setUser({
          email: "",
          password: "",
        });
        setIndex(null);
      }
    } else {
      alert("Please Select");
    }
  };

  const DeleteHandler = (index) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      let filterData = myUser.filter((e, i) => i !== index);
      setMyUser(filterData);
      localStorage.setItem("todo", JSON.stringify(filterData));
    } else {
      alert("Delete Operation Canceled");
    }
  };

  const EditHandler = (data, index) => {
    setUser(data);
    setIndex(index);
  };

  const DataDeleteHandler = () => {
    setMyUser([]);
    localStorage.removeItem("todo");
  };

  const renderHighlightedText = (text) => {
    const regex = /[@#][^\s@#]*/g;
    let lastIndex = 0;
    const elements = [];

    text.replace(regex, (match, offset) => {
      elements.push(text.slice(lastIndex, offset));
      elements.push(
        <p style={{ color: "red" }} key={offset}>
          {match}
        </p>
      );
      lastIndex = offset + match.length;
    });

    if (lastIndex < text.length) {
      elements.push(text.slice(lastIndex));
    }

    return elements;
  };

  return (
    <div className="mt-4">
      <Form
        style={{ border: "2px solid black" }}
        className="w-50 p-2 pt-3 m-auto"
      >
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input
            value={user?.email}
            id="exampleEmail"
            name="email"
            placeholder="with a placeholder"
            type="email"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
          <div style={{ whiteSpace: "pre-wrap" }}>
            {renderHighlightedText(user.email)}
          </div>
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input
            value={user?.password}
            id="examplePassword"
            name="password"
            placeholder="password placeholder"
            type="password"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
          <div style={{ whiteSpace: "pre-wrap" }}>
            {renderHighlightedText(user.password)}
          </div>
        </FormGroup>
        {index || index === 0 ? (
          <Button onClick={UpdateHandler}>Update</Button>
        ) : (
          <Button onClick={(e) => Handler(e)}>Submit</Button>
        )}
      </Form>

      <div>
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
            {myUser.map((e, i) => (
              <tr key={i}>
                <th scope="row">{i + 1}</th>
                {e.email.length < 8 ? (
                  <td style={{ color: "red" }}>{e?.email}</td>
                ) : (
                  <td>{e?.email}</td>
                )}
                <td>{e?.password}</td>
                <td>
                  <Button onClick={() => DeleteHandler(i)}>Delete</Button>
                </td>
                <td>
                  <Button onClick={() => EditHandler(e, i)}>Edit</Button>
                </td>
              </tr>
            ))}
          </tbody>
          <Button onClick={() => DataDeleteHandler()}>Delete All</Button>
        </Table>
      </div>
    </div>
  );
}
