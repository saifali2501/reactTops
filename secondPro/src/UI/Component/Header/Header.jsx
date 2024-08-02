// import React, { useEffect, useState } from "react";
// import "./Header.css";
// import {
//   ChevronDown,
//   Heart,
//   Search,
//   ShoppingBag,
//   LogIn,
//   ShoppingCart,
// } from "react-feather";
// import { AlignJustify, CircleUserRound } from "lucide-react";
// import { NavLink, useNavigate } from "react-router-dom";
// import { Input } from "reactstrap";
// import { useDispatch, useSelector } from "react-redux";
// import LoginForm from "../login/LoginForm";
// import { fetchCart } from "../../../Redux/feature/Product/Cart";
// import Cart from "../offCanvas/Cart";

// export default function Header() {
//   const [loginModal, setLoginModal] = useState(false);
//   const toggleLoginModal = () => setLoginModal(!loginModal);

//   const [isOpen, setIsOpen] = useState(false);
//   const [showShoper, setShowShoper] = useState(false);

//   const toggleShoper = () => setShowShoper(!showShoper);
//   const toggleOffcanvas = () => setIsOpen(!isOpen);

//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const data = useSelector((state) => state.authSlice);
//   const { error, cart, pending, refresh } = useSelector(
//     (store) => store.cartSlice
//   );

//   useEffect(() => {
//     dispatch(fetchCart());
//   }, [refresh]);

//   const AllShoper = [
//     { label: "Shop", mainCategory: "" },
//     { label: "Laptop", mainCategory: "Laptop" },
//     { label: "Tablets", mainCategory: "Tablets" },
//     { label: "Mobiles", mainCategory: "Mobiles" },
//     { label: "LED TV", mainCategory: "LED TV" },
//   ];

//   return (
//     <>
//       <LoginForm modal={loginModal} toggle={toggleLoginModal} />
//       <div>
//         <section className="Topheader">
//           <div className="container py-3">
//             <div className="row">
//               <div className="my_logo col-12 col-md-4 d-flex justify-content-md-start justify-content-center">
//                 <ul>
//                   <li>
//                     <span style={{ color: "white", marginTop: "4px" }}>
//                       Free Shipping for orders over $50
//                     </span>
//                   </li>
//                 </ul>
//               </div>
//               <div className="top_nav col-8">
//                 <ul className="ppp list-inline d-flex justify-content-end gap-3">
//                   {data?.user?.userType !== "admin" ? (
//                     <>
//                       <li className="list-inline-item pe-4">
//                         <NavLink to={"/home"}>Home</NavLink>
//                       </li>
//                       <li className="list-inline-item pe-4">
//                         <NavLink to={"/about"}>About</NavLink>
//                       </li>
//                       <li className="list-inline-item pe-4">
//                         <NavLink to={"/contact"}>Contact</NavLink>
//                       </li>
//                       <li className="list-inline-item pe-4">
//                         <NavLink to={"/profile"}>Profile</NavLink>
//                       </li>
//                     </>
//                   ) : (
//                     <>
//                       <li className="list-inline-item pe-4">
//                         <NavLink to={"/dashboard"}>Dashboard</NavLink>
//                       </li>
//                       <li className="list-inline-item pe-4">
//                         <NavLink to={"product"}>Product</NavLink>
//                       </li>
//                       <li className="list-inline-item pe-4">
//                         <NavLink to={"/help-center"}>Help Center</NavLink>
//                       </li>
//                       <li className="list-inline-item pe-4">
//                         <NavLink to={"/contact"}>9724308606</NavLink>
//                       </li>
//                     </>
//                   )}
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </section>

