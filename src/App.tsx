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
import OrderListPage from "./Pages/OrderListPage";
import EmployeeMainPage from "./Pages/EmployeeMainPage";
import ProtectedRoutes from "./components/ProtectedRoutes";
import MenuPage from "./Pages/MenuPage";
import ManagerMenuPage from "./Pages/ManagerMenuPage";
import EmployeeListPage from "./Pages/EmployeeListPage";
import AddMenuPage from "./Pages/AddMenuPage";
import FoodPage from "./Pages/FoodPage";
import AuthPage from "./Pages/AuthPage";
import CartPage from "./Pages/CartPage";
import OrderReceiptOld from "./Pages/OrderReceiptOld";
import NewOrderPage from "./Pages/NewOrderPage";
import OrderPage from "./Pages/OrderPage";
import EditMenuPage from "./Pages/EditMenuPage"
import OrderPageCustomer from "./Pages/OrderPageCustomer";
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
        <Route
          path="/ManagerMenu"
          element={
            <ProtectedRoutes
              authenticationPath="/login"
              outlet={<ManagerMenuPage />}
              role="admin"
            />
          }
        />
        <Route
          path="/EmployeeList"
          element={
            <ProtectedRoutes
              authenticationPath="/login"
              outlet={<EmployeeListPage />}
              role="admin"
            />
          }
        />
        <Route
          path="/ManagerMenu/addMenu"
          element={
            <ProtectedRoutes
              authenticationPath="/login"
              outlet={<AddMenuPage />}
              role="admin"
            />
          }
        />
        <Route
          path="/editMenu/:id"
          element={
            <ProtectedRoutes
              authenticationPath="/login"
              outlet={<EditMenuPage />}
              role="admin"
            />
          }
        />
        <Route
          path="/EmployeeMain"
          element={
            <ProtectedRoutes
              authenticationPath="/login"
              outlet={<EmployeeMainPage />}
              role="employee"
            />
          }
        />
        <Route
          path="/EmployeeMain/NewOrder/:id"
          element={
            <ProtectedRoutes
              authenticationPath="/login"
              outlet={<NewOrderPage />}
              role="employee"
            />
          }
        />
        <Route
          path="/EmployeeMain/Table/:tableNumber"
          element={
            <ProtectedRoutes
              authenticationPath="/login"
              outlet={<OrderListPage />}
              role="employee"
            />
          }
        />
        <Route
          path="/EmployeeMain/Table/:tableNumber/:id"
          element={
            <ProtectedRoutes
              authenticationPath="/login"
              outlet={<OrderPage />}
              role="employee"
            />
          }
        />
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
          path="/orderlist"
          element={
            <ProtectedRoutes
              authenticationPath="/login"
              outlet={<OrderPageCustomer />}
              role="customer"
            />
          }
        />
        <Route
          path="/receipt/:id"
          element={
            <ProtectedRoutes
              authenticationPath="/login"
              outlet={<OrderReceiptOld />}
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
    </BrowserRouter>
  );
}

export default App;
