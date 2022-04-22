import HeaderBar from "../components/RestaurantManagerBar";
import MenuComponent from "../components/ManagerMenuComponent";
import AddIcon from "../components/img/add_icon.jpg";
import { useNavigate } from "react-router-dom";
const ManagerMenuPage: React.FC = () => {
  let Menus = [
    {
      name: "hua moo",
      price: "0",
      pic: "https://www.pitchameat.com/wp-content/uploads/2022/02/%E0%B8%AB%E0%B8%B1%E0%B8%A7%E0%B8%AB%E0%B8%A1%E0%B8%B9%E0%B9%84%E0%B8%AB%E0%B8%A7%E0%B9%89%E0%B9%80%E0%B8%88%E0%B9%89%E0%B8%B2.jpg",
    },
    {
      name: "กระเพราไข่ดาว",
      price: "0",
      pic: "https://sls-prod.api-onscene.com/partner_files/trueidintrend/6410/New%20Project.jpg",
    },
    {
      name: "kuy ต้ม",
      price: "0",
      pic: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Shark_fin_stew.jpg",
    },
    {
      name: "กันชา",
      price: "0",
      pic: "http://www.disthai.com/images/content/original-1634718351789.jpg",
    },
    {
      name: "เหี้ย",
      price: "0",
      pic: "https://media.komchadluek.net/uploads/images/md/2021/09/UWTmNq2oOoaOOArz5qfp.jpg?x-image-process=style/LG",
    },
  ];
  const navigate = useNavigate();

  const onClickAddMenu = () => {
    navigate("/ManagerMenu/addMenu");
  };

  return (
    <div>
      <div className="bg-white">
        <HeaderBar name="Menu"></HeaderBar>
        <div className="flex flex-row flex-wrap p-[10px] w-full h-auto justify-start">
          <div className="sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 w-full h-[160px] p-[10px] mb-[10px]">
            <div
              onClick={onClickAddMenu}
              className="flex justify-center items-center h-full w-full rounded-lg border-2 p-[3px] shadow-md cursor-pointer"
            >
              <img src={AddIcon} className="h-10 w-10 rounded-full" />
            </div>
          </div>
          {Menus.map((menu) => (
            <MenuComponent
              name={menu.name}
              price={menu.price}
              pic={menu.pic}
            ></MenuComponent>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManagerMenuPage;
