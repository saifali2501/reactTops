import axios from 'axios';
import React, { useState } from 'react';
import { Button, Form, FormGroup, Input, Label, Table } from 'reactstrap';

export default function ApiCurd() {
  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const [myUser, setMyUser] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    axios({
      method: "post",
      url: "http://localhost:9999/user/signin",
      data: user
    }).then((res) => {
      console.log("=============>", res.data.data);
      // Assuming the response contains user data, update the state
      // const newUser = res.data.data; // Adjust this based on the actual response structure
      setMyUser([...myUser, user]);
    }).catch(err => {
      console.error("Error:", err);
    });
  };

  return (
    <div>
      <Form onSubmit={submitHandler}>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            id="email"
            name="email"
            placeholder="Email"
            type="email"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            id="password"
            name="password"
            placeholder="Password"
            type="password"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
        </FormGroup>
        <Button className="w-100" type="submit">Submit</Button>
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
          {myUser?.map?.((e, i) => (
            <tr key={i}>
              <th scope="row">{i + 1}</th>
              <td>{e.email}</td>
              <td>{e.password}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

// import axios from 'axios';
// import React, { useState } from 'react';
// import { Button, Form, FormGroup, Input, Label, Table } from 'reactstrap';

// export default function ApiCurd() {
//   const [user, setUser] = useState({
//     email: "",
//     password: ""
//   });

//   const [myUser, setMyUser] = useState([]);

//   const submitHandler = (e) => {
//     e.preventDefault();

//     axios({
//       method: "post",
//       url: "http://localhost:9999/user/signin",
//       data: user
//     }).then((res) => {
//       console.log("=============>", res);
//       // Assuming the response contains user data, update the state
//       const newUser = res.data.data; // Adjust this based on the actual response structure
//       if (newUser) {
//         setMyUser(prevUsers => [...prevUsers, newUser]);
//       }
//     }).catch(err => {
//       console.error("Error:", err);
//     });
//   };

//   return (
//     <div>
//       <Form onSubmit={submitHandler}>
//         <FormGroup>
//           <Label for="email">Email</Label>
//           <Input
//             id="email"
//             name="email"
//             placeholder="Email"
//             type="email"
//             onChange={(e) => setUser({ ...user, email: e.target.value })}
//           />
//         </FormGroup>
//         <FormGroup>
//           <Label for="password">Password</Label>
//           <Input
//             id="password"
//             name="password"
//             placeholder="Password"
//             type="password"
//             onChange={(e) => setUser({ ...user, password: e.target.value })}
//           />
//         </FormGroup>
//         <Button className="w-100" type="submit">Submit</Button>
//       </Form>

//       <Table striped>
//         <thead>
//           <tr>
//             <th>SR.</th>
//             <th>Email</th>
//             <th>Password</th>
//           </tr>
//         </thead>
//         <tbody>
//           {Array.isArray(myUser) && myUser.map((e, i) => (
//             <tr key={i}>
//               <th scope="row">{i + 1}</th>
//               <td>{e.email}</td>
//               <td>{e.password}</td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>
//     </div>
//   );
// }
