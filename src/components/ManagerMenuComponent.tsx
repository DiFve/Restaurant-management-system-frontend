import React from "react";
import config from "../config.json";
interface menu {
  name: string;
  price: string;
  pic: string;
}
const MenuComponent: React.FC<menu> = (props) => {

  return (
    <div className='flex flex-row sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 w-full h-[160px] p-[10px] mb-[10px]'>
    <div className="flex flex-row h-full w-full rounded-lg border-2 p-[3px] shadow-md cursor-pointer">
      <img
        className="bg-black w-5/12 h-full object-cover"
        src={config.imageURL+props.pic}
      />
      <div className="flex flex-col bg-white w-7/12 h-full">
        <span className="w-full h-full text-center text-3xl pt-[20px]">
          {props.name}
        </span>
        <div className="flex flex-row w-full h-full justify-between items-center">
          <span className="pl-5 mt-3 text-1xl text-gray-500">{props.price}</span>
          <button className="w-5 h-5 mr-4 mt-3 rounded-full bg-green-500"></button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default MenuComponent;
