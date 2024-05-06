import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, FormGroup, Input, Table } from "reactstrap";
// import PaiginetCom from "../../../../../Component/paiginet/PaiginetCom";
import ReactPaginate from "react-paginate";
import { Search } from "lucide-react";
const selectOption = [10, 15, 20, 25, 30];

export default function ProductTable({
  product,
  setProduct,
  setAllProduct,
  toggle,
  setUpdateMode,
  setDetailModal,
  setSelectedProductDetails,
  allProduct,
  refetchData,
  refetch,
}) {
  // let [allProduct, setAllProduct] = useState([]);

  let [pagination, setpagination] = useState({
    totalproduct: 0,

    limit: 10,
    page: 1,
  });
  let [search, setSearch] = useState("");
  let [selectedLimit, setSelectedLimit] = useState(10);

  const handleLimitChange = (e) => {
    const newLimit = parseInt(e?.target?.value);
    setSelectedLimit(newLimit);
    setpagination({ ...pagination, limit: newLimit });
  };
  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:9999/product/getAllPaginate",
      params: {
        page: pagination.page,
        limit: pagination.limit,
        search: search,
      },
    })
      .then((res) => {
        setAllProduct(res.data.data);
        setpagination({ ...pagination, totalproduct: res.data.count });
      })
      .catch((err) => console.log(err.message));
  }, [refetch]);
  const deletHandler = (productId) => {
    // console.log("🚀 ~ deleteItem ~ id:", productId);
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
    // console.log("-=-=-=-=>", data);
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
  const handlePageClick = (e) => {
    // console.log(" e:", e);

    setpagination({ ...pagination, page: e?.selected + 1 });
    refetchData();
  };

  const searchHandler = (e) => {
    // console.log("🚀 ~ searchHandler ~ e:", e);

    // console.log("hello======>",e);
    setSearch(e?.target?.value);
    // refetchData()
  };
  useEffect(() => {
    const searchDelay = setTimeout(() => {
      refetchData();
    }, 1000);
    return () => clearTimeout(searchDelay);
  }, [search]);
  return (
    <div style={{ margin: "10px" }}>
      <div style={{ border: "2px solid black", padding: "20px" }}>
        <h1 style={{ textAlign: "center" }}>Product</h1>
        <div className="d-flex justify-content-between">
          <FormGroup className="w-25" style={{ flex: "0.20" }}>
            <Input
              type="select"
              value={selectedLimit}
              onChange={handleLimitChange}
              style={{ boxShadow: "none", border: "1px solid #dee2e6" }}
            >
              {selectOption?.map((e, i) => (
                <option key={i} value={e}>
                  {e}
                </option>
              ))}
            </Input>
          </FormGroup>

          <FormGroup className="w-25" style={{ flex: "0.20" }}>
            <div className="inpute_search">
              <Input
                type="text"
                placeholder="search here"
                style={{
                  boxShadow: "none",
                  border: "1px solid #dee2e6",
                  paddingRight: "30px",
                }}
                onChange={(e) => searchHandler(e)}
              ></Input>{" "}
              <Search role="button" className="search" />
            </div>
          </FormGroup>
        </div>
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
                  <td>{i + 1 + (pagination.page - 1) * pagination.limit}</td>
                  <td>
                    <img
                      src={e.thumbnail}
                      style={{ width: "100px", height: "50px" }}
                      alt=""
                    />
                  </td>
                  <td>{e?.brand}</td>
                  <td>{e?.price}</td>
                  <td>{e?.discountPercentage}</td>
                  <td>{e?.discountedPrice}</td>
                  <td>
                    <div style={{ display: "flex", gap: "10px" }}>
                      {e?.color?.map((color, index) => {
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
                              e?.size?.includes(size)
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
                  <td className="d-flex gap-2 ">
                    <Button color="danger" onClick={() => deletHandler(e?._id)}>Delet</Button>
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
        <ReactPaginate
          activeLinkClassName="text-black"
          className="d-flex border-1 gap-2 align-items-center  justify-content-evenly text-white bg-info p-1 fs-5 "
          breakLabel="..."
          activeClassName="active_class text-black"
          nextLabel="next >"
          onPageChange={handlePageClick}
          // pageRangeDisplayed={5}
          // activeLinkClassName=""
          pageCount={pagination?.totalproduct / pagination?.limit}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
        />
      </div>
    </div>
  );
}
