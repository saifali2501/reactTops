// import React from "react";
// import { useLocation } from "react-router-dom";

// export default function ProdactDetails() {
//   const location = useLocation();
//   const { title, images, description, price, brand, discountPercentage } = location?.state || {}
//   console.log("🚀 ~ ProdactDetails ~ location:", location)
//   // const detail = location.state?.detail;
//   // console.log("🚀 ~ ProdactDetails ~ detail:", detail)

//   return (
//     <div>
//       <h1>gjhgj{brand}</h1>
//     </div>
//   );
// }

// import React from "react";
// import { useLocation } from "react-router-dom";

// export default function ProductDetails() {
//   const location = useLocation();
//   console.log(" location:====", location.state.mainCategory);
//   const {thumbnails, title, images, description, price, brand, discountPercentage } =
//     location.state || {};

//   // Check if location state exists and contains required properties
//   if (
//     !title ||
//     !images ||
//     !description ||
//     !price ||
//     !brand ||
//     !discountPercentage
//   ) {
//     return <div>No product details found</div>;
//   }

//   return (
//     <div>
//       <div className="container">
//         <div className="d-flex">
//           <img src={thumbnails} alt="" />
//           {images.map((image, index) => (
//             <img key={index} src={image} alt={`Product ${index + 1}`} />
//           ))}

//           <h1>{brand}</h1>
//           <p>{title}</p>
//           <p>{description}</p>
//           <p>{price}</p>
//           <p>{discountPercentage}</p>
//           {/* Render images */}

//           <h1 style={{ fontWeight: "700" }} className="mx-3">
//             {location?.state?.mainCategory}
//           </h1>
//         </div>
//       </div>
//     </div>
//   );
// }

// import React from "react";
// import { useLocation } from "react-router-dom";

// export default function ProductDetails() {
//   const location = useLocation();
//   console.log(" location:====", location.state.mainCategory);
//   const { thumbnail, title, images, description, price, brand, discountPercentage } =
//     location.state || {};

//   // Check if location state exists and contains required properties
//   if (
//     !title ||
//     !images ||
//     !description ||
//     !price ||
//     !brand ||
//     !discountPercentage
//   ) {
//     return <div>No product details found</div>;
//   }

//   return (
//     <div>
//       <div className="container">
//         <div className=" row">
//           <div className="col-6">
//             <img className="w-50" src={thumbnail} alt="Thumbnail" />
//             <div className=" ">
//           {images.map((image, index) => (
//             <img className="w-25" key={index} src={image} alt={`${title} - Image ${index + 1}`}/>
//           ))}
//             </div>

//           </div>
//           {/* Display thumbnails */}

//           {/* Render images */}

//           {/* Display other product details */}
//           <div className="col-6">
//             <h1>{brand}</h1>
//             <p>{title}</p>
//             <p>{description}</p>
//             <p>{price}</p>
//             <p>{discountPercentage}</p>
//           </div>
//             <h1 style={{ fontWeight: "700" }} className="mx-3">
//               {location?.state?.mainCategory}
//             </h1>
//         </div>
//       </div>
//     </div>
//   );
// }
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Button } from "reactstrap";
import { fetchCart } from "../../../../../Redux/feature/Product/Cart";

export default function ProductDetails() {
  const [Detail, setDetail] = useState({});
  const paramsData = useParams();
  // console.log("🚀 ~ ProductDetails ~ paramsData:", paramsData)S
  const [selectedImage, setSelectedImage] = useState(null); // Initialize selectedImage as null
  const data = useSelector((state) => state.authSlice.token);
  const dispatch = useDispatch();

  const CartHandler = (id) => {
    axios({
      method: "post",
      url: `http://localhost:9999/cart/create/${id}`,
      headers: {
        Authorization: `Break ${data}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        // console.log("🚀 ~ .then ~ res:========>", res);
        dispatch(fetchCart());
      })
      .catch((err) => {
        alert("Failed to add to cart");
      });
  };

  useEffect(() => {
    axios({
      method: "get",
      url: `http://localhost:9999/product/getProductById/${paramsData?.id}`,
    })
      .then((res) => {
        setDetail(res?.data?.data);
        // Set selected image initially
        if (res?.data?.data?.images?.length > 0) {
          setSelectedImage(res?.data?.data?.images[0]);
        }
      })
      .catch((err) => {
        alert("Failed to load product details");
      });
  }, [paramsData.id]);

  // if (!Detail || Object.keys(Detail).length === 0) {
  //   return <div>Loading...</div>;
  // }

  return (
    <section>
      <div className="container py-5">
        <div className="main_product d-flex justify-content-center gap-2">
          <div
            style={{ flex: "2", marginLeft: "30px" }}
            className="image_review"
          >
            <div
              style={{
                height: "auto",
                width: "80%",
                display: "flex",
                gap: "30px",
                justifyContent: "center",
              }}
              className="imge1"
            >
              <div style={{ display: "flex" }} className="">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    flex: "1",
                  }}
                  className="gap-1"
                >
                  {Detail?.images?.map((image, index) => (
                    <img
                      key={index}
                      style={{
                        height: "100px",
                        objectFit: "cover",
                      }}
                      className="border cursor-pointer"
                      src={image}
                      alt={`${Detail.title} - Image ${index + 1}`}
                      onClick={() => setSelectedImage(image)}
                    />
                  ))}
                </div>
              </div>
              <div
                style={{ flex: "1", border: "2px solid black" }}
                className="img"
              >
                {selectedImage && (
                  <img
                    style={{
                      height: "auto",
                      width: "88%",
                      padding: "20px",
                      objectFit: "cover",
                      marginLeft: "41px",
                    }}
                    className=""
                    src={selectedImage}
                    alt={`${Detail.title} - Selected Image`}
                  />
                )}
              </div>
            </div>
          </div>

          <div style={{ flex: "1" }} className="text_review">
            <h1
              style={{
                fontWeight: "700",
                fontSize: "45px",
                paddingBottom: "20px",
              }}
            >
              {Detail?.brand}
            </h1>
            <p style={{ fontSize: "27px", color:"gray"}}>
              {Detail?.title}
            </p>
            <p style={{ fontSize: "22px", color:"gray" }}>
              {Detail?.description}
            </p>
            <p style={{ fontSize: "22px",  color:"gray" }}>
              ${Detail?.price}
            </p>
            <p style={{ fontSize: "22px", color:"gray" }}>
              {Detail?.discountPercentage}%
            </p>
            <Button style={{backgroundColor:"#5b0ffd",width:"180px",height:"50px"}} onClick={() => CartHandler(paramsData.id)}>Add Cart</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
