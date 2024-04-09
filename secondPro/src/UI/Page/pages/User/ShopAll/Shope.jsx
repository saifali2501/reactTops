// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import {
//   Button,
//   Card,
//   CardBody,
//   CardSubtitle,
//   CardText,
//   CardTitle,
//   NavLink,
//   Table,
// } from "reactstrap";
// import ProductFilter from "./ProductFilter";
// import { useLocation } from "react-router-dom";
// // import ProductFilter from "./ProductFilter";

// export default function Shope() {
//   // let [data, setData] = useState([]);
//   let [allProduct, setAllProduct] = useState([]);
//   const [refetch, setRefetch] = useState(true);
//   const refetchData = () => setRefetch(!refetch);

//   const [filter,setFilter] = useState({})
//   const location = useLocation()
//   console.log("🚀 ~ Shope jgkjfgfd======", location)
//   useEffect(() => {
//     axios({
//       method: "get",
//       url: "http://localhost:9999/product/getall",
//       params:filter
//     })
//       .then((res) => {
//         console.log("---->", res.data);
//         setAllProduct(res?.data?.data);
//       })
//       .catch((err) => {
//         console.log(err.massage);
//       });
//   }, [refetch]);
//   return (
//     <div >

//   <div className="mt-5 ">

//   <div className="container">

//     <div style={{alignItems:"unset",display:"flex",justifyContent:"center"}}  className="row">
//       <div  style={{marginTop:"120px",position:"sticky",top:"100px",height:"100px"}} className="col-2 sticky-sm-top h-100vh ">

//        <ProductFilter/>
//       </div>
//       <div className="col-10 ">
//           <h1 style={{fontWeight:"700"}} className="mx-3">All Product</h1>
//       <div className="mt-5 d-flex flex-wrap gap-3 justify-content-end ">
//           {allProduct.map((e, i) => {
//             return (
//               <Card
//                 key={i}
//                 style={{
//                   width: "16rem",
//                 }}
//               >
//                 <img style={{height:"250px",width:"100%"}} alt="Sample" src={e.thumbnail} />
//                 <CardBody>
//                   <CardTitle tag="h5">{e.brand}</CardTitle>
//                   <CardSubtitle className="mb-2 text-muted" tag="h6">
//                     {e.model}
//                   </CardSubtitle>
//                   <CardText>

//                   </CardText>
//                   <Button>Button</Button>
//                 </CardBody>
//               </Card>
//             );
//           })}
//         </div>
//       </div>

//     </div>
//   </div>
// </div>

// </div>

//   );
// }

{
  /* <Table>
          <thead>
            <tr>
              <th>SR.</th>
              <th>Image</th>
              <th>Title</th>
              <th>price</th>
              <th>discount</th>
              <th>final price</th>

              <th>color</th>
              <th>Size</th>
            </tr>
          </thead>
          <tbody>
            {allProduct?.map?.((e, i) => {
              const discountedPrice =
                e.price - e.price * (e.discountPercentage / 100);
              return (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>
                    <img
                      src={e.thumbnail}
                      style={{ width: "100px", height: "50px" }}
                      alt=""
                    />
                  </td>
                  <td>{e?.title}</td>
                  <td>{e?.price}</td>
                  <td>{e?.discountPercentage}</td>
                  <td>{discountedPrice}</td>
                  <td>
                    <div style={{ display: "flex", gap: "10px" }}>
                      {e?.color?.map((color, index) => {
                        return (
                          <div
                            style={{
                              height: "10px",
                              width: "10px",
                              border: "1px solid black",
                              backgroundColor: color,
                              borderRadius: "50%",
                              marginRight: "10px",
                            }}
                          ></div>
                        );
                      })}
                    </div>
                    <div>{e?.color?.map((e) => e).join(" - ")}</div>
                  </td>
                  <td>
                    <div
                      style={{
                        display: "flex",
                        // gridTemplateColumns: "repeat(2, 1fr)",
                        gap: "5px",
                      }}
                    >
                      {["42", "43", "44", "45"]?.map((size, i) => (
                        <div key={i}>
                          <div
                            className={`${
                              e?.size?.includes(size)
                                ? "text-dark fw-bold"
                                : "text-muted"
                            }`}
                            style={{ border: "1px solid black" }}
                          >
                            {size}
                          </div>
                        </div>
                      ))}
                    </div>
                  </td>
                 
                </tr>
              );
            })}
          </tbody>
        </Table> */
}

