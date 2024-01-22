import React from 'react'
import { Button, Form, FormGroup, Input, Label, Modal, ModalBody, ModalHeader } from 'reactstrap'

export default function Loging() {
  const toggle = () => {
    setModal(!modal);
  };
    // if (!modal) {
    //   // setUser({
    //   //   email: "",
    //   //   password: "",
    //   //   gender: "",
    //   //   hobby: [],
    //   //   userType: "",
    //   // });
    // }

  const [modal, setModal] = useState(false);
  return (
    // <div>saif</div>
    <div>
      <Button color="danger" onClick={toggle}>
        Click Me
      </Button>
       <Modal>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          {/* <h1>saifu</h1> */}
        {/* <Form className="w-25 border border-3 border-dark p-5 rounded-3 m-auto mt-4 bg-info">
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input
        
            id="exampleEmail"
            name="email"
            placeholder="with a placeholder"
            type="email"
            
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input
        
            id="examplePassword"
            name="password"
            placeholder="password placeholder"
            type="password"
            
          />
        </FormGroup>
        {index || index === 0 ? (
          <Button className="w-100 " style={{ backgroundColor: "red" }} >
            Update...
          </Button>
        ) : (
            <Button className="w-100 bg-black" onClick={(e) => addTask(e)}>Submit</Button>
        )}
      </Form> */}
        </ModalBody>
        <ModalFooter></ModalFooter>
      </Modal>
    </div>
    
  
  )
}
