import React from "react";
import "./App.css";
import Test from "./Pages/Test";
import LoginPage from "./Pages/LoginPage";
import HomeTest from "./Pages/HomePage";
import {
  BrowserRouter as BrowserRouter,
  Routes,
  Route,
  Navigate,
  useParams,
} from "react-router-dom";
//
import EmployeeMainPage from "./Pages/EmployeeMainPage"
import ProtectedRoutes from "./components/ProtectedRoutes";
import MenuPage from "./Pages/MenuPage";
import ManagerMenuPage from "./Pages/ManagerMenuPage";
import AddMenuPage from "./Pages/AddMenuPage";
import FoodPage from "./Pages/FoodPage";
import AuthPage from "./Pages/AuthPage";
import CartPage from "./Pages/CartPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Test text="เย็ดแม่" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/home"
          element={
            <ProtectedRoutes
              authenticationPath="/login"
              outlet={<HomeTest />}
              role="employee"
            />
          }
        />
        <Route path="/ManagerMenu" element={<ManagerMenuPage />} />
        <Route path="/ManagerMenu/addMenu" element={<AddMenuPage />} />
        <Route path="/EmployeeMain" element={<EmployeeMainPage/>} />
        <Route
          path="/menu/:type"
          element={
            <ProtectedRoutes
              authenticationPath="/login"
              outlet={<MenuPage />}
              role="customer"
            />
          }
        />
        <Route
          path="/cart"
          element={
            <ProtectedRoutes
              authenticationPath="/login"
              outlet={<CartPage />}
              role="customer"
            />
          }
        />
        <Route
          path="/food/:id"
          element={
            <ProtectedRoutes
              authenticationPath="/login"
              outlet={<FoodPage />}
              role="customer"
            />
          }
        />
        <Route path="/auth/:token" element={<AuthPage />} />

      </Routes>

    </BrowserRouter >
  );
}

export default App;
