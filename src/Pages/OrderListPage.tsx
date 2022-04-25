import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { cashOut } from "../api/checkbill";
import { getTableOrder } from "../api/table";
import OrderListBox from "../components/OrderListBox";
import HeaderBar from "../components/RestaurantManagerBar";

const OrderListPage: React.FC = (props) => {
  const { tableNumber } = useParams();

  const [allTableOrder, setAllTableOrder] = useState([]);
  const [popup, setPopup] = useState(false);
  const [allOrder, setAllOrder] = useState<any>();
  const checkbillHandle = () => {
    setPopup(!popup);
  };

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

    const checkBill = async () => {
      const res = await cashOut(tableNumber);
      setAllOrder(Object(res?.data));
      //allOrder.push(res?.data);
      console.log(res?.data);
    };
    checkBill();
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
          <button
            onClick={checkbillHandle}
            className="flex  w-[20%] bg-red-500 justify-center text-2xl rounded-md hover:bg-red-400 text-white"
          >
            CHECK BILL
          </button>
        </div>
        <div>
          {popup ? (
            <div>
              <div className="flex h-screen w-screen z-10 bg-[#edededcc] absolute top-0 left-0 justify-center items-center">
                <div className=" flex flex-row absolute justify-center items-center h-full w-full">
                  <div className="flex flex-col w-[60%] h-screen ">
                    <div className="flex h-[25%] w-full"></div>
                    <div className="flex flex-col h-[65%] w-full bg-green-300 justify-center items-center">
                      <div className="flex flex-row justify-between border-4 h-full w-full p-[10%]">
                        <div> หี</div>
                        <div> ควย</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderListPage;
