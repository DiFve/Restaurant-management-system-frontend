import React from "react";
import { useNavigate } from "react-router-dom";
import config from "../config.json";
import emptyPic from "./img/menu_placeholder.png";
interface menu {
  id: string;
  name: string;
  price: string;
  pic: string;
  status: string;
}
const MenuComponent: React.FC<menu> = (props) => {
  var id = props.id;
  var name = props.name;
  var pic = props.pic;
  var price = props.price;
  var status = props.status;

  var navigate = useNavigate();
  const goEditFood = () => {
    navigate(`/editMenu/${id}`);
  };

  return (
    <button
      type="button"
      onClick={goEditFood}
      className="flex flex-row sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 w-full h-[160px] p-[10px] mb-[10px]"
    >
      <div className="flex flex-row h-full w-full rounded-lg border-2 p-[3px] shadow-md cursor-pointer">
        {pic !== "" ? (
          <img
            className="w-5/12 h-full object-contain"
            src={config.imageURL + pic}
          />
        ) : (
          <img className="w-5/12 h-full object-contain" src={emptyPic} />
        )}

        <div className="flex flex-col bg-white w-7/12 h-full">
          <span className="w-full h-full text-center text-2xl pt-[20px]">
            {name}
          </span>
          <div className="flex flex-row w-full h-full justify-between items-center">
            {<span className="pl-5 mt-3 text-xl text-black">{price}</span>}
            <div
              className={`w-5 h-5 mr-4 mt-3 rounded-full ${
                status === "InStock" && "bg-green-500"
              } ${status === "OutofStock" && "bg-red-500"}`}
            ></div>
          </div>
        </div>
      </div>
    </button>
  );
};

export default MenuComponent;
