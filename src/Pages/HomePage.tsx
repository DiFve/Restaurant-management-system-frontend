import jwtDecode from "jwt-decode";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

import { home } from "../api/home";

const HomeTest: React.FC = () => {
  const [userData, setUserData] = useState<Array<Object>>();
  useEffect(() => {
    const getData = async () => {
      const res = await home();
      const decoded: Object = jwtDecode(res?.data);

      setUserData(Object.values(decoded)[1]);
    };
    getData();
  }, []);
  //const params = useParams();
  return <div> ควย เข้ามาได้ไงวะงง หวัดดีละกันไอเปรต {userData} </div>;
};

export default HomeTest;
