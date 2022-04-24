import res_icon from "./img/res_icon_placeholder.jpg";
import bell_icon from "./img/bell_icon.png";
import cart_icon from "./img/cart_icon.png";
import home_icon from "./img/home_icon.png";
import config from "../config.json";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
import { useState } from "react";
import EmployeeCall from "./EmployeeCall";
interface HeaderName {
  name: string 
}
const HeaderBar: React.FC<HeaderName> = (props) => {
  const navigate = useNavigate()
  const [waitingPage,setWaitingPage] = useState<boolean>(false)
  const bellClickHandler=(event:any)=>{
    setWaitingPage(!waitingPage)
  }
  const cartClickHandler=(event:any)=>{
    var idvar = event.target.id
    navigate('/cart')
  }
  const homeClickHandler = (event:any)=>{
    const decodedJWT:Object = jwtDecode(localStorage.getItem('token') || '')
    const userFoodType:string = Object.values(decodedJWT)[3]
    navigate(`/menu/${userFoodType}`)
  }
  return (
    <div className="flex flex-row bg-headerRed h-[92px] w-full">
      <div className="flex w-[25%] h-full justify-center items-center">
        <img
          src={home_icon}
          alt="res_headbar_icon"
          className="rounded-[70%] max-w-[46px] w-[40%] h-[50%] min-h-[46px]"
          onClick={homeClickHandler}
        />
      </div>
      <div className="flex w-[50%] h-full text-3xl text-center items-center justify-center">
        <label className="text-textWhite">{props.name}</label>
      </div>
      <div className="flex flex-col w-[25%] h-full items-center text-center justify-center">
        <div className="flex flex-row h-[100%] justify-center items-center">
          <div className="flex justify-center w-[50%] mb-[3%]">
            <button className="max-w-[46px] max-h-[46px] h-[90%] " onClick={bellClickHandler}>
              <img src={bell_icon} alt="" className="h-[100%]" />
            </button>
          </div>
          <div className="flex justify-center w-[50%] mb-[3%]">
            <button className="max-w-[46px] max-h-[46px] h-[90%]" onClick={cartClickHandler}>
              <img src={cart_icon} alt="" className="h-[100%]" />
            </button>
          </div>
        </div>
      </div>
      {waitingPage &&
      <div className="flex flex-col justify-center items-center h-screen z-10 bg-[#edededcc] absolute w-[100%] top-0 left-0">
          <EmployeeCall/>
          <button onClick={bellClickHandler} className="z-10 bg-headerRed absolute mt-[130%] w-[26%] h-[4%] text-2xl rounded-md border-2 border-black text-white">Cancel</button>
      </div>}
    </div>
  );
};

export default HeaderBar;
