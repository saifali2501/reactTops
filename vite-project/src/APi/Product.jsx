import axios from "axios";
import React, { useEffect, useState } from "react";
import Select from "react-select";
import img1 from "./image/bike.jpeg"
import img2 from "./image/car.jpeg"
import img3 from "./image/iphone.jpeg"
import img4 from "./image/laptop.jpeg"
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
  Table,
} from "reactstrap";

const intialProduct = {
  title: "",
  description: "",
  brand: "",
  gender: "", // radio
  price: "", // number
  discountPercentage: "", // text
  availableStock: "", // text
  category: [], // select
  thumbnail: "", // text
  color: [], // select
  size: [], // checkbox
};

let obj2 = {
  gender: "male", // radio // male-female-kids
  title: "Nike airJordan-440", // text
  description: "shose with comfort", // text
  price: 1999, // number
  discountPercentage: 70, // text
  availableStock: 10, // text
  brand: "nike", // text
  category: ["casual", "highlength"], // select
  thumbnail: "url", // text
  color: ["black", "white", "yellow", "green"], // select
  size: ["45", "44", "43", "42"], // checkbox
};

let data = [
  { value: "car", label: "Car", img: img1 },
  { value: "bike", label: "Bike", img: img2 },
  { value: "phone", label: "Phone", img:  img3},
  { value: "laptop", label: "Laptop", img: img4 },
];

// const customStyles = {
//   option: (provided, state) => ({
//     ...provided,
//     backgroundColor: state.data.color,
//   }),
//   singleValue: (provided, state) => ({
//     ...provided,
//     color: state.data.color,
//   }),
// };
let category = [
  { value: "casual", label: "Casual" },
  { value: "highlength", label: "Highlength" },
];
export default function Product() {
  let [product, setProduct] = useState(intialProduct);
  let [allProduct, setAllProduct] = useState([]);
  // let [select, setSelect] = useState([]);
  const [refetch, setRefetch] = useState(true);
  const [updateMode, setUpdateMode] = useState(false);

  const [modal, setModal] = useState(false);

  // const toggle = () => setModal(!modal);

  const refetchData = () => setRefetch(!refetch);
  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:9999/product/getall",
    })
      .then((res) => {
        console.log("---->", res.data);
        setAllProduct(res?.data?.data);
      })
      .catch((err) => {
        console.log(err.massage);
      });
  }, [refetch]);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("-----------  product----------->", product);
    axios({
      method: "post",
      url: "http://localhost:9999/product/create",
      data: product,
    })
      .then((res) => {
        alert("data added");
        setProduct(intialProduct);
        toggle();
        console.log("------>");
        refetchData();
        setAllProduct(res?.data?.data);
      })
      .catch((err) => {
        alert(err.massage);
      });

    // console.log("------------->", product);
  };

  const selectHandler = (e) => {
    let color = e.map(
      (e) => e.value.charAt(0).toUpperCase() + e.value.slice(1)
    );
    setProduct({ ...product, color: color });
  };
  const checkHandler = (e) => {
    if (product.size.includes(e)) {
      let filterData = product?.size.filter((ele) => ele !== e);
      console.log("------->", filterData);
      setProduct({ ...product, size: filterData });
    } else {
      setProduct({ ...product, size: [...product?.size, e] });
    }
  };

  const toggle = () => {
    setModal(!modal);
    setUpdateMode(false);
    setProduct(intialProduct);
  };

  const deletHandler = (id) => {
    console.log("🚀 ~ deleteItem ~ id:", id);
    axios({
      method: "delete",
      url: `http://localhost:9999/product/delete/${id}`,
    })
      .then((res) => {
        alert("successfully deleted...!", res);
        refetchData();
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  // const deletHandler = (productId) => {
  //   console.log("🚀 ~ deleteItem ~ id:", productId);
  //   axios({
  //     method: "delete",
  //     url: `http://localhost:9999/product/delete/${productId}`,  // Corrected the URL by appending the productId
  //   })
  //     .then((res) => {
  //       alert("Successfully deleted...!", res);
  //       refetchData();
  //     })
  //     .catch((error) => {
  //       console.error("Error deleting data:", error);
  //     });
  // };

  const update = (data) => {
    console.log("-=-=-=-=>", data);
    toggle();
    setProduct(data);
    setUpdateMode(true);
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
    <img src={data?.img} alt="" style={{ width: "40px",
          height: "40px",}} />
      </div>
    </div>
  );

  return (
    <>
      <div>
        <Button color="danger" onClick={toggle}>
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
                      checked={product.gender === "male"}
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
                value={product.color?.map((color) => {
                  return { value: color, label: color };
                })}
                onChange={(e) => selectHandler(e)}
                components={{ Option: CustomColorOption }}
              />

              <Label for="examplePassword">category</Label>
              <Select
                isMulti
                options={category}
                value={product.category?.map((ele) => {
                  return { value: ele, label: ele };
                })}
                onChange={(e) =>
                  setProduct({
                    ...product,
                    category: e.map((ele) => ele.value),
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
      <div>
        <h1>Product</h1>

        <Table>
          <thead>
            <tr>
              <th>SR.</th>
              <th>Title</th>
              <th>Image</th>
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
                      {e?.color.map((color, index) => {
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
                    <div>{e.color?.map((e) => e).join(" - ")}</div>
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
                              e?.size.includes(size)
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
                  <td>
                    <Button onClick={() => deletHandler(e?._id)}>Delet</Button>
                    <Button onClick={() => update(e)}>Edit...</Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </>
  );
}
