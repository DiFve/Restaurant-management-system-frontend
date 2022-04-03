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

export type ProtectedRoutes = {
  authenticationPath: string;
  outlet: JSX.Element;
};

export default function ProtectedRoutes({
  authenticationPath,
  outlet,
}: ProtectedRoutes) {
  if (getCurrentUser()) {
    return outlet;
  } else {
    return <Navigate to={{ pathname: authenticationPath }} />;
  }
}
