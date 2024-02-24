import React, { useEffect, useState } from "react";
import { Form } from "reactstrap";
import Select from "react-select";
import {
  Button,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalHeader,
} from "reactstrap";
import { NavLink } from "react-router-dom";

const userTypeOptions = [
  { value: "user", label: "User" },
  { value: "admin", label: "Admin" },
  { value: "employee", label: "Employee" },
];
console.log("🚀 ~ userTypeOptions:", userTypeOptions)

const genderOptions = ["Male", "Female", "Kid"];
const hobbyOptions = ["Sports", "Reading", "Singing", "Traveling"];

export default function RegisterModal({ modal, toggle }) {
  const [user, setUser] = useState({
    email: "",
    password: "",
    hobby: [],
    gender: "",
    userType: "",
  });

  const [local, setLocal] = useState([]);

  useEffect(() => {
    const JsonData = localStorage.getItem("addd");
    console.log(" JsonData:", JsonData)
    
    const normalData = JSON.parse(JsonData);
    console.log("---->..>>", normalData);
    setLocal(normalData || []);
  }, []);

  const addTask = (e) => {
    e?.preventDefault();

    const isEmailDuplicate = local?.some((e) => e.email === user.email);
    const isAdminType = local?.some((e) => e.userType === "admin");

    if (isEmailDuplicate || (user.email === "" && isAdminType)) {
      alert("Data match or invalid");
    } else if (
      user.email === "" ||
      user.password === "" ||
      user.gender === "" ||
      user.hobby.length === 0 ||
      user.userType === ""
    ) {
      alert("Please fill in all fields");
    } else {
      alert("Data submitted successfully");
      toggle();
      setLocal([...local, user]);

      localStorage.setItem("addd", JSON.stringify([...local, user]));
      setUser({
        email: "",
        password: "",
        gender: "male",
        hobby: [],
        userType: "",
      });
    }
  };

  const checkCoxHandler = (item) => {
    const isHobbySelected = user?.hobby?.includes?.(item);
    if (isHobbySelected) {
      const filteredHobbies = user?.hobby?.filter?.((e) => e !== item);
      setUser({ ...user, hobby: filteredHobbies });
    } else {
      setUser({ ...user, hobby: [...user?.hobby, item] });
    }
  };

  const handleToggle = () => {
    toggle(); // Close the modal
  };

  return (
    <div>
      <Modal isOpen={modal}>
        <ModalHeader toggle={handleToggle}>Registration title</ModalHeader>
        <ModalBody>
          <Form onSubmit={addTask} autoComplete="off">
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input
                value={user?.email}
                id="exampleEmail"
                name="email"
                placeholder="Enter email"
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                value={user?.password}
                id="examplePassword"
                name="password"
                placeholder="Enter password"
                type="password"
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
            </FormGroup>
            <span>Gender</span>
            <div className="d-flex gap-3">
              {genderOptions?.map((e, i) => (
                <FormGroup key={i}>
                  <Input
                    name="radi"
                    type="radio"
                    onClick={() => setUser({ ...user, gender: e })}
                  />
                  <Label>{e}</Label>
                </FormGroup>
              ))}
            </div>
            <div>
              <Label>Hobby</Label>
            </div>
            <div className="d-flex gap-3">
              {hobbyOptions.map((e, i) => (
                <FormGroup key={i}>
                  <Input
                    onChange={() => checkCoxHandler(e)}
                    checked={user?.hobby?.includes(e)}
                    type="checkbox"
                  />
                  <Label>{e}</Label>
                </FormGroup>
              ))}
            </div>
            <FormGroup className="mt-3">
              <Label>UserType</Label>
              <Select
                onChange={(selectedOption) =>
                  setUser({ ...user, userType: selectedOption.value })
                }
                options={userTypeOptions}
                value={
                  userTypeOptions.find(
                    (option) => option.value === user.userType
                  ) || null
                }
              />
            </FormGroup>
            <div>
              <Button type="submit">Submit</Button>
            </div>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
}
