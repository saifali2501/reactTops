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

  const Handler = (e) => {
    const emailMatch = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const match = myUser.some((e) => {
      return e.email === user.email;
    });
    if (user.email.length > 0 && user.email.length > 0) {
      if (!emailMatch.test(user.email)) {
        alert("Please enter a valid email address.");
      } else if (match) {
        alert("same value");
      } else if (user.password.length < 6) {
        alert("Password must be at least 6 characters long.");
      }
      setMyUser([...myUser, user]);
      localStorage.setItem("todo", JSON.stringify([...myUser, user]));
      setUser({
        email: "",
        password: "",
      });
    } else {
      alert("please fill value");
    }
  };

  useEffect(() => {
    let jsondata = localStorage.getItem("todo");
    //    console.log(" jsondata:", jsondata)
    let normalData = JSON.parse(jsondata);
    console.log("🚀 ~ useEffect ~ normalData:", normalData);
    //    let normalData=localStorage
    setMyUser(normalData || []);
  }, []);

  const UpdateHandler = () => {
    const emailMatch = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (index || index === 0) {
      if (!emailMatch.test(user.email)) {
        alert("Please enter a valid email address.");
      }
      myUser.splice(index, 1, user);
      setUser([...myUser]);
      localStorage.setItem("todo",JSON.stringify([...myUser]))
      setUser({
        email: "",
        password: "",
      });
      setIndex(null);
    } else {
      alert("please Select");
    }
  };

  const DeleteHandler = (index) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      let filterData = myUser.filter((e, i) => i !== index);

      setMyUser(filterData);

      localStorage.setItem("todo", JSON.stringify(filterData));
    } else {
      alert("Delete Opretion Cancled");
    }
  };

  const EditHandler = (data, index) => {
    //   console.log("🚀 ~ EditHandler ~ EditHandler:", EditHandler)
    setUser(data);
    setIndex(index);
  };

  const DataDeleteHandler = () => {
    setMyUser([]);
  };
  return (
    <div className="mt-4">
      {/* <h1>{user.email}</h1> */}
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
              <th>First Name</th>
              <th>Password</th>
              <th>action</th>
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
                  <Button onClick={() => EditHandler(e, i)}>Delete</Button>
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
