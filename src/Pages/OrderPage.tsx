import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  getItemsByOrder,
  getTableOrder,
  updateOrderStatus,
} from "../api/table";
import FoodCard from "../components/FoodCard";

const OrderPage: React.FC = () => {
  const { tableNumber, id } = useParams();

  const example = [
    {
      detail: [],
      foodID: "6265b1cf778c31da876be873",
      foodName: "tork",
      foodStatus: "cooking",
      price: 0,
      quantity: 2,
      time: "2022-04-24T21:21:31.888Z",
      _id: "6265bf5b778c31da876befdd",
    },
  ];

  const [allFoodInfo, setAllFoodInfo] = useState([]);

  useEffect(() => {
    const getAllFoodInfo = async () => {
      var res = await getItemsByOrder(id);
      console.log(res?.data[0]);
      setAllFoodInfo(res?.data[0]);
    };
    getAllFoodInfo();
  }, []);

  const navigate = useNavigate();

  const gotoOrderList = () => {
    updateOrderStatus(id, "complete");
    navigate(`/EmployeeMain/Table/${tableNumber}`);
    getTableOrder(tableNumber);
  };

  const backToOrderList =()=>{
    navigate(`/EmployeeMain/Table/${tableNumber}`)
  }

  return (
    <div className="h-screen w-screen">
      {/* Header */}
      <div className="relative bg-[#dc2626] w-full h-1/6">
        <div className="flex text-center text-white text-4xl font-normal justify-center items-center w-full h-full">
          <label>TABLE : {tableNumber}</label>
          <button onClick={backToOrderList} className="absolute left-5 text-[45px]">
            <label>◄</label>
          </button>
        </div>
      </div>
      <div className="flex flex-col w-screen h-5/6">
        <div className="h-[80%] w-full overflow-scroll">
          <div className="grid grid-cols-3 h-auto w-auto gap-6 m-3">
            {allFoodInfo.map((element: any) => {
              return (
                <FoodCard
                  detail={element.detail}
                  foodID={element.foodID}
                  foodName={element.foodName}
                  foodStatus={element.foodStatus}
                  price={element.price}
                  quantity={element.quantity}
                  time={element.time}
                  _id={element._id}
                />
              );
            })}
          </div>
        </div>

        <div className="flex flex-row h-[20%] w-screen justify-center items-center">
          <div className="flex flex-col justify-center items-center h-full w-[20%]">
            <button
              onClick={gotoOrderList}
              className="flex w-full h-[50px] bg-red-500 justify-center text-2xl rounded-md hover:bg-red-400 text-white"
            >
              <div className="flex flex-row h-full w-full justify-center items-center gap-3">
                COMPLETE
                <div className="flex w-[30px] h-[30px] justify-center items-center">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/1828/1828743.png"
                    className="object-contain overflow-hidden"
                  />
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
