import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

interface Tablename {
  id: string;
  tablenumber: number;
  status: string;
  callEmployee: boolean;
}

const TableButton: React.FC<Tablename> = (props) => {
  const navigate = useNavigate();

  const { id, tablenumber, status, callEmployee } = props;

  const onClickOrderListPage = () => {
    if (status == "available") {
      navigate(`/EmployeeMain/NewOrder/${id}`);
    } else if (status == "busy") {
      navigate(`/EmployeeMain/Table/${tablenumber}`);
    }
  };

  var colorStatus = "";

  if (props.status == "available") {
    colorStatus =
      "bg-[#cccccc] hover:border-4 hover:border-red-100 p-10 text-center text-2xl rounded-3xl text-white w-full h-auto";
  } else if (props.status == "busy") {
    colorStatus =
      " bg-[#4dd864] hover:border-4 p-10 hover:border-red-100 text-white text-center text-2xl rounded-3xl w-full h-auto";
  }
  return (
    <div>
      {callEmployee ? (
        <div className="relative">
          <button onClick={onClickOrderListPage} className={colorStatus}>
            <div>{props.tablenumber}</div>
            <span className="absolute -top-2 -right-2 bg-red-500 h-7 w-7 rounded-full animate-ping" />
          </button>
        </div>
      ) : (
        <div>
          <button onClick={onClickOrderListPage} className={colorStatus}>
            <div>{props.tablenumber}</div>
          </button>
        </div>
      )}
    </div>
  );
};

export default TableButton;
