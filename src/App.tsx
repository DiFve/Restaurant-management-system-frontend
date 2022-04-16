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
import ProtectedRoutes from "./components/ProtectedRoutes";
import MenuPage from "./Pages/MenuPage";
import ManagerMenuPage from "./Pages/ManagerMenuPage";
import AddMenuPage from "./Pages/AddMenuPage";
import FoodPage from "./Pages/FoodPage";
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
            />
          }
        />
        <Route path="/ManagerMenu" element={<ManagerMenuPage/>} />
        <Route path="/ManagerMenu/addMenu" element={<AddMenuPage/>} />
        <Route 
          path="/menu/:type" 
          element={
            <ProtectedRoutes 
              authenticationPath="/login"
              outlet={<MenuPage />}
            />
          } 
        />
        <Route 
          path="/food/:id" 
          element={
            <ProtectedRoutes 
              authenticationPath="/login"
              outlet={<FoodPage/>}
            />
          } 
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
