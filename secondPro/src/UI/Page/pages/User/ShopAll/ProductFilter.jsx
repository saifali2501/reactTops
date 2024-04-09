import React from "react";
import { NavLink } from "reactstrap";

export default function ProductFilter() {
  return (
    <div>
      <div className="container">
        <div className="h5">Browse by</div>
        <hr />
        <ul className="d-flex flex-column gap-3">
          <li>
            <NavLink to="/shope">All Products</NavLink>
          </li>
          <li>
            <NavLink to="/shope">BestSellers</NavLink>
          </li>
          <li>
            <NavLink to="/">Computers</NavLink>
          </li>
          <li>
            <NavLink to="/">Tablets</NavLink>
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
  );
}
