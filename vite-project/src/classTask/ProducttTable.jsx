import { Button, Table } from "reactstrap";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
let sizeOptions = ["41", "42", "43", "44", "45"];
export default function ProducttTable({
  refresh,
  refresHandler,
  setProduct,
  toggle,
  UpdateHandler
}) {
  let [data, setData] = useState(null);
  useEffect(() => {
    
    axios({
      method: "get",
      url: "http://localhost:9999/product/getAll",
    })
      .then((res) => setData(res.data.data))
      .catch((err) => console.log(err.message));
  }, [refresh]);

  const updateHandler = (e) => {
    toggle();
    setProduct(e);
    UpdateHandler()
  };

  
  const deletHandler = (e) => {
    // if (confirm("are you sure") === true ) {
      axios({
        method: "delete",
        url: `http://localhost:9999/product/delete/${e?._id}`,
        data: data,
      })
        .then((res) => {
          console.log(res);
          toast.success("delet succesfully");
          refresHandler();
        })
        .catch((err) => {
          toast.error("somthing wrong");
        });
    // // }
    // else{
    //   toast.warning("you are change your ducison")
    // }
    
  };
  
  return (
    <Table>
      <thead>
        <tr>
          <th>SR.</th>
          <th>IMAGE</th>
          <th>NAME</th>
          <th>PRICE</th>
          <th>COLOR</th>
          <th>SIZE</th>
          <th>Update</th>
          <th>Delet</th>
        </tr>
      </thead>
      <tbody>
        {data?.map?.((e, i) => {
          return (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>
                <img
                  style={{ height: "30px" }}
                  src={e?.thumbnail}
                  alt="ajkkj"
                />
              </td>
              <td>{e?.title}</td>
              <td>{e?.price}</td>
              <td>
                <div className="d-flex gap-2">
                  {e?.color.map((color, i) => {
                    return (
                      <div
                        style={{
                          height: "10px",
                          width: "10px",
                          border: "1px solid black",
                          borderRadius: "50%",
                          backgroundColor: color,
                        }}
                        key={i}
                      ></div>
                    );
                  })}
                </div>
              </td>
              <td>
                <div className="d-flex gap-2">
                  {sizeOptions.map((ee, i) => {
                    return (
                      <div
                        key={i}
                        style={
                          e.size.includes(ee)
                            ? { backgroundColor: "green", color: "white" }
                            : { backgroundColor: "gray", color: "white" }
                        }
                      >
                        {ee}
                      </div>
                    ); /* first  Task*/
                  })}
                </div>
              </td>
              <td>
                <Button color="warning"  onClick={() => updateHandler(e)}>Update</Button>
              </td>
              <td>
                <Button color="danger" onClick={() => deletHandler(e)}>Delet</Button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}