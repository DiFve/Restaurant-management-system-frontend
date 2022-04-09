import userIcon from "./img/LoginPageimg/userIcon.png";
import passwordIcon from "./img/LoginPageimg/passwordIcon.png";
import loginIcon from "./img/LoginPageimg/loginIcon.png";
import { login } from "../services/authServices";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";

const LoginPage: React.FC = () => {
  const [pwError, setPWError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [errorMSG, setErrorMSG] = useState("");

  const navigate = useNavigate();
  const onClickLoginHandle = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    if (username != "" && password != "") {
      const res = await login(username, password);
      //console.log(localStorage.getItem("token"));
      try {
        const jwtDecoded: Object = jwtDecode(res);
        const user_ID = Object.values(jwtDecoded)[0];
        navigate(`/home`);
      } catch (error) {
        setEmailError(true);
        setPWError(true);
        setErrorMSG("Email or password incorrect");
      }
    } else {
      setEmailError(true);
      setPWError(true);
      setErrorMSG("Please input email and password");
    }
    setPassword("");
  };

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const inputUsername = (event: React.FormEvent<HTMLInputElement>) => {
    setUsername(event.currentTarget.value);
    setEmailError(false);
  };

  const inputPassword = (event: React.FormEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value);
    setPWError(false);
  };

  const [didMount, setDidMount] = useState(false);

  useEffect(() => {
    setDidMount(true);
    return () => setDidMount(false);
  }, []);

  if (!didMount) {
    return null;
  }

  return (
    <div className="h-screen w-screen">
      <div className="flex flex-col items-center">
        <div className="flex flex-col bg-[#DD1C1C] w-screen h-[165px]">
          <label className=" text-center text-white text-4xl font-normal pt-[60px]">
            Manager Menu
          </label>
        </div>
        <form
          className="flex flex-col items-center"
          onSubmit={onClickLoginHandle}
        >
          <div className="mt-52">
            <label className=" text-2xl text-rose-600">{errorMSG}</label>
          </div>

          <div className="flex flex-row mt-1.5">
            <img className="w-[86px] h-[86px]" src={userIcon} />
            <input
              className={` w-[588px]  ml-[32px]  text-2xl pl-8 outline-1 outline-[#a5acaf] ${
                !emailError && "border-[#d6dbdd] border-b"
              } ${emailError && "border-rose-600 border-2"}`}
              onChange={inputUsername}
              type="email"
              value={username}
            ></input>
          </div>
          <div className="flex flex-row mt-8">
            <img className="w-[86px] h-[86px]" src={passwordIcon} />
            <input
              type="password"
              className={` w-[588px]  ml-[32px]  text-2xl pl-8 outline-1 outline-[#a5acaf] ${
                !pwError && "border-[#d6dbdd] border-b"
              } ${pwError && "border-rose-600 border-2"}`}
              onChange={inputPassword}
              value={password}
            ></input>
          </div>
          <button type="submit" className="mt-[41px] flex flex-row border-2">
            <div className="flex flex-row">
              <img src={loginIcon} className="w-[90px] h-[90px] mr-2" />
              <label className="text-normal text-4xl pt-6">Login</label>
            </div>
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
