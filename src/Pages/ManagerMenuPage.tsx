import HeaderBar from "../components/RestaurantManagerBar";
import MenuComponent from "../components/ManagerMenuComponent";
import AddIcon from "../components/img/add_icon.jpg";
import searchIcon from "../components/img/search_icon.png";
import { useNavigate } from "react-router-dom";
import { allMenu } from "../api/menu";
import { useEffect, useState } from "react";

const ManagerMenuPage: React.FC = () => {
  const [menu, setMenu] = useState([]);
  const [menuTypeSelected, setMenuTypeSelected] = useState("all");
  const [search, setSearch] = useState("");
  const [fillMenu, setFillMenu] = useState<any>([]);

  const menuTypeChange = (event: any) => {
    setMenuTypeSelected(event.target.value);
  };
  const searchChange = (event: any) => {
    setSearch(event.target.value);
  };

  const navigate = useNavigate();

  const onClickAddMenu = () => {
    navigate("/ManagerMenu/addMenu");
  };

  useEffect(() => {
    const getMenu = async () => {
      var res = await allMenu();
      var menuAll = res?.data;
      setMenu(menuAll);
      setFillMenu(menuAll);
    };
    getMenu();
  }, []);

  useEffect(() => {
    const filterChange = () => {
      var newMenu: any = [];
      if (menuTypeSelected != "all") {
        menu.filter((element: any) => {
          if (element.foodType.includes(menuTypeSelected)) {
            newMenu.push(element);
          }
        });
        setFillMenu(newMenu);
      } else {
        newMenu = menu;
        setFillMenu(newMenu);
      }
      var searchMenu: any = [];
      if (search != "") {
        newMenu.filter((element: any) => {
          if (element.foodName.includes(search)) {
            searchMenu.push(element);
          }
        });
        setFillMenu(searchMenu);
      } else {
        searchMenu = newMenu;
        setFillMenu(searchMenu);
      }
    };
    filterChange();
    console.log(fillMenu);
  }, [menuTypeSelected, search]);

  return (
    <div>
      <div className="bg-white">
        <HeaderBar name="Menu"></HeaderBar>
        <div className="flex flex-row w-full h-[75px] justify-between items-center bg-red-50">
          <select
            className="form-select block text-md font-normal text-gray-700 bg-white border h-[40px] ml-5
                    border-solid border-gray-300 rounded focus:text-gray-700 focus:border-blue-600 focus:outline-none"
            onChange={menuTypeChange}
          >
            <option value="all" selected={menuTypeSelected === "all"}>
              all
            </option>
            <option
              value="a-la-carte"
              selected={menuTypeSelected === "a-la-carte"}
            >
              a-la-carte
            </option>
            <option value="buffet" selected={menuTypeSelected === "buffet"}>
              buffet
            </option>
            );
          </select>
          <div className="flex flex-row items-center">
            <img src={searchIcon} className="flex h-[20px] object-contain" />
            <input
              type="text"
              className="flex w-auto h-[40px] px-3 py-1.5 text-md font-normal text-gray-700 mr-5
              border border-solid border-gray-300 rounded focus:border-black focus:outline-none"
              placeholder="Search..."
              onChange={searchChange}
              value={search}
            />
          </div>
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
          {fillMenu.map((element: any) => {
            return (
              <MenuComponent
                id={element["_id"]}
                name={element["foodName"]}
                price={element["price"]}
                pic={element["image"]}
                status={element["status"]}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ManagerMenuPage;
