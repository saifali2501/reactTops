import { Settings } from "lucide-react";
import React, { useEffect, useState } from "react";
import Select from "react-select";
import { toast } from "react-toastify";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  Table,
} from "reactstrap";

function RegiTypeSelect() {
  let [local, setLocal] = useState(null);
  let [namesave, setNamesave] = useState([]);
  let [refer, setRef] = useState(true);
  let [select, setSelect] = useState(null);

  const refHandler = () => {
    setRef(!refer);
  };
  // let genderMap = ["male", "female", "kids"];
  // let hobbyMap = ["Cricket", "Singing", "travelling"];

  var options = [
    { value: "user", label: "User" },
    { value: "admin", label: "Admin" },
    { value: "employe", label: "Employe" },
  ];
  let [user, setUser] = useState({
    email: "",
    password: "",
    // gender: "",
    // hobby: [],
    userType: "user",
  });

  const [modal, setModal] = useState(false);

  const toggle = () => {
    if (!modal) {
      setUser({
        email: "",
        password: "",
        // gender: "",
        // hobby: [],
        userType: "user",
      });
    }
    setModal(!modal);
  };

  useEffect(() => {
    let json = localStorage.getItem("add");
    let normal = JSON.parse(json);
    setLocal(normal);
  }, [refer]);

  // const checkdata = (ee) => {
  //   const hobbyCheck = user?.hobby?.includes(ee);
  //   if (hobbyCheck) {
  //     const updatedHobbies = user.hobby.filter((hobby) => hobby !== ee);
  //     setUser({ ...user, hobby: updatedHobbies });
  //   } else {
  //     setUser({ ...user, hobby: [...user.hobby, ee] });
  //   }
  // };
  const handleSelectChange = (selectedOption) => {
    setUser({ ...user, userType: selectedOption.value });
  };
  const dataTransefer = () => {
    let localmap = local?.some?.((e) => {
      return e?.email === user.email;
    });
    let admin = local?.some?.((e) => {
      return e?.userType === "admin";
    });

    if (admin && user.userType === "admin") {
      toast.error("you are not admin");
    } else if (localmap) {
      toast.warn(" Your Email is alerdy saved ! ");
    } else if (
      user.email === "" ||
      user.password === "" ||
      // user.gender === "" ||
      // user.hobby.length === 0 ||
      user.userType === ""
    ) {
      toast.warn("please fill up");
    } else {
      setUser({
        email: "",
        password: "",
        // gender: "",
        // hobby: [],
        userType: "user",
      });
      toast.success("data save");
      setNamesave([...namesave, user]);
      localStorage.setItem("add", JSON.stringify([...namesave, user]));
      setModal(!modal);
      refHandler();
    }
  };

  useEffect(() => {
    if (select) {
      let filtered = local?.filter?.((e) => e?.userType === select?.value);
      setLocal(filtered);
    }
  }, [select]);

  return (
    <div>
      <Button color="danger" onClick={toggle}>
        Click Me
      </Button>
      <Select
        options={options}
        onChange={(e) => setSelect(e)}
        className="w-25 mb-1"
      />
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input
                id="exampleEmail"
                user="email"
                placeholder="with a placeholder"
                type="email"
                onChange={(e) => {
                  setUser({ ...user, email: e.target.value });
                }}
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                id="examplePassword"
                user="password"
                placeholder="password placeholder"
                type="password"
                onChange={(e) => {
                  setUser({ ...user, password: e.target.value });
                }}
              />
            </FormGroup>
            {/* <Label>Gender:-</Label>
            <div className="d-flex">
              {genderMap?.map((e, i) => {
                return (
                  <FormGroup key={i}>
                    <Label for="examplePassword">{e}</Label>
                    <Input
                      user="radio1"
                      type="radio"
                      onChange={() => setUser({ ...user, gender: e })}
                    />
                  </FormGroup>
                );
              })}
            </div> */}
            {/* <Label>Hobby:-</Label>
            <div className="d-flex gap-2">
              {hobbyMap.map((e, i) => {
                return (
                  <FormGroup key={i}>
                    <Label for="examplePassword">{e}</Label>
                    <Input
                      type="checkbox"
                      onChange={() => checkdata(e)}
                      checked={user?.hobby?.includes?.(e)}
                    />
                  </FormGroup>
                );
              })}
            </div> */}
            <FormGroup>
              <Select
                options={options}
                value={options?.find?.((user) => user.value === user.userType)}
                onChange={handleSelectChange}
              />
            </FormGroup>
            <Button color="danger" className="w-100" onClick={dataTransefer}>
              Submit
            </Button>
          </Form>
        </ModalBody>
      </Modal>
      <div>
        <Table>
          <thead>
            <tr>
              <th>sr.no</th>
              <th>Email</th>
              <th>Passsword</th>
              {/* <th>Gender</th>
              <th>Hobby</th> */}
              <th>UserType</th>
            </tr>
          </thead>
          <tbody>
            {local?.map?.((e, i) => {
              return (
                <tr key={i}>
                  <th>{i + 1}</th>
                  <th>{e?.email}</th>
                  <th>{e?.password}</th>
                  {/* <th>{e?.gender}</th>
                  <th>{e?.hobby}</th> */}
                  <th>{e?.userType}</th>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default RegiTypeSelect;