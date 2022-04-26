import config from "../config.json";
import React, { useEffect, useState } from "react";
import { getFoodInfo } from "../api/food";
import { useNavigate, useParams } from "react-router-dom";

interface Order {
  tableNumber: string | undefined;
  orderNumber: number;
  orderStatus: string;
  orderID: string;
}

const OrderListBox: React.FC<Order> = (props) => {
  const { tableNumber, orderNumber, orderStatus, orderID } = props;

  const navigate = useNavigate();

  var colorstatus = "";
  if (orderStatus == "cooking") {
    colorstatus = "bg-yellow-300 h-full w-full hover:bg-yellow-200 rounded-xl";
  } else if (orderStatus == "complete") {
    colorstatus = "bg-green-300 h-full w-full hover:bg-green-200 rounded-xl";
  }

  const defaultBox = "flex flex-col rounded-xl h-28 ";

  const goToOrderPage = () => {
    navigate(`/EmployeeMain/Table/${tableNumber}/${orderID}`);
  };

  return (
    <div>
      <div className={defaultBox}>
        <div className={colorstatus}>
          <button
            onClick={goToOrderPage}
            className="h-full w-full flex flex-col justify-center items-center"
          >
            <label className="text-3xl">{orderNumber}</label>
            <div className="h-2 w-full"></div>
            <div className="flex flex-row h-auto w-auto text-xl truncate ...">
              <label>{orderStatus.toUpperCase()}</label>
              {orderStatus == "cooking" ? (
                <div className="flex items-center justify-center space-x-1 animate-pulse">
                  <div></div>
                  <div className="flex w-2  bg-transparent rounded-full text-xl ">
                    .
                  </div>
                  <div className="flex w-2 bg-transparent rounded-full text-xl ">
                    .
                  </div>
                  <div className="flex w-2 bg-transparent rounded-full text-xl">
                    .
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderListBox;
