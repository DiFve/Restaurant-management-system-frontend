import menu_placeholder from "./img/menu_placeholder.png"
import plus_icon from "./img/plus_icon.png";
import config from "../config.json";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
interface Menu {
  id : string;
  name: string;
  pic: string;
  price: number;
  status:string;
}
const MenuComponent: React.FC<Menu> = (props) => {
  const {id,name,pic,price,status} = props 
  var inStock:boolean = false
  var buttonBGcolor = 'bg-headerRed'
  var componentBGcolor = 'bg-lightYellow'
  var navigate = useNavigate()
  const gotoFood = () =>{
    navigate(`/food/${id}`)
  }
  if(status == 'InStock'){
    inStock = true
    buttonBGcolor = 'bg-headerRed'
    componentBGcolor = 'bg-lightYellow'
  }
  else{
    inStock = false
    componentBGcolor = 'bg-zinc-400'
    buttonBGcolor = 'bg-zinc-800'
  }
  return (
    <div className={"flex flex-row mt-[1%] ml-[2.5%] h-[18%] w-[95%] border-[1px] border-black rounded-md min-h-[83px] "+componentBGcolor}>
      <div className="flex flex-row w-full">
        <div className="flex h-full max-w-[120px] w-[100%] shrink justify-center items-center">
          <img
            src={pic!=''?config.imageURL+pic:menu_placeholder}
            alt=""
            className="h-[90%] w-[90%] border border-black bg-white rounded-md"
          />
        </div>
        <div className="h-full w-[100%] text-center ">
          <div className="flex flex-col">
            <div className="flex w-full h-[80%] items-center justify-center pt-[2%] ">
              <p className="text-xl h-full w-full">{name}</p>
            </div>
            <div className="w-full h-[20%] text-right pr-[3%] mb-[7%] ">
              <p className="text-xl">{price + '฿'}</p>
            </div>
          </div>
        </div>
      </div>
      <div className={"h-full w-[40px] shrink-0 "+buttonBGcolor}>
        {inStock &&
          <button className="h-full w-full" onClick={gotoFood}>
              <div className="flex justify-center items-center h-full w-full">
                  <img src={plus_icon} alt="" className="w-[70%] bg-white rounded-[50%]" />
              </div>
          </button>
        }
      </div>
    </div>
  );
};

export default MenuComponent;
