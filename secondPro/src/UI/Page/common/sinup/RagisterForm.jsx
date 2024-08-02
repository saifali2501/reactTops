import axios from "axios";
import React, { useState } from "react";
import { Eye, EyeOff } from "react-feather";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { login } from "../../../../Redux/feature/auth/authSlice";

export default function RagisterForm({ toggle, modal }) {
  const initialUser = {
    name: "",
    email: "",
    num: "",
    password: "",
    conPassword: "",

    age: "",
  };

  const initialAddress = {
    add: "",
    city: "",
    state: "",
    pinCode: "",
  };

  const [user, setuser] = useState(initialUser);
  const [address, setAddress] = useState(initialAddress);
  const [pass,setPass] = useState(true)

  const [loginModal, setLoginModal] = useState(false);

  const toggleLoginModal = () => setLoginModal(!loginModal);

  const disptch=useDispatch()
  // const navigate=useNavigate()

  const handler = (e) => {
    e.preventDefault();
    if (user.password !== user.conPassword)
      return alert("Password and confirm password does not match");
    axios({
      method: "post",
      url: "http://localhost:9999/user/signup",
      data: { ...user, address: [address] },
    })
      .then((res) => {
        disptch(login(res.data));
        alert("User login success");
        // navigate("/");
        toggle()
      })
      .catch((err) => {
        alert("Somthing is wrong");
      });
  };

  const PassHandler = () => {
    setPass(!pass);
  };

  const loginHandler = () => {
    toggleLoginModal();
    // toggleRegisterModal();
    toggle() 
  };

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input
                id="exampleEmail"
                name="email"
                placeholder="with a placeholder"
                type="email"
                value={user.email}
                onChange={(e) => setuser({ ...user, email: e.target.value })}
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <div style={{ position: "relative" }}>
                <Input
                  id="examplePassword"
                  name="password"
                  value={user.password}
                  placeholder="password placeholder"
                  type={pass ? "password" : "text"}
                  onChange={(e) =>
                    setuser({ ...user, password: e.target.value })
                  }
                />

                {pass ? (
                  <EyeOff
                    onClick={PassHandler}
                    style={{
                      position: "absolute",
                      top: "7px",
                      right: "20px",
                      bottom: "0",
                    }}
                  />
                ) : (
                  <Eye
                    onClick={PassHandler}
                    style={{
                      position: "absolute",
                      top: "7px",
                      right: "20px",
                      bottom: "0",
                    }}
                  />
                )}
              </div>
            </FormGroup>

            <FormGroup>
              <Label for="examplePassword">ConPassword</Label>
              <Input
                id="examplePassword"
                name="password"
                value={user.conPassword}
                placeholder="password placeholder"
                type="password"
                onChange={(e) =>
                  setuser({ ...user, conPassword: e.target.value })
                }
              />
            </FormGroup>

            <FormGroup>
              <Label for="examplePassword">Number</Label>
              <Input
                id="examplePassword"
                name="Number"
                value={user.num}
                placeholder="password placeholder"
                type="text"
                onChange={(e) => setuser({ ...user, num: e.target.value })}
              />
            </FormGroup>

            <FormGroup>
              <Label for="exampleEmail">Age</Label>
              <Input
                id="exampleEmail"
                name="age"
                value={user.age}
                placeholder="with a placeholder"
                type="age"
                onChange={(e) => setuser({ ...user, age: e.target.value })}
              />
            </FormGroup>

            <FormGroup>
              <Label for="exampleEmail">Add</Label>
              <Input
                id="exampleEmail"
                name="address"
                value={address.add}
                placeholder="with a placeholder"
                type="address"
                onChange={(e) => setAddress({ ...address, add: e.target.value })}
              />
            </FormGroup>

            <FormGroup>
              <Label for="exampleEmail">city</Label>
              <Input
                id="exampleEmail"
                name="address"
                placeholder="with a placeholder"
                type="address"
                value={address.city}
                onChange={(e) => setAddress({ ...address, city: e.target.value })}
              />
            </FormGroup>

            <FormGroup>
              <Label for="exampleEmail">state</Label>
              <Input
                id="exampleEmail"
                name="address"
                placeholder="with a placeholder"
                type="address"
                value={address.state}
                onChange={(e) => setAddress({ ...address, state: e.target.value })}
              />
            </FormGroup>

            <Button onClick={(e)=>handler(e)}>Submit</Button>
           
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Do Something
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