//         <header>
//           <div className="container container_header py-3">
//             <div className="my_nav row d-flex justify-content-center align-content-center">
//               <div className="col-8">
//                 <div className="main-nav d-flex align-items-center">
//                   <div className="log">
//                     <h1>
//                       <NavLink to="/" className="tech">
//                         TechShed
//                       </NavLink>
//                     </h1>
//                   </div>
//                 </div>
//                 <div className="search-container">
//                   <input
//                     type="text"
//                     className="search-input"
//                     placeholder="Search..."
//                   />
//                   <button className="search-button" type="button">
//                     <Search className="search-icon" />
//                   </button>
//                 </div>
//               </div>
//               <div className="col-4 d-flex justify-content-end align-content-center">
//                 <div className="my_icon d-flex justify-content-center align-items-center gap-3">
//                   {data?.token ? (
//                     <CircleUserRound
//                       role="button"
//                       onClick={() => navigate("/profile")}
//                     />
//                   ) : (
//                     <h5
//                       role="button"
//                       onClick={toggleLoginModal}
//                       className="pt-2"
//                     >
//                       Login
//                     </h5>
//                   )}
//                   <Heart className="me-4" />
//                 </div>
//                 <div className="icon-2 gap-1 d-flex justify-content-center align-items-center">
//                   {data?.token && data?.user?.userType !== "admin" && (
//                     <>
//                       <ShoppingCart
//                         role="button"
//                         onClick={toggleOffcanvas}
//                         className=""
//                       />
//                       <p
//                         role="button"
//                         onClick={toggleOffcanvas}
//                         style={{
//                           backgroundColor: "black",
//                           color: "white",
//                           marginTop: "17px",
//                           height: "22px",
//                           width: "22px",
//                           display: "flex",
//                           justifyContent: "center",
//                           alignItems: "center",
//                           borderRadius: "50%",
//                         }}
//                       >
//                         {cart?.length}
//                       </p>
//                     </>
//                   )}
//                 </div>
//                 <div className="btn">
//                   <span role="button" onClick={toggleShoper}>
//                     <AlignJustify size={40} strokeWidth={2.5} />
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <section className={`lower_Header ${showShoper ? "show" : ""}`}>
//             <button className="close-btn" onClick={toggleShoper}>
//               Close
//             </button>
//             <div className="container py-3">
//               <div className="row">
//                 <div className="col-12">
//                 {/* <div className="sml_my_icon d-flex justify-content-center align-items-center gap-3">
//                   {data?.token ? (
//                     <CircleUserRound
//                       role="button"
//                       onClick={() => navigate("/profile")}
//                     />
//                   ) : (
//                     <h5
//                       role="button"
//                       onClick={toggleLoginModal}

//                       className="pt-2"
//                     >
//                       Login
//                     </h5>
//                   )}
//                   <Heart className="me-4" />
//                 </div>
//                   <div className="sml_nav">
//                   <ul  className="list-inline d-flex flex-column justify-content-end gap-3">
//                   {data?.user?.userType !== "admin" ? (
//                     <>
//                       <li className="list-inline-item pe-4">
//                         <NavLink to={"/home"}>Home</NavLink>
//                       </li>
//                       <li className="list-inline-item pe-4">
//                         <NavLink to={"/about"}>About</NavLink>
//                       </li>
//                       <li className="list-inline-item pe-4">
//                         <NavLink to={"/contact"}>Contact</NavLink>
//                       </li>
//                       <li className="list-inline-item pe-4">
//                         <NavLink to={"/profile"}>Profile</NavLink>
//                       </li>
//                     </>
//                   ) : (
//                     <>
//                       <li className="list-inline-item pe-4">
//                         <NavLink to={"/dashboard"}>Dashboard</NavLink>
//                       </li>
//                       <li className="list-inline-item pe-4">
//                         <NavLink to={"product"}>Product</NavLink>
//                       </li>
//                       <li className="list-inline-item pe-4">
//                         <NavLink to={"/help-center"}>Help Center</NavLink>
//                       </li>
//                       <li className="list-inline-item pe-4">
//                         <NavLink to={"/contact"}>9724308606</NavLink>
//                       </li>
//                     </>
//                   )}
//                 </ul>
//                   </div> */}
//                   <ul className="d-flex nav-2 gap-4 align-content-center ">
//                     {AllShoper?.map((e, i) => {
//                       console.log("🚀 ~ {AllShoper.map ~ e:=======>", e)
//                       return <li role="button">{e?.label}</li>;
//                     })}
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </section>
//         </header>
//       </div>
//       <Cart isOpen={isOpen} toggleOffcanvas={toggleOffcanvas} />
//     </>
//   );
// }

// import React, { useEffect, useState } from "react";
// import "./Header.css";
// import {
//   ChevronDown,
//   Heart,
//   Search,
//   ShoppingBag,
//   LogIn,
//   ShoppingCart,
// } from "react-feather";
// import { AlignJustify, CircleUserRound } from "lucide-react";
// import { NavLink, useNavigate } from "react-router-dom";
// import { Input } from "reactstrap";
// import { useDispatch, useSelector } from "react-redux";
// import LoginForm from "../login/LoginForm";
// import { fetchCart } from "../../../Redux/feature/Product/Cart";
// import Cart from "../offCanvas/Cart";

