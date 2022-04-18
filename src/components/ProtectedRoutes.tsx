import React, { ReactChild } from "react";
import { getCurrentUser } from "../services/authServices";
import {
  BrowserRouter as BrowserRouter,
  Routes,
  Route,
  useNavigate,
  RouteProps,
  Navigate,
} from "react-router-dom";
import jwtDecode from "jwt-decode";

export type ProtectedRoutes = {
  authenticationPath: string;
  outlet: JSX.Element;
  role: string;
};

export default function ProtectedRoutes({
  authenticationPath,
  outlet,
  role,
}: ProtectedRoutes) {
  const jwt: string = getCurrentUser() || "";
  if (jwt != "") {
    const token: Object = jwtDecode(jwt);
    const user_role = Object.values(token)[2];
    const mapping = new Map();
    mapping.set("admin", 3);
    mapping.set("employee", 2);
    mapping.set("customer", 1);

    if (mapping.get(user_role) >= mapping.get(role)) {
      return outlet;
    } else {
      localStorage.setItem("token", "");
      return <Navigate to={{ pathname: authenticationPath }} />;
    }
  } else {
    return <Navigate to={{ pathname: authenticationPath }} />;
  }
}
