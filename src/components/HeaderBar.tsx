import res_icon from "./img/res_icon_placeholder.jpg";
import bell_icon from "./img/bell_icon.png";
import cart_icon from "./img/cart_icon.png";
import config from "../config.json";
import { useNavigate } from "react-router-dom";
interface HeaderName {
  name: string 
}
const HeaderBar: React.FC<HeaderName> = (props) => {
  const navigate = useNavigate()
  const bellClickHandler=(event:any)=>{
    var idvar = event.target.id
    navigate('/call-staff')
  }
  const cartClickHandler=(event:any)=>{
    var idvar = event.target.id
    navigate('/go-cart')
  }
  return (
    <div className="flex flex-row bg-headerRed h-[92px] w-full">
      <div className="flex w-[25%] h-full justify-center items-center">
        <img
          src={config.imageURL + "images/1649685255452-cvydl5f7idb31.jpg"}
          alt="res_headbar_icon"
          className="rounded-[70%] max-w-[92px] w-[90%] h-[90%]"
        />
      </div>
      <div className="flex w-[50%] h-full text-3xl text-center items-center justify-center">
        <label className="text-textWhite">{props.name}</label>
      </div>
      <div className="flex flex-col w-[25%] h-full item-center text-center">
        <div className="w-[100%] h-[50%]">Change Lang</div>
        <div className="flex flex-row h-[50%] justify-center">
          <div className="flex justify-center w-[50%]">
            <button className="max-w-[46px] w-[90%]" onClick={bellClickHandler}>
              <img src={bell_icon} alt="" className="" />
            </button>
          </div>
          <div className="flex justify-center w-[50%]">
            <button className="max-w-[46px] w-[90%]" onClick={cartClickHandler}>
              <img src={cart_icon} alt="" className="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderBar;