// export default function Header() {
//   const [loginModal, setLoginModal] = useState(false);
//   const toggleLoginModal = () => setLoginModal(!loginModal);

//   const [isOpen, setIsOpen] = useState(false);
//   const [showShoper, setShowShoper] = useState(false);
//   const [selectedCategory, setSelectedCategory] = useState("");

//   const toggleShoper = () => setShowShoper(!showShoper);
//   const toggleOffcanvas = () => setIsOpen(!isOpen);

//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const data = useSelector((state) => state.authSlice);
//   const { error, cart, pending, refresh } = useSelector(
//     (store) => store.cartSlice
//   );

//   useEffect(() => {
//     dispatch(fetchCart());
//   }, [refresh]);

//   const AllShoper = [
//     { label: "Shop", mainCategory: "" },
//     { label: "Laptop", mainCategory: "Laptop" },
//     { label: "Tablets", mainCategory: "Tablets" },
//     { label: "Mobiles", mainCategory: "Mobiles" },
//     { label: "LED TV", mainCategory: "LED TV" },
//   ];

//   return (
//     <>
//       <LoginForm modal={loginModal} toggle={toggleLoginModal} />
//       <div>
//         <section className="Topheader">
//           <div className="container py-3">
//             <div className="row">
//               <div className="my_logo col-12 col-md-4 d-flex justify-content-md-start justify-content-center">
//                 <ul>
//                   <li>
//                     <span style={{ color: "white", marginTop: "4px" }}>
//                       Free Shipping for orders over $50
//                     </span>
//                   </li>
//                 </ul>
//               </div>
//               <div className="top_nav col-8">
//                 <ul className="ppp list-inline d-flex justify-content-end gap-3">
//                   {data?.user?.userType !== "admin" ? (
//                     <>
//                       <li className="list-inline-item pe-4">
//                         <NavLink to={"/home"}>Home</NavLink>
//                       </li>
//                       <li className="list-inline-item pe-4">
//                         <NavLink to={"/about"}>About</NavLink>
//                       </li>
//                       <li className="list-inline-item pe-4">
//                         <NavLink to={"/contact"}>Contact</NavLink>
//                       </li>
//                       <li className="list-inline-item pe-4">
//                         <NavLink to={"/profile"}>Profile</NavLink>
//                       </li>
//                     </>
//                   ) : (
//                     <>
//                       <li className="list-inline-item pe-4">
//                         <NavLink to={"/dashboard"}>Dashboard</NavLink>
//                       </li>
//                       <li className="list-inline-item pe-4">
//                         <NavLink to={"product"}>Product</NavLink>
//                       </li>
//                       <li className="list-inline-item pe-4">
//                         <NavLink to={"/help-center"}>Help Center</NavLink>
//                       </li>
//                       <li className="list-inline-item pe-4">
//                         <NavLink to={"/contact"}>9724308606</NavLink>
//                       </li>
//                     </>
//                   )}
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </section>

//         <header>
//           <div className="container container_header py-3">
//             <div className="my_nav row d-flex justify-content-center align-content-center">
//               <div className="col-8">
//                 <div className="main-nav d-flex align-items-center">
//                   <div className="log">
//                     <h1>
//                       <NavLink to="/" className="tech">
//                         TechShed
//                       </NavLink>
//                     </h1>
//                   </div>
//                 </div>
//                 <div className="search-container">
//                   <input
//                     type="text"
//                     className="search-input"
//                     placeholder="Search..."
//                   />
//                   <button className="search-button" type="button">
//                     <Search className="search-icon" />
//                   </button>
//                 </div>
//               </div>
//               <div className="col-4 d-flex justify-content-end align-content-center">
//                 <div className="my_icon d-flex justify-content-center align-items-center gap-3">
//                   {data?.token ? (
//                     <CircleUserRound
//                       role="button"
//                       onClick={() => navigate("/profile")}
//                     />
//                   ) : (
//                     <h5
//                       role="button"
//                       onClick={toggleLoginModal}
//                       className="pt-2"
//                     >
//                       Login
//                     </h5>
//                   )}
//                   <Heart className="me-4" />
//                 </div>
//                 <div className="icon-2 gap-1 d-flex justify-content-center align-items-center">
//                   {data?.token && data?.user?.userType !== "admin" && (
//                     <>
//                       <ShoppingCart
//                         role="button"
//                         onClick={toggleOffcanvas}
//                         className=""
//                       />
//                       <p
//                         role="button"
//                         onClick={toggleOffcanvas}
//                         style={{
//                           backgroundColor: "black",
//                           color: "white",
//                           marginTop: "17px",
//                           height: "22px",
//                           width: "22px",
//                           display: "flex",
//                           justifyContent: "center",
//                           alignItems: "center",
//                           borderRadius: "50%",
//                         }}
//                       >
//                         {cart?.length}
//                       </p>
//                     </>
//                   )}
//                 </div>
//                 <div className="btn">
//                   <span role="button" onClick={toggleShoper}>
//                     <AlignJustify size={40} strokeWidth={2.5} />
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <section className={`lower_Header ${showShoper ? "show" : ""}`}>
//             <button className="close-btn" onClick={toggleShoper}>
//               Close
//             </button>
//             <div className="container py-3">
//               <div className="row">
//                 <div className="col-12">
//                   <ul className="d-flex nav-2 gap-4 align-content-center ">
//                     {AllShoper?.map((e, i) => {
//                       return (
//                         <li key={i}>

