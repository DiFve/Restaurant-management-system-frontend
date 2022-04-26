import React, { useState } from "react";
import deleteIcon from "./img/delete_icon.png";
import { deleteEmployee } from "../api/employee";
interface menu {
  Email: string;
  nickname: string;
  name: string;
  surname: string;
}
const EmployeeComponent: React.FC<menu> = (props) => {
  const [showDeletePopUp, setshowDeletePopUp] = useState(false);
  ////
  const onClickDeleteConfirm = async () => {
    setshowDeletePopUp(false);
    await deleteEmployee(props.Email);
  };

  return (
    <div className="flex flex-row w-[90%] h-[10%] border">
      <div className="xl:text-lg lg:text-md md:text-md sm:text-sm text-xs flex w-1/5 h-full bg-green-50 justify-center items-center">
        {props.nickname}
      </div>
      <div className="xl:text-lg lg:text-md md:text-md sm:text-sm text-xs flex w-2/5 h-full bg-yellow-50 justify-center items-center">
        {props.name}
      </div>
      <div className="flex w-2/5 h-full bg-rose-50 justify-between items-center">
        <span className="w-full xl:text-lg lg:text-md md:text-md sm:text-sm text-xs ml-2 md:ml-3 lg:ml-4 xl:ml-5">
          {props.surname}
        </span>
        <button
          className="h-[50%] mr-2 md:mr-3 lg:mr-4 xl:mr-5"
          onClick={() => {
            setshowDeletePopUp(true);
          }}
        >
          <img src={deleteIcon} className="h-full" />
        </button>
        {showDeletePopUp ? (
          <div>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50">
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="rounded-lg shadow-lg relative flex flex-col w-full bg-white">
                  {/*header*/}
                  <div className="flex flex-row items-center justify-center p-5 border-b border-solid border-slate-200 rounded-t">
                    <h3 className="text-xl font-semibold">
                      คุณต้องการลบพนักงานคนนี้หรือไม่ ?
                    </h3>
                  </div>

                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                    <button
                      className="text-black background-transparent font-semibold px-6 py-2 text-sm mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => {
                        setshowDeletePopUp(false);
                      }}
                    >
                      ยกเลิก
                    </button>
                    <button
                      className="bg-rose-500 text-white active:bg-rose-600 font-semibold text-sm px-6 py-3 rounded shadow hover:shadow-lg mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={onClickDeleteConfirm}
                    >
                      ยืนยัน
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default EmployeeComponent;
