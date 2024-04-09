import axios from "axios";
import React, { useEffect, useState } from "react";
import { Input } from "reactstrap";
import FilterCom from "./FilterCom";
import CardCom from "./CardCom";

export default function Computer() {
  let [data, setData] = useState([]);
  let [filter, setFilter] = useState({
    brand: "",
    model: "",
    price: {},
    description: "",
    category: [],
    discountPercentage: {},
  });
  useEffect(() => {
    console.log("============>");
    axios({
      method: "get",
      url: "http://localhost:9999/product/getAll",
      params: filter
     
      
    }).then((res) => {
      console.log("======>", res.data.data);
      setData(res.data.data);
    });
  }, [filter]);


  return (
    <div>
      <h1>computer</h1>
     <FilterCom setFilter={setFilter} filter={filter}/>
     <div className="d-flex gap-2 flex-wrap">
     {
        data.map((e,i)=>{
            return <CardCom product= {e} key={e._id}/>
        })
     }
     </div>
   
    </div>
  );
}
