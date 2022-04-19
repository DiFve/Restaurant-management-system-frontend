import menu_placeholder from "./img/menu_placeholder.jpg";
import plus_icon from "./img/plus_icon.png";
import config from "../config.json";
import { useNavigate } from "react-router-dom";
interface Menu {
  id : string;
  name: string;
  pic: string;
  price: number;
}
const MenuComponent: React.FC<Menu> = (props) => {
  var id = props.id;
  var name = props.name;
  var pic = props.pic;
  var price = props.price;
  var navigate = useNavigate()
  const gotoFood = () =>{
    navigate(`/food/${id}`)
  }
  return (
    <div className="flex flex-row mt-[1%] ml-[2.5%] h-[18%] w-[95%] bg-lightYellow">
      <div className="flex flex-row w-full">
        <div className="flex h-full max-w-[120px] w-[100%] shrink justify-center items-center">
          <img
            src={config.imageURL+pic}
            alt=""
            className="h-[90%] w-[90%] border border-black bg-white"
          />
        </div>
        <div className="h-full w-[60%] text-center">
          <div className="flex flex-col">
            <div className="flex w-full h-[56px] items-center justify-center mt-[2%]">
              <p className="text-xl h-full w-full">{name}</p>
            </div>
            <div className="w-full h-auto text-right pr-[3%]">
              <p className="text-xl">{price + '฿'}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-headerRed h-full w-[40px] shrink-0">
        <button className="h-full w-full" onClick={gotoFood}>
            <div className="flex justify-center items-center h-full w-full">
                <img src={plus_icon} alt="" className="w-[70%] bg-white rounded-[50%]" />
            </div>
        </button>
      </div>
    </div>
  );
};

export default MenuComponent;
