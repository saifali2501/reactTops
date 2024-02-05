import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Table } from "reactstrap";

export default function SipmleApi() {
    let [data, setData] = useState([]);
//   const fetchdata = () => {

//     axios({
//       method: "get",
//       url: "https://fakestoreapi.com/products",
//     })
//       .then((res) => {
//         setData(res.data);
//         console.log("res---->", res.data);
//       })
//       .catch((err) => {
//         alert(err.massage);
//       });
//   };

useEffect(()=>{
    axios({
        method:"get",
        url:"https://fakestoreapi.com/products"
    })
    .then((res)=>{
        setData(res.data)
    })
    .catch((err)=>{
        alert(err.massage)
    })
})
  return (
    <div>
      <h1>Simple</h1>
      {/* <Button onClick={fetchdata}>Click</Button> */}
      <Table striped>
        <thead>
          <tr>
            <th>SR.</th>
            <th>IMAGE</th>
            <th>TITLE</th>
            <th>PRICE</th>
            <th>RATING</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((e, i) => {
            return (
              <tr>
                <th scope="row">{i + 1}</th>
                <td>
                  <img style={{ maxHeight: "50px" }} src={e?.image} />
                </td>
                <td>{e?.title}</td>
                <td>{e?.price}</td>
                <td>{e?.rating?.rate}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
