import HeaderBar from "../components/RestaurantManagerBar";
import Employee from "../components/employeeComponent";
import addIcon from "../components/img/add_icon.jpg";
import React, { useState } from "react";
const EmployeeListPage: React.FC = () => {
  const [showPopUp, setShowPopUp] = useState(false);
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

  return (
    <div>
      <HeaderBar name="Employee List"></HeaderBar>
      <div className="flex flex-col items-center overflow-y-scroll w-full h-[70vh] mt-16">
        <button className="flex w-[90%] h-[10%] border border-black justify-center items-center" onClick={()=>{
            setShowPopUp(true)
        }}>
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
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">เพิ่มตัวเลือก</h3>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <div className="my-4 text-slate-500 text-lg leading-relaxed">
                    <div className="flex flex-col justify-center w-full"></div>
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
