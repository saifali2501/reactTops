import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, Label, Input } from 'reactstrap';
// import RagisterForm from '../sinup/RagisterForm';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { login } from '../../../Redux/feature/auth/authSlice';
// import RagisterForm from '../sinup/RagisterForm';
import { useNavigate } from 'react-router-dom';
import RagisterForm from '../../Page/common/sinup/RagisterForm';

export default function LoginForm({ toggle, modal }) {
  const [isOpen, setIsOpen] = useState(false);
  const [registerModal, setRegisterModal] = useState(false);

 const navigate= useNavigate()

  const toggleLoginModal = () => setIsOpen(!isOpen);
  const toggleRegisterModal = () => setRegisterModal(!registerModal);

  let [user,setuser] = useState({
    email:"",
    password:""
  })
const dispatch=useDispatch()
  const submitHundler = (e) =>{
    e.preventDefault();
    axios({
        method:"post",
        url:"http://localhost:9999/user/signin",
        data:user
    })
    .then((res)=>{
      dispatch(login(res.data))
      alert("user login suc")
      toggle()
      if(res?.data?.data?.userType === "admin"){
          navigate("/dashbord")
      }else{
        navigate("/")
      }
    })
    .catch((err)=>{
      // console.log("========",err);
      alert("somthing wrong")
    })
  }

  const RegisterHandler = () => {
    toggleLoginModal();
    toggleRegisterModal();
    toggle() 
  };

  return (
    <div>
      <RagisterForm modal={registerModal} toggle={toggleRegisterModal} />
      <Modal isOpen={modal}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          <span className="borderline"></span>
          <Form className="border border-1 w-100 m-auto my-4 p-3 rounded-2" style={{ boxShadow: "0px 0px 3px" }}>
            <h2>Login</h2>
            <div className="inputbox mt-3">
              <Label>Email</Label>
              <Input required id="exampleEmail" name="email" placeholder="Enter your email" type="email" onChange={(e)=>setuser({...user,email:e.target.value})} />
            </div>
            <div className="inputbox mt-3">
              <Label>Password</Label>
              <Input required id="examplePassword" name="password" placeholder="Enter your password" type="password"  onChange={(e)=>setuser({...user,password:e.target.value})}/>
            </div>
            <Button onClick={(e)=>submitHundler(e)} className="mt-3 bg-danger w-100">Submit</Button>
            <p className="mt-3 text-center">
              Don't have an account?{' '}
              <span color='danger' role="button" onClick={RegisterHandler} style={{ cursor: 'pointer', color: 'blue' }}>
                Register here
              </span>
            </p>
          </Form>
        </ModalBody>
        
       
      </Modal>
    </div>
  );
}
