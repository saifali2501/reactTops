import { Button } from "reactstrap";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../../../../../Redux/feature/auth/authSlice";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  let { user } = useSelector((state) => state.authSlice);

  const disptch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    navigate("/");
    disptch(logOut());
  };
  return (
    <div className="d-flex justify-content-center py-3">
      <div className="border p-3 rounded-2 w-50 d-flex flex-column align-items-center justify-content-center overflow-auto">
        <img
          className="w-75"
          src="https://www.pngitem.com/pimgs/m/404-4042710_circle-profile-picture-png-transparent-png.png"
          alt=""
        />

        <h3>Name:{user.tittle || "user"}</h3>
        <h3>Name:{user.email}</h3>
        <h3>userType:{user.userType}</h3>

        <Button color="danger" onClick={() => logoutHandler()}>
          Logout
        </Button>
      </div>
    </div>
  );
}
