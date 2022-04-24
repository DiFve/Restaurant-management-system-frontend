import React from "react";

import { useNavigate } from "react-router-dom";

interface Tablename {
  id: string;
  tablenumber: number;
  status: string;
}

const TableButton: React.FC<Tablename> = (props) => {
  const navigate = useNavigate();

  const { id, tablenumber, status } = props;

  const onClickOrderListPage = () => {
    if (status == "available") {
      navigate(`/EmployeeMain/NewOrder/${id}`);
    } else if (status == "busy") {
      navigate(`/EmployeeMain/OrderList/${tablenumber}`);
    }
  };

  var colorStatus = "";

  if (props.status == "available") {
    colorStatus =
      "bg-green-500 hover:bg-green-400 p-10 shadow-md text-center text-2xl rounded-3xl text-white";
  } else if (props.status == "busy") {
    colorStatus =
      "bg-slate-500 hover:bg-slate-400 p-10 shadow-md text-white text-center text-2xl rounded-3xl";
  }
  return (
    <button onClick={onClickOrderListPage} className={colorStatus}>
      <div>{props.tablenumber}</div>
    </button>
  );
};

export default TableButton;