//                         <NavLink
//                           to={"/shope"}
//                           state={{ mainCategory: e?.mainCategory }}
//                         >

//                           {e.label}
//                         </NavLink>
//                       </li>
//                       );
//                     })}
//                   </ul>
//                 </div>
//               </div>

//             </div>
//           </section>
//         </header>
//       </div>
//       <Cart isOpen={isOpen} toggleOffcanvas={toggleOffcanvas} />
//     </>
//   );
// }

import React, { useEffect, useState } from "react";
import "./Header.css";
import { Heart, Search, ShoppingCart } from "react-feather";
import { AlignJustify, CircleUserRound } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LoginForm from "../login/LoginForm";
import { fetchCart } from "../../../Redux/feature/Product/Cart";
import Cart from "../offCanvas/Cart";

export default function Header() {
  const [loginModal, setLoginModal] = useState(false);
  const toggleLoginModal = () => setLoginModal(!loginModal);

  const [isOpen, setIsOpen] = useState(false);
  const [showShoper, setShowShoper] = useState(false);

  // const toggleShoper = () => setShowShoper(!showShoper);
  const toggleOffcanvas = () => setIsOpen(!isOpen);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.authSlice);
  const { error, cart, pending, refresh } = useSelector(
    (store) => store.cartSlice
  );

  useEffect(() => {
    dispatch(fetchCart());
  }, [refresh]);

  const AllShoper = [
    { label: "Shop", mainCategory: "" },
    { label: "Laptop", mainCategory: "Laptop" },
    { label: "Tablets", mainCategory: "Tablets" },
    { label: "Mobiles", mainCategory: "Mobiles" },
    { label: "LED TV", mainCategory: "LED TV" },
  ];
  const toggleShoper = () => {
    console.log("Toggling shoper state:=================>", !showShoper);
    setShowShoper(!showShoper);
  };
  return (
    <>
      <LoginForm modal={loginModal} toggle={toggleLoginModal} />
      <div>
        <section className="Topheader">
          <div className="container py-3">
            <div className="row">
              <div className="my_logo col-12 col-md-4 d-flex justify-content-md-start justify-content-center">
                <ul>
                  <li>
                    <span style={{ color: "white", marginTop: "4px" }}>
                      Free Shipping for orders over $50
                    </span>
                  </li>
                </ul>
              </div>
              <div className="top_nav col-8">
                <ul className="ppp list-inline d-flex justify-content-end gap-3">
                  {data?.user?.userType !== "admin" ? (
                    <>
                      <li className="list-inline-item pe-4">
                        <NavLink to={"/home"}>Home</NavLink>
                      </li>
                      <li className="list-inline-item pe-4">
                        <NavLink to={"/about"}>About</NavLink>
                      </li>
                      <li className="list-inline-item pe-4">
                        <NavLink to={"/contact"}>Contact</NavLink>
                      </li>
                      <li className="list-inline-item pe-4">
                        <NavLink to={"/profile"}>Profile</NavLink>
                      </li>
                    </>
                  ) : (
                    <>
                      <li className="list-inline-item pe-4">
                        <NavLink to={"/dashboard"}>Dashboard</NavLink>
                      </li>
                      <li className="list-inline-item pe-4">
                        <NavLink to={"product"}>Product</NavLink>
                      </li>
                      <li className="list-inline-item pe-4">
                        <NavLink to={"/help-center"}>Help Center</NavLink>
                      </li>
                      <li className="list-inline-item pe-4">
                        <NavLink to={"/contact"}>9724308606</NavLink>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <header>
          <div className="container container_header py-3">
            <div className="my_nav row d-flex justify-content-center align-content-center">
              <div className="col-8">
                <div className="main-nav d-flex align-items-center">
                  <div className="log">
                    <h1>
                      <NavLink to="/" className="tech">
                        TechShed
                      </NavLink>
                    </h1>
                  </div>
                </div>
                <div className="search-container">
                  <input
                    type="text"
                    className="search-input"
                    placeholder="Search..."
                  />
                  <button className="search-button" type="button">
                    <Search className="search-icon" />
                  </button>
                </div>
              </div>
              <div className="col-4 d-flex justify-content-end align-content-center">
                <div className="my_icon d-flex justify-content-center align-items-center gap-3">
                  {data?.token ? (
                    <CircleUserRound
                      role="button"
                      onClick={() => navigate("/profile")}
                    />
                  ) : (
                    <h5
                      role="button"
                      onClick={toggleLoginModal}
                      className="pt-2"
                    >
                      Login
                    </h5>
                  )}
                  <Heart className="me-4" />
                </div>
                <div className="icon-2 gap-1 d-flex justify-content-center align-items-center">
                  {data?.token && data?.user?.userType !== "admin" && (
                    <>
                      <ShoppingCart
                        role="button"
                        onClick={toggleOffcanvas}
                        className=""
                      />
                      <p
                        role="button"
                        onClick={toggleOffcanvas}
                        style={{
                          backgroundColor: "black",
                          color: "white",
                          marginTop: "17px",
                          height: "22px",
                          width: "22px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius: "50%",
                        }}
                      >
                        {cart?.length}
                      </p>
                    </>
                  )}
                </div>
                <div className="btn">
                  <span role="button" onClick={toggleShoper}>
                    fdhjfgfhj
                    {/* <AlignJustify size={40} strokeWidth={2.5} /> */}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <section className={`lower_Header ${showShoper ? "show" : ""}`}>
            <button style={{color:"black"}} className="close-btn p-4" onClick={toggleShoper}>
              Close
            </button>
            <div className="container py-3">
              <div className="row">
                <div className="col-12">
                <div className="my_icon d-none gap-2 align-items-center ">
                  {data?.token ? (
                    <CircleUserRound
                      role="button"
                      onClick={() => navigate("/profile")}
                    />
                  ) : (
                    <h5
                      role="button"
                      onClick={toggleLoginModal}
                      className="pt-2"
                    >
                      Login
                    </h5>
                  )}
                  <Heart className="Heart me-4" />
                </div>
                  <div className="low_head_ul">
                  <ul role="button" onClick={toggleShoper} className=" list-inline d-none justify-content-end gap-3">
                  {data?.user?.userType !== "admin" ? (
                    <>
                      <li  className="list-inline-item pe-4">
                        <NavLink  to={"/home"}>Home</NavLink>
                      </li>
                      <li className="list-inline-item pe-4">
                        <NavLink to={"/about"}>About</NavLink>
                      </li>
                      <li className="list-inline-item pe-4">
                        <NavLink to={"/contact"}>Contact</NavLink>
                      </li>
                      <li className="list-inline-item pe-4">
                        <NavLink to={"/profile"}>Profile</NavLink>
                      </li>
                    </>
                  ) : (
                    <>
                      <li className="list-inline-item pe-4">
                        <NavLink to={"/dashboard"}>Dashboard</NavLink>
                      </li>
                      <li className="list-inline-item pe-4">
                        <NavLink to={"product"}>Product</NavLink>
                      </li>
                      <li className="list-inline-item pe-4">
                        <NavLink to={"/help-center"}>Help Center</NavLink>
                      </li>
                      <li className="list-inline-item pe-4">
                        <NavLink to={"/contact"}>9724308606</NavLink>
                      </li>
                    </>
                  )}
                </ul>
                  </div>
                
                  <ul className="d-flex nav-2 gap-4 align-content-center align-items-center ">
                  
                    {AllShoper?.map((e, i) => {
                      return (
                        <li  key={i}>
                          
                          <p
                            style={{ paddingTop: "12px" }}
                            className="low_head_text"
                            role="button"
                            onClick={() => (
                              toggleShoper(),
                              navigate("/shope", {
                                state: { mainCategory: e?.mainCategory },
                              })
                            )}
                          >
                            {e.label}
                          </p>
                            
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </header>
      </div>
      <Cart isOpen={isOpen} toggleOffcanvas={toggleOffcanvas} />
    </>
  );
}
