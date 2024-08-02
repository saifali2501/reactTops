
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
  

  const [filter, setFilter] = useState({});
  const location = useLocation();
  console.log("🚀 ~ Shope ~ location:=========>+=++==+++++++++++++", location)
const mainCategory = location?.state?.mainCategory;
  console.log("🚀 ~ Shope ~ mainCategory:=========>>>>>>>>>", mainCategory)
  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:9999/product/getall",
      params: { ...filter, mainCategory: location?.state?.mainCategory },
    })
      .then((res) => {
        setAllProduct(res?.data?.data);
      })
      .catch((err) => {
        // console.log(err.massage);
      });
  }, [refetch, location, filter]);

  

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
                        <NavLink tag={Link} state={e} role="button" to={`/ProdctDetail/${e?._id}`} >
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
