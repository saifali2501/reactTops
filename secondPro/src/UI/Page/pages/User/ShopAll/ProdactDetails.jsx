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
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { Button } from "reactstrap";

export default function ProductDetails() {
  // const [cart,setCart] = useState(null)
  const location = useLocation();
  console.log("my===== location:", location);
  console.log(" location:====", location.state);
  const {
    thumbnail,
    title,
    images,
    description,
    price,
    brand,
    discountPercentage,
  } = location.state || {};

  // State to hold the currently selected image
  const [selectedImage, setSelectedImage] = useState(
    thumbnail || (images.length > 0 ? images[0] : null)
  );

  const data = useSelector((state)=>state.authSlice);
  console.log("hello my data====>", data)
  // Check if location state exists and contains required properties
  if (
    !title ||
    !images ||
    !description ||
    !price ||
    !brand ||
    !discountPercentage
  ) {
    return <div>No product details found</div>;
  }

  const CartHandler = (id) => {
    console.log("========>", id);
    axios({
      method: "post",
      url: `http://localhost:9999/cart/create/${id}`,
      headers: {
        Authorization: "token",
        "Content-Type": "application/json",
      },
    })
      ?.then((res) => {
        console.log(res?.data);
        setDetail(res?.data?.data);
      })
      ?.catch((err) => {
        console.log(err);
        // toast.error("Failed to load product details")
        alert("Faild");
      });
  };

  return (
    <>
      <section className="">
        <div className="container py-5">
          <div className="main_product d-flex  justify-content-center gap-2">
            <div
              style={{ flex: "2", marginLeft: "30px" }}
              className="image_review "
            >
              <div
                style={{
                  height: "auto",
                  width: "80%",
                  display: "flex",
                  gap: "30px",
                  justifyContent: "center",
                }}
                className="imge1 "
              >
                {/* Render images as thumbnails */}
                <div style={{ display: "flex" }} className="">
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      flex: "1",
                    }}
                    className="owl-carousel owl-theme gap-1"
                  >
                    {images.map((image, index) => (
                      <img
                        key={index}
                        style={{
                          height: "100px",
                          width: "100%",
                          objectFit: "cover",
                        }}
                        className="border cursor-pointer"
                        src={image}
                        alt={`${title} - Image ${index + 1}`}
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
                      alt={`${title} - Selected Image`}
                    />
                  )}
                </div>
              </div>

              {/* <div
                style={{ height: "auto", width: "80%", display: "flex",gap:"30px",justifyContent:"center" }}
                className="imge1 "
              >
               
                <div
                  style={{  display: "flex" }}
                  className=" "
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      flex: "1",
                    }}
                    className="owl-carousel owl-theme  gap-1"
                  >
                    {images.map((image, index) => (
                      <img
                        key={index}
                        style={{ height: "100px", width: "100%" }}
                        className="border cursor-pointer"
                        src={image}
                        alt={`${title} - Image ${index + 1}`}
                        onClick={() => setSelectedImage(image)}
                      />
                    ))}
                  </div>
                </div>
                <div style={{ flex: "1" }} className="img">
            
                  {selectedImage && (
                    <img
                      style={{ height: "500px", width: "100%" }}
                      className=""
                      src={selectedImage}
                      alt={`${title} - Selected Image`}
                    />
                  )}
                </div>
              </div> */}
            </div>

            {/* Display other product details */}
            <div style={{ flex: "1" }} className="text_review">
              <h1>{brand}</h1>
              <p>{title}</p>
              <p>{description}</p>
              <p>{price}</p>
              <p>{discountPercentage}</p>
              <Button onClick={() => CartHandler(location?.state?._id)}>
                Add Cart
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
