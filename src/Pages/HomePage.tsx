import jwtDecode from "jwt-decode";
import config from "../config.json";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

import { home } from "../api/home";
import { allMenu, alacarteMenu, buffetMenu } from "../api/menu";
const HomeTest: React.FC = () => {
  const [userData, setUserData] = useState<Array<Object>>();
  const [menuPic, setMenuPic] = useState<string>();
  const imageUrl = config.imageURL;
  useEffect(() => {
    const getData = async () => {
      const res = await home();
      const decoded: Object = jwtDecode(res?.data);

      setUserData(Object.values(decoded)[1]);
      const menu = await allMenu();
      setMenuPic(`${imageUrl}${menu?.data[4].image}`);
    };
    getData();
  }, []);
  //const params = useParams();
  return (
    <div>
      <div>ควย เข้ามาได้ไงวะงง หวัดดีละกันไอเปรต {userData} </div>
      <img src={menuPic} />
    </div>
  );
};

export default HomeTest;
