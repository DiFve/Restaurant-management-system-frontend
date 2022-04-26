import config from "../config.json";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getTableOrder } from "../api/table";
import BillPopup from "../components/BillPopup";
import OrderListBox from "../components/OrderListBox";
import HeaderBar from "../components/RestaurantManagerBar";


const OrderListPage: React.FC = (props) => {
  const { tableNumber } = useParams();

  const [allTableOrder, setAllTableOrder] = useState([]);
  const [showBill, setShowBill] = useState(false);
  const [showQR, setShowQR] = useState(false);
  console.log(allTableOrder);

  const navigate = useNavigate();

  useEffect(() => {
    const getAllOrderInTable = async () => {
      var res = await getTableOrder(tableNumber);

      setAllTableOrder(res?.data.order);

      console.log(res?.data);
      console.log(res?.data.order);
    };
    getAllOrderInTable();
  }, []);

  const openBill = () => {
    setShowBill(!showBill);
  };

  const openQR = () =>{
    setShowQR(!showQR)
  }

  const example = [
    { foodID: "ไก่ทอด", quantity: 2, foodStatus: "cooking" },
    { foodID: "ไก่ทอด", quantity: 2, foodStatus: "fail" },
    { foodID: "ไก่ทอด", quantity: 2, foodStatus: "success" },
    { foodID: "ไก่ทอด", quantity: 2, foodStatus: "wrong" },
    { foodID: "ไก่ทอด", quantity: 2, foodStatus: "success" },
    { foodID: "ไก่ทอด", quantity: 2, foodStatus: "success" },
  ];

  const backToEmployeeMain = () => {
    navigate(`/EmployeeMain`);
  };

  return (
    <div className="w-screen h-screen">
      <div className="relative flex flex-col bg-[#dc2626] w-full h-1/6">
        <div className="flex text-center text-white text-4xl font-normal justify-center items-center w-full h-full">
          <label>TABLE : {tableNumber}</label>
          <button
            onClick={backToEmployeeMain}
            className="absolute left-5 text-[45px]"
          >
            <label>◄</label>
          </button>
        </div>
      </div>
      <div className="flex flex-col h-5/6 w-full">
        <div className="flex flex-col h-[80%] overflow-scroll">
          <div className="grid grid-cols-3 gap-6 m-3">
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
          <div className="flex flex-row justify-center items-center h-full w-[20%]">
            <button
              onClick={openQR}
              className="flex w-full h-[50px] bg-red-500 justify-center text-2xl rounded-md hover:bg-red-400 text-white"
            >
              <div className="flex flex-row h-full w-full justify-center items-center gap-3">
                QR Code
                <div className="flex w-[30px] h-[30px] justify-center items-center">
                  <img
                    src="https://i.dlpng.com/static/png/7042983_preview.png"
                    className="object-contain overflow-hidden "
                  />
                </div>
              </div>
            </button>
            {showQR && 
              <div className="flex flex-col absolute top-0 left-0 w-screen h-screen bg-[#edededcc] justify-center items-center">
                <label className="text-3xl mb-[2%]">Table QR</label>
                <img src={config.imageURL+'/images/qrcode/table'+tableNumber?.toString()+'.png'} alt="" />
                <button className="h-[50px] w-[120px] text-2xl text-white bg-headerRed mt-[2%] rounded-md" onClick={openQR}>Exit</button>
              </div>
            }
            <button
              onClick={openBill}
              className="flex w-full h-[50px] bg-red-500 justify-center text-2xl rounded-md hover:bg-red-400 text-white ml-[5%]"
            >
              <div className="flex flex-row h-full w-full justify-center items-center gap-3">
                PAY BILL
                <div className="flex w-[30px] h-[30px] justify-center items-center">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/1611/1611154.png"
                    className="object-contain overflow-hidden "
                  />
                </div>
              </div>
            </button>
            {showBill ? <BillPopup tableNumber={tableNumber} /> : ""}
            
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderListPage;
