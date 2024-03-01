import React from "react";
import "./Header.css";
import { ChevronDown, Search, ShoppingBag } from "react-feather";
import { NavLink } from "react-bootstrap";

export default function Header() {
  return (
    <div>
        <div className="marquee">
          <marquee width="100%" height="50px" behavior="" direction="left">
            <div className="mar">
              { 
                [1,2,3,4,5,6,7,8,9].map((e,i)=>{
                    return <div>NEW COLLECTION</div>
                })
              }
            </div>
          </marquee>
        </div>

          <div className="navbar1">
            <div className="logo">
              <span>
                <a href="">WEAR</a>
              </span>
            </div>
           <div className="main-nav">
           <div className="nav">
                <ul>
                    <li><NavLink>NEW<ChevronDown /></NavLink> </li>
                    <li><NavLink>WOMEN<ChevronDown /></NavLink> </li>
                    <li><NavLink>MEN<ChevronDown /></NavLink></li>
                    <li><NavLink>LIFESTYLE<ChevronDown /></NavLink> </li>
                    <li><NavLink>OUTLET SHOES<ChevronDown /></NavLink> </li>

                </ul>
            </div>
            <div className="icons">
                <span>BELGIUM (EUR $) <ChevronDown /></span>
                <span className="login"><a href="">LOGIN</a></span>
                <span><Search /></span>
                <span><ShoppingBag /></span>
            </div>
           </div>
          </div>
        </div>
  );
}
