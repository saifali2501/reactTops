import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Product.css"
import { intialProduct } from "../../../../utils/IntialState";
// import Select from "react-select";
// import img1 from "./Image/bike.jpg";
// import img2 from "./Image/car.jpg";
// import img3 from "./Image/iphone.jpg";
// import img4 from "./Image/laptop.jpg";

import ProductPreview from "./ProductPreview";
import ProductForm from "./ProductForm";
import ProductTable from "./ProductTable";
import { Button } from "reactstrap";

export default function Product() {
  let [product, setProduct] = useState();
  let [allProduct, setAllProduct] = useState([]);
  // let [select, setSelect] = useState([]);
  const [refetch, setRefetch] = useState(true);
  const [updateMode, setUpdateMode] = useState(false);

  const [modal, setModal] = useState(false);

  const [detailModal, setDetailModal] = useState(false);
  // const [ProductDetails, setProductDetails] = useState(null);
  const [selectedProductDetails, setSelectedProductDetails] = useState(null)
  const refetchData = () => setRefetch(!refetch);
  // const [modal, setModaler] = useState(false);

  // const toggler = () => setModal(!modal);

  // const toggle = () => setModal(!modal);

  // useEffect(() => {
  //   axios({
  //     method: "get",
  //     url: "http://localhost:9999/product/getall",
  //   })
  //     .then((res) => {
  //       console.log("---->", res.data);
  //       setAllProduct(res?.data?.data);
  //     })
  //     .catch((err) => {
  //       console.log(err.massage);
  //     });
  // }, [refetch]);

  // console.log("------------->", product);

  const toggle = () => {
    setModal(!modal);
    setUpdateMode(false);
    setProduct(intialProduct);
  };

  return (
    <>
      <div className="d-flex align-items-center mb-4">
        <div style={{ flex: "1", textAlign: "center" }}>
          <h1 className="m-0 ps-5 ms-5">Product</h1>
        </div>

        <div>
          <Button color="danger" onClick={toggle}>
            Add Product
          </Button>
        </div>
      </div>


      <ProductForm
        intialProduct={intialProduct}
        product={product}
        toggle={toggle}
        modal={modal}
        updateMode={updateMode}
        setProduct={setProduct}
        setAllProduct={setAllProduct}
        refetch={refetch}
        refetchData={refetchData}
      />
      <ProductTable
        product={product}
        allProduct={allProduct}
        setAllProduct={setAllProduct}
        setProduct={setProduct}
        refetchData={refetchData}
        toggle={toggle}
        refetch={refetch}
        setUpdateMode={setUpdateMode}
        setDetailModal={setDetailModal}
        setSelectedProductDetails={setSelectedProductDetails}
        
      />

       <ProductPreview
          isOpen={detailModal}
          toggle={() => setDetailModal(false)}
          // productDetails={ProductDetails}
          productDetails={selectedProductDetails}
        />
    </>
  );
}
