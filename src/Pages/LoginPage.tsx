import userIcon from "./img/LoginPageimg/userIcon.png";
import passwordIcon from "./img/LoginPageimg/passwordIcon.png";
import loginIcon from "./img/LoginPageimg/loginIcon.png";

const onClickLoginHandle = () => {
  console.log("แม่มึงตาย");
};

const LoginPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col bg-[#DD1C1C] w-full h-[165px]">
        <label className=" text-center text-white text-4xl font-normal pt-[60px]">
          Manager Menu
        </label>
      </div>
      <div className="flex flex-row mt-[234px]">
        <img className="w-[86px] h-[86px]" src={userIcon} />
        <input className="border-b w-[588px]  ml-[32px] border-[#d6dbdd] text-2xl pl-8 outline-1 outline-[#a5acaf]"></input>
      </div>
      <div className="flex flex-row mt-8">
        <img className="w-[86px] h-[86px]" src={passwordIcon} />
        <input
          type="password"
          className="border-b w-[588px] ml-[32px] border-[#d6dbdd] text-2xl pl-8 outline-1 outline-[#a5acaf]"
        ></input>
      </div>
      <button className="mt-[41px] flex flex-row border-black">
        <img src={loginIcon} className="w-[90px] h-[90px] mr-2" />
        <label
          onClick={onClickLoginHandle}
          className="text-normal text-4xl pt-6"
        >
          Login
        </label>
      </button>
    </div>
  );
};

export default LoginPage;
