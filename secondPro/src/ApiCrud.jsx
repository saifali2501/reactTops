import axios from 'axios'
import React, { useState } from 'react'
import { Button, Form, FormGroup, Input, Label, Table } from 'reactstrap'

export default function ApiCurd() {
  let [user , setUser] = useState({
    email:"",
    password:""
  })

  let [myUser,setMyuser] = useState([])

  const submitHandler = (e) =>{
    // e.preventDefault();

    axios({
      method:"post",
      url:"http://localhost:9999/user/signin",
      data:user
    }).then((res)=>{
        console.log("=============>",res);
    })
  }

  return (
    <div>
       <Form >
            <FormGroup>
              <Label for="exampleEmail">Title</Label>
              <Input
                id="exampleEmail"
                name="title"
                placeholder="Title"
                type="text"
                onChange={(e)=>setUser({...user,email:e.target.value})}
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail">description</Label>
              <Input
                id="exampleEmail"
                name="description"
                placeholder="description"
                type="text"
                onChange={(e)=>setUser({...user,email:e.target.value})}

              />
            </FormGroup>

            <Button className="w-100" onClick={()=>submitHandler()}>Submit</Button>
          </Form>

          <Table striped>
        <thead>
          <tr>
            <th>SR.</th>
          
            <th>Email</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          {myUser?.map((e, i) => {
            return (
              <tr>
                <th scope="row">{i + 1}</th>
                
                <td>{e.email}</td>
                <td>{e.password}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  )
}
