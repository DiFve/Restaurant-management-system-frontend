import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTableOrder } from "../api/table";
import OrderListBox from "../components/OrderListBox";
import HeaderBar from "../components/RestaurantManagerBar";

const OrderListPage: React.FC = (props) => {
  const { tableNumber } = useParams();

  const [allTableOrder, setAllTableOrder] = useState([]);

  console.log(allTableOrder);

  const tablenumber = useEffect(() => {
    const getAllOrderInTable = async () => {
      var res = await getTableOrder(tableNumber);

      // setTableByID(res?.data.tableNumber);
      // setDetailInfo(res?.data.orderList.detail);

      setAllTableOrder(res?.data.order);

      console.log(res?.data);
      console.log(res?.data.order);
    };
    getAllOrderInTable();
  }, []);

  const example = [
    { foodID: "ไก่ทอด", quantity: 2, foodStatus: "cooking" },
    { foodID: "ไก่ทอด", quantity: 2, foodStatus: "fail" },
    { foodID: "ไก่ทอด", quantity: 2, foodStatus: "success" },
    { foodID: "ไก่ทอด", quantity: 2, foodStatus: "wrong" },
    { foodID: "ไก่ทอด", quantity: 2, foodStatus: "success" },
    { foodID: "ไก่ทอด", quantity: 2, foodStatus: "success" },
  ];

  return (
    <div className="w-screen h-screen">
      <div className="flex flex-col bg-[#dc2626] w-full h-1/6">
        <div className="flex text-center text-white text-4xl font-normal justify-center items-center w-full h-full">
          <label>{tableNumber}</label>
        </div>
      </div>
      <div className="flex flex-col h-5/6 w-full">
        <div className="flex flex-col h-[80%]">
          <div className="grid grid-cols-4 gap-2 m-2">
            {allTableOrder &&
              allTableOrder.map((element: any, index: number) => {
                return (
                  <OrderListBox
                    tableNumber={tableNumber}
                    orderNumber={index + 1}
                    orderStatus={element.orderStatus}
                    orderID={element._id}
                  />
                );
              })}
          </div>
        </div>
        <div className="flex flex-row h-[20%] w-screen justify-center items-center">
          <button className="flex  w-[20%] bg-red-500 justify-center text-2xl rounded-md hover:bg-red-400 text-white">
            CHECK BILL
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderListPage;
