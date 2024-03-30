import React, { useState } from "react";
import "./Header.css";
import { ChevronDown , Heart, Search, ShoppingBag, LogIn, ShoppingCart } from "react-feather";
import { CircleUserRound } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import { Input } from "reactstrap";
import LoginForm from "../../Page/pages/Page_1/common/login/LoginForm";
import RegisterForm from "../../Page/pages/Page_1/common/sinup/RagisterForm";
import { useSelector } from "react-redux";
import Canvas from "../../Page/offCanvas/Canvas";

export default function Header() {
  const [loginModal, setLoginModal] = useState(false);

  const toggleLoginModal = () => setLoginModal(!loginModal);

    
    const [isOpen, setIsOpen] = useState(false);

    
    const toggleOffcanvas = () => {
      setIsOpen(!isOpen);
    };

 const navigate=useNavigate()

  const data = useSelector((state)=>state.authSlice);
  console.log(" hello admin:===========", data?.user?.userType)

  const Handler = () =>{
    // toggleLoginModal()
    // toggle()
    // if(data?.token){
    //      navigate("/profile")
    // }else{
    //   navigate("/")
    // }
  }

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
                  {console.log("=====",data?.user?.userType )}
                  {console.log(data?.user?.userType,"hello user")}
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
                  {
                    data?.token?(

                      <CircleUserRound role="button" onClick={()=>navigate("/profile")}/>
                    ):(

                      <h5 role="button" onClick={toggleLoginModal} className="pt-2">Login</h5>
                    )
                  }
                  
                  
                  {/* <CircleUser /> */}
                  
                  <Heart className="me-4" />
                </div>
                <div className="icon2 gap-2 d-flex justify-content-center align-items-center">
                  <ShoppingCart role="button" onClick={toggleOffcanvas} className="" />
                  <ShoppingBag />
                </div>
              </div>
            </div>
          </div>
          <section className="lower_Header">
            <div className="container py-3">
              <div className="row">
                <div className="col-12">
                  <ul className="d-flex nav-2 gap-4 align-content-center ">
                    <li>
                      <NavLink to="/shope">Shop All</NavLink>
                    </li>
                    <li>
                      <NavLink to="/">Computers</NavLink>
                    </li>
                    <li>
                      <NavLink to="/">Tablets</NavLink>
                    </li>
                    <li>
                      <NavLink to="/">Drones & Cameras</NavLink>
                    </li>
                    <li>
                      <NavLink to="/">Audio</NavLink>
                    </li>
                    <li>
                      <NavLink to="/">Mobile</NavLink>
                    </li>
                    <li>
                      <NavLink to="/">T.V & Home Cinema</NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </header>
      </div>
      <Canvas isOpen={isOpen} toggleOffcanvas={toggleOffcanvas} />
      
    </>
  );
}
