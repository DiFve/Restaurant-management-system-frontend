import {
  BrowserRouter as BrowserRouter,
  Routes,
  Route,
  useNavigate,
  Navigate,
} from "react-router-dom";
interface Example {
  text: string;
}

const Test: React.FC<Example> = (props) => {
  const navigate = useNavigate();

  const onClickLoginHandle = () => {
    navigate("/login");
  };

  return (
    <div className="flex flex-col">
      <h1 className="text-red-500 font-light text-xl text-center">
        อ่านหาพ่อมึงหรอ {props.text}
      </h1>
      <button onClick={onClickLoginHandle}>แน่จริงก็กดมาไอควาย</button>
    </div>
  );
};
export default Test;
