import jwtDecode from "jwt-decode";
import config from "../config.json";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import HeaderBar from "../components/RestaurantManagerBar";
import SettingIcon from "../components/img/setting_icon.png";
import EmployeeIcon from "../components/img/employee_icon.jpg";
import MenuIcon from "../components/img/menu_icon.png";
import { useNavigate } from "react-router-dom";

import { home } from "../api/home";
import { allMenu, alacarteMenu, buffetMenu } from "../api/menu";
import { makeQR } from "../api/qrcode";
const HomeTest: React.FC = () => {
  const [userData, setUserData] = useState<Array<Object>>();
  const [menuPic, setMenuPic] = useState<string>();
  const [QRCodeImage, setQRCodeImage] = useState<string>();
  const imageUrl = config.imageURL;

  const navigate = useNavigate();

  const onClickMenuPage = () => {
    navigate("/ManagerMenu");
  };

  const onClickEmployeeMainPage = () => {
    navigate("/EmployeeMain");
  };

  const onClickEmployeeListPage = () => {
    navigate("/EmployeeList");
  };


  const onClickQRCodeHandle = async () => {
    // const res = await makeQR(69, "buffet");
    // console.log(res?.data.qrImage);

    // setQRCodeImage(res?.data.qrImage);
    // console.log(config.imageURL + QRCodeImage);
  };

  useEffect(() => {
    const getData = async () => {
      const res = await home();
      const decoded: Object = jwtDecode(res?.data);
      console.log(decoded)
      setUserData(Object.values(decoded)[1]);
      const menu = await allMenu();
      setMenuPic(`${imageUrl}${menu?.data[4].image}`);
    };
    getData();

    setQRCodeImage("/images/qrcode/table69.png");
  }, []);
  //const params = useParams();
  return (
    <div>
      <div className="bg-white">
        <HeaderBar name="Home"></HeaderBar>

        <div className="flex flex-col min-h-[80vh] justify-between align-center">
          <button
            onClick={onClickMenuPage}
            className="flex flex-row bg-white w-10/12 h=10/12 mx-auto my-auto py-10 border-2 border-gray-300 rounded-lg shadow-md justify-center hover:border-4 hover:bg-gray-200"
          >
            <img className="h-10 w-10 inline align-center" src={MenuIcon} />
            <span className="pl-10 font-semibold text-3xl text-green-600">
              Menu
            </span>
          </button>
          <button
            onClick={onClickEmployeeListPage} 
            className="flex flex-row bg-white w-10/12 h=10/12 mx-auto my-auto py-10 border-2 border-gray-300 rounded-lg shadow-md justify-center hover:border-4 hover:bg-gray-200">
            <img className="h-10 w-10 inline align-center" src={EmployeeIcon} />
            <span className="pl-10 font-semibold text-3xl text-green-600">
              Employee
            </span>
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default HomeTest;
