import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getItemsByOrder } from "../api/table";
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

  return (
    <div className="h-screen w-screen">
      {/* Header */}
      <div className="flex flex-col bg-[#dc2626] w-full h-1/6">
        <div className="flex text-center text-white text-4xl font-normal justify-center items-center w-full h-full">
          <label>{tableNumber}</label>
        </div>
      </div>
      <div className="flex flex-col w-screen h-5/6">

        {allFoodInfo && 
          <div className="grid grid-cols-3 h-auto w-auto gap-3 m-3">
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
          }
      </div>
    </div>
  );
};

export default OrderPage;
