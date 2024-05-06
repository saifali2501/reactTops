import React, { useEffect, useState } from "react";
import "./Header.css";
import {
  ChevronDown,
  Heart,
  Search,
  ShoppingBag,
  LogIn,
  ShoppingCart,
} from "react-feather";
import { CircleUserRound } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import { Input } from "reactstrap";
// import LoginForm from "../../Page/pages/Page_1/common/login/LoginForm";
// import RegisterForm from "../../Page/pages/Page_1/common/sinup/RagisterForm";
import { useDispatch, useSelector } from "react-redux";
// import Canvas from "../../Page/offCanvas/Canvas";
import LoginForm from "../login/LoginForm";
// import Canvas from "../offCanvas/Canvas";
import { fetchCart } from "../../../Redux/feature/Product/Cart";
import Cart from "../offCanvas/Cart";

export default function Header() {
  const [loginModal, setLoginModal] = useState(false);

  const toggleLoginModal = () => setLoginModal(!loginModal);

  const [isOpen, setIsOpen] = useState(false);

  const toggleOffcanvas = () => {
    setIsOpen(!isOpen);
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.authSlice);
  console.log(" ===========hello admin:===========", data?.user?.userType);

  const { error, cart, pending, refresh } = useSelector(
    (store) => store.cartSlice
  );

  useEffect(() => {
    // console.log("----->")
    dispatch(fetchCart());
  }, [refresh]);
  const AllShoper = [
    { label: "Shope", mainCategory: "" },
    { label: "Laptop", mainCategory: "Laptop" },
    { label: "Tablets", mainCategory: "Tablets" },
    { label: "Mobiles", mainCategory: "Mobiles" },
    { label: "LED TV", mainCategory: "LED TV" },
  ];

  return (
    <>
      <LoginForm modal={loginModal} toggle={toggleLoginModal} />

      <div>
        <section className="Topheader">
          <div className="container py-3">
            <div className="row">
              <div className="col-4">
                <ul>
                  <li>
                    <span style={{ color: "white", marginTop: "4px" }}>
                      Free Shipping for orders over $50
                    </span>
                  </li>
                </ul>
              </div>
              <div className="col-8">
                <ul className="list-inline d-flex justify-content-end gap-3">
                  {/* {console.log("=====", data?.user?.userType)}
                  {console.log(data?.user?.userType, "hello user")} */}
                  {data?.user?.userType !== "admin" ? (
                    <div>
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
                    </div>
                  ) : (
                    <div color="red">
                      <li color="danger" className="list-inline-item pe-4">
                        <NavLink to={"/dashbord"}>Dashboard</NavLink>
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
                    </div>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <header>
          <div className="container py-3">
            <div className="row d-flex justify-content-center align-content-center">
              <div className="col-8">
                <div className="main-nav d-flex align-items-center">
                  <div className="log">
                    <h1>
                      <NavLink to="/" className="tech">
                        TechShed
                      </NavLink>
                    </h1>
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
              </div>
              <div className="col-4 d-flex justify-content-end align-content-center">
                <div className="icon d-flex justify-content-center align-items-center gap-3">
                  {/* <LogIn   /> */}
                  {/* <CircleUser /> */}
                  {/* <CircleUser /> */}
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

                  {/* <CircleUser /> */}

                  <Heart className="me-4" />
                </div>

                <div className="icon2 gap-1 d-flex justify-content-center align-items-center">
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
              </div>
            </div>
          </div>
          <section className="lower_Header">
            <div className="container py-3">
              <div className="row">
                <div className="col-12">
                  <ul className="d-flex nav-2 gap-4 align-content-center ">
                    {AllShoper.map((e, i) => {
                      return (
                        <li key={i}>
                          <NavLink
                            to={"/shope"}
                            state={{ mainCategory: e?.mainCategory }}
                          >
                            {e.label}
                          </NavLink>
                        </li>
                      );
                    })}

                    {/* <li>
                      <NavLink to="/compueter">Computers</NavLink>
                    </li>
                    <li>
                      <NavLink to="/">Tablets</NavLink>
                    </li>
                    
                   
                    <li>
                      <NavLink to="/">Mobile</NavLink>
                    </li>
                    <li>
                      <NavLink to="/">T.V & Home Cinema</NavLink>
                    </li> */}
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
