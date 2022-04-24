import HeaderBar from "../components/RestaurantManagerBar";
import Employee from "../components/employeeComponent";
import addIcon from "../components/img/add_icon.jpg";
import loginIcon from "../components/img/login_icon.png";
import React, { useState } from "react";
const EmployeeListPage: React.FC = () => {
  const [showPopUp, setShowPopUp] = useState(false);
  const [nickName, setNickName] = useState("");
  const [name, setName] = useState("");
  const [surName, setSurName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  let EmployeeList = [
    {
      role: "Employee",
      nickname: "focus",
      name: "suratan",
      surname: "boonpong",
    },
    {
      role: "Employee",
      nickname: "focus",
      name: "suratan",
      surname: "boonpong",
    },
    {
      role: "Employee",
      nickname: "focus",
      name: "suratan",
      surname: "boonpong",
    },
    {
      role: "Employee",
      nickname: "focus",
      name: "suratan",
      surname: "boonpong",
    },
    {
      role: "Employee",
      nickname: "focus",
      name: "suratan",
      surname: "boonpong",
    },
    {
      role: "Employee",
      nickname: "focus",
      name: "suratan",
      surname: "boonpong",
    },
    {
      role: "Employee",
      nickname: "focus",
      name: "suratan",
      surname: "boonpong",
    },
    {
      role: "Employee",
      nickname: "focus",
      name: "suratan",
      surname: "boonpong",
    },
    {
      role: "Employee",
      nickname: "focus",
      name: "suratan",
      surname: "boonpong",
    },
    {
      role: "Employee",
      nickname: "focus",
      name: "suratan",
      surname: "boonpong",
    },
    {
      role: "Employee",
      nickname: "focus",
      name: "suratan",
      surname: "boonpong",
    },
  ];

  const inputNickName = (event: React.FormEvent<HTMLInputElement>) => {
    setNickName(event.currentTarget.value);
  };

  const inputName = (event: React.FormEvent<HTMLInputElement>) => {
    setName(event.currentTarget.value);
  };

  const inputSurName = (event: React.FormEvent<HTMLInputElement>) => {
    setSurName(event.currentTarget.value);
  };

  const inputUserName = (event: React.FormEvent<HTMLInputElement>) => {
    setUserName(event.currentTarget.value);
  };

  const inputPassword = (event: React.FormEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value);
  };

  const inputConfirmPassword = (event: React.FormEvent<HTMLInputElement>) => {
    setConfirmPassword(event.currentTarget.value);
  };

  return (
    <div>
      <HeaderBar name="Employee List"></HeaderBar>
      <div className="flex flex-col items-center overflow-y-scroll w-full h-[70vh] mt-16">
        <button
          className="flex w-[90%] h-[10%] border border-black justify-center items-center"
          onClick={() => {
            setShowPopUp(true);
          }}
        >
          <img src={addIcon} className="flex h-[50%]" />
        </button>
        {EmployeeList.map((employee) => {
          return (
            <Employee
              role={employee.role}
              nickname={employee.nickname}
              name={employee.name}
              surname={employee.surname}
            ></Employee>
          );
        })}
      </div>
      {showPopUp ? (
        <form>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="rounded-lg shadow-lg relative flex flex-col w-full bg-white">
                {/*header*/}
                <div className="flex flex-row items-center justify-center p-5 border-b border-solid border-slate-200 rounded-t">
                  <img className="flex h-10 mr-5" src={loginIcon} alt="" />
                  <h3 className="text-3xl font-semibold">Add User</h3>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <div className=" text-slate-500 text-lg leading-relaxed">
                    <div className="flex flex-col justify-center w-full">
                      <label className="inline-block mb-2 text-base text-gray-700">
                        ชื่อเล่น
                      </label>
                      <input
                        type="text"
                        className="block w-full px-3 py-1.5 text-sm font-normal text-gray-700 bg-white mb-5
                                  border border-solid border-gray-300 rounded focus:bg-white focus:border-blue-600 focus:outline-none"
                        placeholder="ชื่อเล่น"
                        maxLength={20}
                        onChange={inputNickName}
                        value={nickName}
                      />
                      <div className="flex flex-row w-auto">
                        <label className="w-1/2 mb-2 text-base text-gray-700">
                          ชื่อจริง
                        </label>
                        <label className="w-1/2 mb-2 text-base text-gray-700">
                          นามสกุล
                        </label>
                      </div>
                      <div className="flex flex-row w-auto">
                        <input
                          type="text"
                          className="block w-1/2 px-3 py-1.5 text-sm font-normal text-gray-700 bg-white mb-5 mr-2
                                  border border-solid border-gray-300 rounded focus:bg-white focus:border-blue-600 focus:outline-none"
                          placeholder="ชื่อจริง"
                          maxLength={30}
                          onChange={inputName}
                          value={name}
                        />
                        <input
                          type="text"
                          className="block w-1/2 px-3 py-1.5 text-sm font-normal text-gray-700 bg-white mb-5
                                  border border-solid border-gray-300 rounded focus:bg-white focus:border-blue-600 focus:outline-none"
                          placeholder="นามสกุล"
                          maxLength={30}
                          onChange={inputSurName}
                          value={surName}
                        />
                      </div>
                      <label className="inline-block mb-2 text-base text-gray-700">
                        Username
                      </label>
                      <input
                        type="email"
                        className="block w-full px-3 py-1.5 text-sm font-normal text-gray-700 bg-white mb-5
                                  border border-solid border-gray-300 rounded focus:bg-white focus:border-blue-600 focus:outline-none"
                        placeholder="Username"
                        onChange={inputUserName}
                        value={userName}
                      />
                      <label className="inline-block mb-2 text-base text-gray-700">
                        Password
                      </label>
                      <input
                        type="password"
                        className="block w-full px-3 py-1.5 text-sm font-normal text-gray-700 bg-white mb-5
                                  border border-solid border-gray-300 rounded focus:bg-white focus:border-blue-600 focus:outline-none"
                        placeholder="Password"
                        maxLength={30}
                        onChange={inputPassword}
                        value={password}
                      />
                      <label className="inline-block mb-2 text-base text-gray-700">
                        Confirm Password
                      </label>
                      <input
                        type="password"
                        className="block w-full px-3 py-1.5 text-sm font-normal text-gray-700 bg-white mb-5
                                  border border-solid border-gray-300 rounded focus:bg-white focus:border-blue-600 focus:outline-none"
                        placeholder="Confirm Password"
                        maxLength={30}
                        onChange={inputConfirmPassword}
                        value={confirmPassword}
                      />
                    </div>
                  </div>
                </div>

                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-black background-transparent font-semibold px-6 py-2 text-sm mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                  >
                    Cancel
                  </button>
                  <button
                    className="bg-rose-500 text-white active:bg-rose-600 font-semibold text-sm px-6 py-3 rounded shadow hover:shadow-lg mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                  >
                    Confirm
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </form>
      ) : null}
    </div>
  );
};
export default EmployeeListPage;