import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
  NavLink,
  Table,
} from "reactstrap";
import ProductFilter from "./ProductFilter";
import "./Shope.css"
import { Link, useLocation } from "react-router-dom";
// import ProdactDetails from "./ProdactDetails";
// import SinglePage from "../../../common/SinglePage/SinglePage";
// import ProductFilter from "./ProductFilter";

export default function Shope() {
  // let [data, setData] = useState([]);
  let [allProduct, setAllProduct] = useState([]);
  const [refetch, setRefetch] = useState(true);
  const refetchData = () => setRefetch(!refetch);
  const [Detail, setDetail] = useState(null);

  const [filter, setFilter] = useState({});
  const location = useLocation();
  console.log("🚀 ~ Shope jgkjfgfd======", location?.state?.mainCategory);
  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:9999/product/getall",
      params: { ...filter, mainCategory: location?.state?.mainCategory },
    })
      .then((res) => {
        console.log("---->", res.data);
        setAllProduct(res?.data?.data);
      })
      .catch((err) => {
        console.log(err.massage);
      });
  }, [refetch, location, filter]);

  const PreviewHandler = (id) =>{
    axios({
      method:"get",
      url:`http://localhost:9999/product/getProductById/${id}`,
      // params:{state.Detail}
      // params:state:{Detail}
    })?.then((res)=>{
      console.log(res?.data)
      setDetail(res?.data?.data)
  })?.catch((err)=>{
      console.log(err)
      // toast.error("Failed to load product details")
      alert("Faild")
  })
  }

  return (
    <div className="shope">
      {/* <SinglePage/> */}
      <div className="mt-5">
        <div className="container">
          <div
            style={{
              alignItems: "unset",
              display: "flex",
              justifyContent: "center",
            }}
            className="row"
          >
            <div
              style={{
                marginTop: "120px",
                position: "sticky",
                top: "100px",
                height: "100px",
              }}
              className="col-2 sticky-sm-top h-100vh "
            >
              <ProductFilter />
            </div>
            <div className="col-10 ">
              <h1 style={{ fontWeight: "700" }} className="mx-3">
                {location?.state?.mainCategory}
              </h1>
              <div className="mt-5 d-flex flex-wrap gap-3 justify-content-end ">
                {allProduct.map((e, i) => {
                  return (
                    <div>

                    <Card
                        
                        key={i}
                        style={{
                          width: "16rem",
                          height:"100% ",
                          padding:"15px"
                        }}
                      >
                        <NavLink tag={Link} state={e} role="button" to={`/ProdctDetail/${e?._id}`} onClick={() => PreviewHandler(e._id)}>
                        <img
                          style={{ height: "230px", width: "100%" }}
                          alt="Sample"
                          src={e.thumbnail}
                        />
                        
                          {/* <CardTitle tag="h5">{e.brand}</CardTitle>
                          <CardSubtitle className="mb-2 text-muted" tag="h6">
                          {e.model}
                          </CardSubtitle>
                        <CardText></CardText> */}
                            <div className="card_text">
                          <h5>{e.brand}</h5>
                          <p>{e?.model}</p>
                          <span className="price">${e.price}</span>
                        </div>
                    </NavLink>
                    <Button onClick={()=>CartHandler(e._id)}>addCart</Button>
                      </Card>
                    
                        </div>
                        
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <ProductDetails/> */}
      {/* <ProdactDetails Detail={Detail} /> */}
    </div>
  );
}
