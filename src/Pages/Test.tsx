import config from "../config.json";
import {
  BrowserRouter as BrowserRouter,
  Routes,
  Route,
  useNavigate,
  Navigate,
} from "react-router-dom";
import { useEffect } from "react";
interface Example {
  text: string;
}

const Test: React.FC<Example> = (props) => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/login");
  });

  return (
    <div className="flex flex-col">
      <h1 className="text-red-500 font-light text-xl text-center">
        อ่านหาพ่อมึงหรอ {props.text}
      </h1>
      {/* <button onClick={onClickLoginHandle}>แน่จริงก็กดมาไอควาย</button> */}
      {/* <img src={config.imageURL + "images/1649685255452-cvydl5f7idb31.jpg"} /> */}
    </div>
  );
};
export default Test;
