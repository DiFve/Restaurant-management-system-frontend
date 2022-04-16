import { useEffect } from "react";
import { allMenu } from "../api/menu";
import HeaderBar from "../components/HeaderBar";
import MenuPageBody from "../components/MenuPageBody";

const MenuPage: React.FC = () => {
  return (
    <div className="flex flex-col h-screen">
      <HeaderBar name="Menu" />
      <MenuPageBody />
    </div>
  )
};

export default MenuPage;
