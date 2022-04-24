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
<<<<<<< HEAD
=======
import OrderReceiptOld from "./Pages/OrderReceiptOld";
import NewOrderPage from "./Pages/NewOrderPage";
>>>>>>> 1e83d2ca9862d7f19287bfb7bdfd1f5c9c5da0cb
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
        <Route path="/EmployeeList" element={<EmployeeListPage />} />
        <Route path="/ManagerMenu/addMenu" element={<AddMenuPage />} />
        <Route path="/EmployeeMain" element={<EmployeeMainPage />} />
<<<<<<< HEAD
        <Route path="/EmployeeMain/OrderList/:id" element={<OrderListPage />} />
=======
        <Route path="/EmployeeMain/NewOrder/:id" element={<NewOrderPage />} />
        <Route path="/EmployeeMain/Table/:tableNumber" element={<OrderListPage />} />
        <Route
          path="/EmployeeMain/Table/:tableNumber/:id"
          element={<OrderPage />}
        />
>>>>>>> 1e83d2ca9862d7f19287bfb7bdfd1f5c9c5da0cb
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
              outlet={<OrderPage />}
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
