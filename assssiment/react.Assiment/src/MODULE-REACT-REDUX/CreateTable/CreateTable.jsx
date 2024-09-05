import { PencilRuler, Search, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import Select from "react-select";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Col,
  Input,
  Table,
} from "reactstrap";

export default function CreateTable(args) {
  const [user, setuser] = useState({
    product: "",
    price: "",
    category: "",
  });

  const [alldata, setAlldata] = useState([]);
  const [updateval, setupdateval] = useState(null);
  const [search, setSearch] = useState("");
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const options = [
    { value: "Fashion", label: "Fashion" },
    { value: "Traditional", label: "Traditional" },
    { value: "Casual", label: "Casual" },
  ];
  const getdata = (e) => {
    e.preventDefault();
    if (
      user.product.length > 0 &&
      user.price.length > 0 &&
      user.category.length > 0
    ) {
      setAlldata([...alldata, user]);
      localStorage.setItem("shortlist", JSON.stringify([...alldata, user]));
      setuser({
        product: "",
        price: "",
        category: "",
      });
      toggle();
    } else {
      alert("Enter Data");
    }
  };

  const deletefun = (index) => {
    let filterdata = alldata.filter((e, i) => i !== index);
    setAlldata(filterdata);
    localStorage.setItem("shortlist", JSON.stringify(filterdata));
  };

  const editfun = (data, item) => {
    setuser(data);

    setupdateval(item);
    toggle();
  };
  const updatefun = () => {
    if (updateval || updateval == 0) {
      alldata.splice(updateval, 1, user);
      setAlldata([...alldata]);
      localStorage.setItem("shortlist", JSON.stringify([...alldata]));
      setuser({
        product: "",
        price: "",
        category: "",
      });
      setupdateval(null);
      toggle();
    }
  };
  useEffect(() => {
    let normaldata = JSON.parse(localStorage.getItem("shortlist") || "[]");
    setAlldata(normaldata);
  }, []);

  const searcbutton = () => {
    let data = JSON.parse(localStorage.getItem("shortlist") || "[]");

    let fillterdata = data.filter((e, i) =>
      e.product.toLowerCase().includes(search.toLowerCase())
    );
    setAlldata(fillterdata);
  };
  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("shortlist") || "[]");
    if (search.length === 0) {
      setAlldata(data);
    }
  }, [search]);
  return (
    <div>
      <h1 className="mt-5" style={{ fontFamily: "ui-search" }}>
        Search Product:shirt
      </h1>
      <div className="d-flex justify-content-between align-items-center mx-5 mt-5">
        <div>
          <FormGroup className="d-flex border rounded pe-2">
            <Input type="text" onChange={(e) => setSearch(e?.target?.value)} />
            <Button className="bg-white border-0" onClick={searcbutton}>
              <Search className="mt-1 me-1" color="black" size={30} />
            </Button>
          </FormGroup>
        </div>
        <div className="d-flex gap-2">
          {/* Login and Register Buttons */}
          {/* <div className="d-flex justify-content-center align-items-lg-center gap-2">
            <Button
              style={{ width: "20px" }}
              color="secondary"
              className="py-2 px-3"
            >
              Login
            </Button>
            <Button color="info" className="py-2 px-3">
              Register
            </Button>
          </div> */}

          {/* Create Product Button */}
          <Button color="primary" onClick={toggle}>
            + Create Product
          </Button>
          <Modal isOpen={modal} toggle={toggle} {...args}>
            <ModalHeader toggle={toggle}>Create Product</ModalHeader>
            <ModalBody>
              <Form onSubmit={getdata}>
                <FormGroup row>
                  <Label for="exampleproductname" sm={2}>
                    Name
                  </Label>
                  <Col sm={10}>
                    <Input
                      id="exampleusername"
                      name="productname"
                      placeholder="productname "
                      type="text"
                      value={user.product}
                      onChange={(e) =>
                        setuser({ ...user, product: e?.target?.value })
                      }
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="examplePrice" sm={2}>
                    Price
                  </Label>
                  <Col sm={10}>
                    <Input
                      id="examplePrice"
                      name="Price"
                      placeholder="Price "
                      type="number"
                      value={user.price}
                      onChange={(e) =>
                        setuser({ ...user, price: e?.target?.value })
                      }
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="examplePrice" sm={2}>
                    Categery
                  </Label>
                  <Col sm={10}>
                    <Select
                      options={options}
                      onChange={(e) => setuser({ ...user, category: e?.value })}
                      value={options.find((opt) => opt.value === user.category)}
                    />
                  </Col>
                </FormGroup>

                <FormGroup check row>
                  <Col
                    sm={{
                      offset: 2,
                      size: 10,
                    }}
                  >
                    {!(updateval || updateval == 0) ? (
                      <Button>Submit</Button>
                    ) : (
                      <Button onClick={updatefun}>Update</Button>
                    )}
                  </Col>
                </FormGroup>
              </Form>
              <p>{user.product}</p>
              <p>{user.price}</p>
              <p>{user.category}</p>
            </ModalBody>
          </Modal>
        </div>
      </div>

      <div className="mx-5 border border-info rounded p-1">
        <Table striped>
          <thead>
            <tr>
              <th>Sr.no</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Category</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {alldata.map((e, i) => {
              return (
                <tr key={i}>
                  <th scope="row">{i + 1}</th>
                  <td>{e.product}</td>
                  <td>{e.price}</td>
                  <td>{e.category}</td>
                  <td className="d-flex gap-2">
                    <Button
                      className="bg-info border-0 "
                      onClick={() => editfun(e, i)}
                    >
                      <PencilRuler color="white" /> Edit
                    </Button>
                    <Button
                      className="bg-danger border-0"
                      onClick={() => deletefun(i)}
                    >
                      <X color="white" /> Delete
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
