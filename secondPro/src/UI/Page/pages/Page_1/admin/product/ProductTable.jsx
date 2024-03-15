import axios from "axios";
import React, { useState } from "react";
import { Button, Table } from "reactstrap";

export default function ProductTable({
  product,
  setProduct,
  toggle,
  setUpdateMode,
  setDetailModal,
  setSelectedProductDetails,
  allProduct,
  refetchData,
}) {
  // let [allProduct, setAllProduct] = useState([]);

  const deletHandler = (productId) => {
    console.log("🚀 ~ deleteItem ~ id:", productId);
    axios({
      method: "delete",
      url: `http://localhost:9999/product/delete/${productId}`, // Corrected the URL by appending the productId
    })
      .then((res) => {
        alert("Successfully deleted...!", res);
        refetchData();
      })
      .catch((error) => {
        console.error("Error deleting data:", error);
      });
  };

  const update = (data) => {
    console.log("-=-=-=-=>", data);
    toggle();
    setProduct(data);
    setUpdateMode(true);
  };

  const PreviewHandler = (id) => {
    axios({
      method: "get",
      url: `http://localhost:9999/product/getProductById/${id}`,
      data: product,
    })
      ?.then((res) => {
        // console.log(res?.data?.data)
        // setProductDetails(res?.data?.data);
        // setDetailModal(true);
        setSelectedProductDetails(res?.data?.data);
        setDetailModal(true);
      })
      ?.catch((err) => {
        alert(err);
      });

    setDetailModal(true);
  };

  return ( 
    <div>
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
                  <td>{e?.discountedPrice}</td>
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
                    <Button onClick={() => PreviewHandler(e?._id)}>
                      Preview
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
