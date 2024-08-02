import axios from "axios";
import React, { useEffect } from "react";
import Select from "react-select";

// import {
//   colorOptions,
//   categoryOptions,
// } from "../../../../../../Untils/constants";

import {
  Button,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";
import { category, data } from "../../../../utils/constants";
import { useSelector } from "react-redux";

export default function ProductForm({
  modal,
  toggle,
  intialProduct,
  setProduct,
  product,
  setAllProduct,
  updateMode,
  refetchData,
  refetch,
}) {

  const mydata = useSelector((state)=>state?.authSlice?.token)
  console.log("======>:mydata===================================>", mydata)
  const submitHandler = (e) => {
    e.preventDefault();
    // console.log("-----------  product----------->", product);
    axios({
      method: "post",
      url: "http://localhost:9999/product/create",
      data: product,
      headers: {
        authorization: `Beare ${mydata}`,
        "Content-Type": "application/json"
    }
    })
      .then((res) => {
        alert("data added");
        setProduct(intialProduct);
        toggle();
        // console.log("------>");
        refetchData();
        setAllProduct(res?.data?.data);
      })
      .catch((err) => {
        alert(err.massage);
      });
  };

  // USEEFFECT HANDLER
  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:9999/product/getAll",
    })
      ?.then((res) => {
        setAllProduct(res?.data?.data);
      })
      ?.catch((err) => {
        alert("saiifjf",err)
      });
  }, [refetch]);

  const selectHandler = (e) => {
    let color = e.map(
      (e) => e.value.charAt(0).toUpperCase() + e.value.slice(1)
    );
    setProduct({ ...product, color: color });
  };

  const checkHandler = (e) => {
    if (product.size.includes(e)) {
      let filterData = product?.size.filter((ele) => ele !== e);
      // console.log("------->", filterData);
      setProduct({ ...product, size: filterData });
    } else {
      setProduct({ ...product, size: [...product?.size, e] });
    }
  };

  const updateData = () => {
    axios({
      method: "put",
      url: `http://localhost:9999/product/update/${product?._id}`,
      data: product,
    })
      .then((res) => {
        alert("Data updated..!");
        setProduct(intialProduct);
        toggle();
        refetchData();
      })
      .catch((err) => {
        toast.error(err);
      });
  };

  const CustomColorOption = ({ innerProps, label, data }) => (
    <div
      {...innerProps}
      style={{
        padding: "0px 10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottom: "1px solid #dee2e6",
        background: "#dee9",
        cursor: "pointer",
      }}
    >
      {label}
      <div
        style={{
          backgroundColor: data.value,
          width: "20px",
          height: "20px",
          marginRight: "8px",
          borderRadius: "50%",
        }}
      ></div>
      <div>
        <img src={data?.img} alt="" style={{ width: "40px", height: "40px" }} />
      </div>
    </div>
  );

  return (
    <div>
      <div>
        {/* <ProductPreview modal={modal} toggle={() => setModal(!modal)} /> */}
        <Button color="danger" className="hero" onClick={toggle}>
          Click Me
        </Button>
        <Modal isOpen={modal}>
          <ModalHeader toggle={toggle}>Modal title</ModalHeader>
          <ModalBody>
            <Form onSubmit={(e) => submitHandler(e)}>
              <FormGroup>
                <Label for="exampleEmail">Title</Label>
                <Input
                  id="exampleEmail"
                  placeholder="with a placeholder"
                  type="text"
                  value={product?.title}
                  onChange={(e) =>
                    setProduct({ ...product, title: e?.target.value })
                  }
                />
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword">Description</Label>
                <Input
                  id="Description"
                  name="Description"
                  placeholder="Enter Descriptions"
                  type="text"
                  value={product?.description}
                  onChange={(e) =>
                    setProduct({ ...product, description: e?.target?.value })
                  }
                />
              </FormGroup>
              <FormGroup>
                <Label for="brand">Brand</Label>
                <Input
                  id="brand"
                  placeholder="Enter brand"
                  type="text"
                  value={product?.brand}
                  onChange={(e) =>
                    setProduct({ ...product, brand: e?.target?.value })
                  }
                />
              </FormGroup>
              <FormGroup tag="fieldset">
                <Label>Gender</Label>
                <div className="d-flex w-100 gap-3">
                  <FormGroup>
                    <Input
                      type="radio"
                      className="me-2"
                      checked={product?.gender === "male"}
                      onChange={() =>
                        setProduct({ ...product, gender: "male" })
                      }
                    />
                    <Label>Male</Label>
                  </FormGroup>
                  <FormGroup disabled>
                    <Input
                      type="radio"
                      className="me-2"
                      checked={product?.gender === "female"}
                      onChange={() =>
                        setProduct({ ...product, gender: "female" })
                      }
                    />
                    <Label>Female</Label>
                  </FormGroup>
                  <FormGroup>
                    <Input
                      type="radio"
                      className="me-2"
                      checked={product?.gender === "kids"}
                      onChange={() =>
                        setProduct({ ...product, gender: "kids" })
                      }
                    />
                    <Label>Kids</Label>
                  </FormGroup>
                </div>
              </FormGroup>

              <FormGroup>
                <Label for="exampleEmail">Price</Label>
                <Input
                  id="exampleEmail"
                  name="Price"
                  value={product?.price}
                  placeholder="Enter Price"
                  type="text"
                  onChange={(e) =>
                    setProduct({ ...product, price: e?.target?.value })
                  }
                />
              </FormGroup>

              <FormGroup>
                <Label for="exampleEmail"> discountPercentage</Label>
                <Input
                  name=" discountPercentage "
                  placeholder="Enter  discountPercentage"
                  type="text"
                  value={product?.discountPercentage}
                  onChange={(e) =>
                    setProduct({
                      ...product,
                      discountPercentage: e?.target?.value,
                    })
                  }
                />
              </FormGroup>

              <FormGroup>
                <Label for="exampleEmail">availableStock </Label>
                <Input
                  name=" availableStock "
                  placeholder="Enter  availableStock"
                  value={product?.availableStock}
                  type="text"
                  onChange={(e) =>
                    setProduct({ ...product, availableStock: e?.target?.value })
                  }
                />
              </FormGroup>

              <FormGroup>
                <Label for="exampleEmail">thumbnail </Label>
                <Input
                  name=" thumbnail "
                  placeholder="Enter thumbnail"
                  type="text"
                  value={product?.thumbnail}
                  onChange={(e) =>
                    setProduct({ ...product, thumbnail: e?.target?.value })
                  }
                />
              </FormGroup>
              <Label for="examplePassword">Select</Label>
              <Select
                isMulti
                options={data}
                value={product?.color?.map((color) => {
                  return { value: color, label: color };
                })}
                onChange={(e) => selectHandler(e)}
                components={{ Option: CustomColorOption }}
              />

              <Label for="examplePassword">category</Label>
              <Select
                isMulti
                options={category}
                value={product?.category?.map((ele) => {
                  return { value: ele, label: ele };
                })}
                onChange={(e) =>
                  setProduct({
                    ...product,
                    category: e?.map((ele) => ele?.value),
                  })
                }
              />
              <Label for="checkBox40">Size</Label>
              <FormGroup className="d-flex gap-2">
                {["41", "42", "43", "44", "45"]?.map?.((e) => {
                  const isChecked = product?.size?.includes(e);

                  return (
                    <div>
                      <Input
                        id="checkBox40"
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => checkHandler(e)}
                        className="me-2"
                      />
                      <Label for="checkBox40">{e}</Label>
                    </div>
                  );
                })}
              </FormGroup>
              {updateMode ? (
                <Button
                  color="danger"
                  className="w-100"
                  onClick={() => updateData()}
                >
                  Update
                </Button>
              ) : (
                <Button color="danger" className="w-100">
                  Submit
                </Button>
              )}
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={toggle}>
              Do Something
            </Button>{" "}
            <Button color="secondary" onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    </div>
  );
}
