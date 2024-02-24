import React, { useEffect, useState } from 'react'
// import Select from "react-select";
import { Button, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'


function Loging({modal,toggle}) {
  let [card, setCard] = useState({
    email: "",
    password: "",
  });
  // const [local, setLocal] = useState([]);

  let [mycard, setMycard] = useState([]);
  let [index, setIndex] = useState(null);
  const getData = () => {
    if (card.email.length > 0 && card.password.length > 0) {
      setMycard([...mycard, card]);
      localStorage.setItem("addd", JSON.stringify([...mycard, card]));
      setCard({
        email: "",
        password: "",
      });
    } else {
      alert("fill in value");
    }
  };
  useEffect(() => {
  let json= localStorage.getItem("addd")
  let normal=JSON.parse(json)
  console.log(normal);
  setMycard(normal || [])
  }, []);
  // const deleteHandler = (index) => {
  //   setMycard(mycard.filter((e,i) => index !== i));
  //   localStorage.setItem("todo", JSON.stringify(mycard));
  // };
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
  // const updateHandler = (data, index) => {
  //   setCard(data);
  //   setIndex(index);
  // };
  // const toggle = () => {
  //   setModal(!modal);
  //   if (!modal) {
  //     setUser({
  //       email: "",
  //       password: "",
  //       gender: "",
  //       hobby: [],
  //       userType: "",
  //     });
  //   }
  // };

  // const [modal, setModal] = useState(false);
  
  const handleToggle = () => {
    toggle(); // Close the modal

    // Reset the user state to initial values
    // setUser(initializeData);
}

  return (
    <div className='w-100'>
      {/* <NavLink to={"/user"}>Local</NavLink> */}
    
      
      <Modal isOpen={modal} >
        <ModalHeader toggle={handleToggle}>login title</ModalHeader>
        <ModalBody >
        <Form  onSubmit={getData} autoComplete='off' 
        // className="w-100 border border-3 border-dark p-5 rounded-3 m-auto mt-4 bg-info"
        >
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
          <Button className="w-100 bg-black" >Submit</Button>
        )}
      </Form>
        </ModalBody>
       
      </Modal>
     
    </div>
  );
}
export default Loging;
