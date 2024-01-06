import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const ProtectedRoute = ({ Componenet }) => {
  const navigate = useNavigate();
  // check user is login or not
  useEffect(() => {
    let jsonData = localStorage.getItem("login");
    let normalData = JSON.parse(jsonData);
    if (!normalData) {
      alert("Please do login");
      navigate("/");
    }
  });
  return <>{Componenet}</>;
};
export const AdminProtected = ({ Componenet }) => {
  const navigate = useNavigate();
  // check user is login or not
  useEffect(() => {
    let jsonData = localStorage.getItem("login");
    let normalData = JSON.parse(jsonData);
    console.log("----->", normalData?.userType !== "admin");

    if (!normalData || normalData?.userType !== "admin") {
      alert("You are not Admin");

      navigate("/");
    }
  });
  return <>{Componenet}</>;
};

/*
home to all 
superAdmin - admin + superAdmin
admin - employee + admin
employee - user + employee
user - profile
*/
