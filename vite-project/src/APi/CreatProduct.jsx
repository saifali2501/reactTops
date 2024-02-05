import React, { useState } from "react";
import Select from 'react-select'

import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

const Product = {
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
let category = [
  { value: "casual", label: "Casual" },
  { value: "highlength", label: "Highlength" },
];

let data = [
  { value: "green", label: "Green" },
  { value: "white", label: "White" },
  { value: "blue", label: "Blue" },
];
let sizeOptions = ["45", "44", "43", "42"];
let gender = ["male", "Female", "kids"];
export default function CreatProduct() {
  let [myproduct,setMyproduct] = useState(Product)
  let [allmyproduct,setAllMyproduct] = useState([])
  let [select, setSelect] = useState([]);

  const addData = (e) =>{

    // setAllMyproduct([...allmyproduct,myproduct])
    // console.log("-------->",allmyproduct);
    console.log("---------->",myproduct);
    // console.log("=======>",e);
    // axios({
    //   method: "post",
    //   url: "http://localhost:9999/product/create",
    //   data: myproduct,
    // })
    //   .then((res) => {
    //     console.log(res.data);
    //     toast.success("data add");
    //   })
    //   .catch((error) => {
    //     alert(error.massage)
    //   });
    };
    // console.log("-------->",addData);
  

  const selectHandler = (e,type) =>{
    if (type === "color") {
      let color = e.map((e) => e?.value);
      setMyproduct({ ...myproduct, color });
    } else if (type === "data") {
      let category = e.map((e) => e?.value);
      setMyproduct({ ...myproduct, category });
    }
  }
  const checkboxHandler = (sizeValue) => {
    if (myproduct.size.includes(sizeValue)) {
      setMyproduct({ ...myproduct, size: myproduct.size.filter((size) => size !== sizeValue) });
    } else {
      setMyproduct({ ...myproduct, size: [...myproduct.size, sizeValue] });
    }
  };

  

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  return (
    <div>
      <Button color="danger" onClick={toggle}>
        Click Me
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>My Product</ModalHeader>
        <ModalBody>
          <Form >
            <FormGroup>
              <Label for="exampleEmail">Title</Label>
              <Input
                id="exampleEmail"
                name="title"
                placeholder="Title"
                type="text"
                onChange={(e)=>setMyproduct({...myproduct, title:e.target.value})}
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail">description</Label>
              <Input
                id="exampleEmail"
                name="description"
                placeholder="description"
                type="text"
                onChange={(e)=>setMyproduct({...myproduct, description:e.target.value})}
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail">Brand</Label>
              <Input
                id="exampleEmail"
                name="Brand"
                placeholder="Brand"
                type="text"
                onChange={(e)=>setMyproduct({...myproduct, brand:e.target.value})}
              />
            </FormGroup>

            <FormGroup>
              <Label for="exampleEmail">Thumbnail</Label>
              <Input
                id="exampleEmail"
                name="thumbnail"
                placeholder="thumbnail"
                type="text"
                onChange={(e)=>setMyproduct({...myproduct, thumbnail:e.target.value})}
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail">Price</Label>
              <Input
                id="exampleEmail"
                name="price"
                placeholder="price"
                type="text"
                onChange={(e)=>setMyproduct({...myproduct, price:e.target.value})}
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail">DiscountPrecentage</Label>
              <Input
                id="exampleEmail"
                name="DiscountPrecentage"
                placeholder="DiscountPrecentage"
                type="text"
                onChange={(e)=>setMyproduct({...myproduct, discountPercentage:e.target.value})}
              />
            </FormGroup>
            <FormGroup>
            <FormGroup>
              <Label for="exampleEmail">AvailableStock</Label>
              <Input
                id="exampleEmail"
                name="availableStock"
                placeholder="availableStock"
                type="text"
                onChange={(e)=>setMyproduct({...myproduct, availableStock:e.target.value})}
              />
            </FormGroup>
              <Label for="examplePassword">Select</Label>
              <Select isMulti options={data} onChange={(e)=>selectHandler(e,"data")}/>

            </FormGroup>
            <FormGroup>
          <Label>category</Label>
          <Select
            isMulti
            options={category}
            onChange={(e) => selectHandler(e, "category")}
          />
        </FormGroup>

        <Label>Size</Label>
        <div className="d-flex">
        {sizeOptions.map((size, index) => (
          <FormGroup key={index} className="d-flex">
            <Label>{size}</Label>
            <Input
              type="checkbox"
              onChange={() => checkboxHandler(size)}
              checked={myproduct.size?.includes(size)}
            />
          </FormGroup>
        ))}
      </div>
            <FormGroup>
              <Label for="exampleFile">File</Label>
              <Input id="exampleFile" name="file" type="file" />
            </FormGroup>
            <FormGroup tag="fieldset">
              <legend>Radio Buttons</legend>
              <FormGroup check>
              <div className="d-flex gap-3">
          {gender?.map((ee, i) => {
            return (
              <FormGroup className="d-flex gap-4" key={i}>
                <Label for="exampleEmail">{ee}</Label>
                <Input
                  type="radio"
                  name="name"
                  onChange={() =>setMyproduct({ ...Product, gender: ee })}
                />
              </FormGroup>
            );
          })}
        </div>
              </FormGroup>
           
              
            </FormGroup>
            <FormGroup check>
              <Input type="checkbox" /> <Label check>Check me out</Label>
            </FormGroup>
            <Button className="w-100" onClick={(e)=>addData(e)}>Submit</Button>
          </Form>
        </ModalBody>
        <ModalFooter>
         
        </ModalFooter>
      </Modal>
    </div>
  );
}

// obj= {
//   "discountPercentage": "Key Holder",
//   "description": "Attractive DesignMetallic materialFour key hooksReliable & DurablePremium Quality",
//   "brand": "Oppo",
//   "gender": "male",
//   "price": 30,
//   "images": [
//     "https://i.dummyjson.com/data/products/30/1.jpg",
//     "https://i.dummyjson.com/data/products/30/2.jpg",
//     "https://i.dummyjson.com/data/products/30/3.jpg",
//     "https://i.dummyjson.com/data/products/30/thumbnail.jpg"
//   ],
//   "thumbnail": "url",
//   "discountPercentage": 2.92,
//   "category": [
//     "smartphones",
//     "3g",
//     "4g"
//   ],
//   "color": [
//     "red",
//     "black",
//     "white"
//   ],
//   "size": [
//     "44",
//     "45",
//     "42",
//     "43"
//   ]
// }
