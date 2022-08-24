import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRouter = ({ children }) => {
  const userAuth = localStorage.getItem("user");
  return userAuth ? children : <Navigate to={"/login"} />;
};
export default PrivateRouter;
