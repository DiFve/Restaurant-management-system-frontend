import React from "react";
import deleteIcon from "./img/delete_icon.png";
interface menu {
  role: string;
  nickname: string;
  name: string;
  surname: string;
}
const employeeComponent: React.FC<menu> = (props) => {
  return (
    <div className="flex flex-row w-[90%] h-[10%] border">
      <div className="xl:text-lg lg:text-md md:text-md sm:text-sm text-xs flex w-1/6 h-full bg-blue-50 justify-center items-center">
        {props.role}
      </div>
      <div className="xl:text-lg lg:text-md md:text-md sm:text-sm text-xs flex w-1/6 h-full bg-green-50 justify-center items-center">
        {props.nickname}
      </div>
      <div className="xl:text-lg lg:text-md md:text-md sm:text-sm text-xs flex w-1/3 h-full bg-yellow-50 justify-center items-center">
        {props.name}
      </div>
      <div className="flex w-1/3 h-full bg-rose-50 justify-between items-center">
        <span className="xl:text-lg lg:text-md md:text-md sm:text-sm text-xs ml-2 md:ml-3 lg:ml-4 xl:ml-5">
            {props.surname}
        </span>
        <button className="h-[50%] mr-2 md:mr-3 lg:mr-4 xl:mr-5">
            <img src={deleteIcon} className="h-full"/>
        </button>
      </div>
    </div>
  );
};

export default employeeComponent;
