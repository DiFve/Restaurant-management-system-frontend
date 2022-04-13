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
        <Route path="/menu" element={<MenuPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
