import HeaderBar from "../components/RestaurantManagerBar";
import MenuComponent from "../components/ManagerMenuComponent";
import AddIcon from "../components/img/add_icon.jpg";
import { useNavigate } from "react-router-dom";
import { alacarteMenu, allMenu, buffetMenu } from "../api/menu";
import { useEffect, useState } from "react";

const ManagerMenuPage: React.FC = () => {
  const [menu, setMenu] = useState([]);
  const [menuTypeSelected,setMenuTypeSelected] = useState("all"); 

  const menuTypeChange = (event:any) => { 
    setMenuTypeSelected(event.target.value);
  }

  useEffect(() => {
    const getMenu = async () => {
      var res = await allMenu();
      var menuAll = res?.data;
      setMenu(menuAll);
    };
    getMenu();
  }, [menu]);

  const navigate = useNavigate();

  const onClickAddMenu = () => {
    navigate("/ManagerMenu/addMenu");
  };

  return (
    <div>
      <div className="bg-white">
        <HeaderBar name="Menu"></HeaderBar>
        <div className="flex flex-row w-full h-[75px] justify-between bg-red-50">
          <select
            className="form-select block text-base font-normal text-gray-700 bg-white border
                    border-solid border-gray-300 rounded focus:text-gray-700 focus:border-blue-600 focus:outline-none"
            onChange={menuTypeChange}>
            <option value="all" selected={menuTypeSelected === "all"}>all</option>
            <option value="a-la-carte" selected={menuTypeSelected === "a-la-carte"}>a-la-carte</option>
            <option value="buffet" selected={menuTypeSelected === "buffet"}>buffet</option>
            );
          </select>
        </div>
        <div className="flex flex-row flex-wrap p-[10px] w-full h-auto justify-start">
          <div className="sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 w-full h-[160px] p-[10px] mb-[10px]">
            <div
              onClick={onClickAddMenu}
              className="flex justify-center items-center h-full w-full rounded-lg border-2 p-[3px] shadow-md cursor-pointer"
            >
              <img src={AddIcon} className="h-10 w-10 rounded-full" />
            </div>
          </div>
          {menu.map((element: any) => {
            return (
              <MenuComponent
                name={element["foodName"]}
                price={element["price"]}
                pic={element["image"]}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ManagerMenuPage;
