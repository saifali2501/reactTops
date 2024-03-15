import React, { useState } from "react";
import ProducttModal from "./ProducttModal";
import ProducttTable from "./ProducttTable";
import { Button, Input } from "reactstrap";
const intialProduct = {
  title: "",
  description: "",
  brand: "",
  gender: "",
  price: "",
  discountPercentage: "",
  availableStock: "",
  category: [],
  thumbnail: "",
  color: [],
  size: [],
};

export default function Product() {
  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
    setProduct(intialProduct);
    setUpdatemode(false);
  };
  let [refresh, setRefresh] = useState(true);
  const refresHandler = () => {
    setRefresh(!refresh);
  };
  let [product, setProduct] = useState(intialProduct);
  let [updatemode, setUpdatemode] = useState(false);
  const UpdateHandler = () => {
    setUpdatemode(true);
  };
  return (
    <>
      <div className="d-flex gap-2 justify-content-end mx-4 mt-2">
        <Button color="danger" onClick={toggle}>
         New Product
        </Button>
      </div>
      <ProducttModal
        modal={modal}
        toggle={toggle}
        refresHandler={refresHandler}
        produc={product}
        updatemod={updatemode}
        setProduc={setProduct}
        intialProduc={intialProduct}
        setUpdatemod={setUpdatemode}
      />
      <ProducttTable
        refresh={refresh}
        refresHandler={refresHandler}
        setProduct={setProduct}
        toggle={toggle}
        UpdateHandler={UpdateHandler}
      />
    </>
  );
}