import React from "react";
import { useNavigate } from "react-router-dom";
import backIcon from "./img/back_icon.png";
interface HeaderName {
  name: string | undefined | number;
  pathback: string;
}
const HeaderBar: React.FC<HeaderName> = (props) => {
  const navigate = useNavigate();

  const onClickBack = () => {
    navigate(props.pathback);
  };

  return (
    <div className="flex flex-row bg-[#dc2626] w-full h-[150px] justify-between items-center">
      {props.pathback !== "" ? (
        <button
          className="flex justify-between items-center h-full"
          onClick={onClickBack}
        >
          <img className="flex mt-3 h-[75%]" src={backIcon} />
        </button>
      ) : (
        <div></div>
      )}
      <label className="flex text-center text-white text-4xl font-normal">
        {props.name}
      </label>
      <div></div>
    </div>
  );
};

export default HeaderBar;
