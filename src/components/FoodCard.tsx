import { useEffect, useState } from "react";
import { updateOrderStatus } from "../api/table";

interface Food {
  detail: [];
  foodID: string;
  foodName: string;
  foodStatus: string;
  price: number;
  quantity: number;
  time: string;
  _id: string;
}

const FoodCard: React.FC<Food> = (props) => {
  const { detail, foodID, foodName, foodStatus, price, quantity, time, _id } =
    props;

  const [changeStatus, setChangeStatus] = useState(foodStatus);

  const onClickComplete = () => {
    updateOrderStatus(_id, "complete");
    setChangeStatus("complete");
  };

  const onClickFail = () => {
    updateOrderStatus(_id, "fail");
    setChangeStatus("fail");
  };

  var colorStatus = "";
  if (changeStatus == "complete") {
    colorStatus =
      "bg-green-400 w-[10%] rounded-tl-md rounded-bl-md text-transparent";
  } else if (foodStatus == "cooking") {
    colorStatus =
      "bg-yellow-400 w-[10%] rounded-tl-md rounded-bl-md text-transparent";
  } else if (foodStatus == "fail") {
    colorStatus =
      "bg-red-400 w-[10%] rounded-tl-md rounded-bl-md text-transparent";
  } else {
    colorStatus = "bg-black";
  }

  return (
    <div>
      <div className="relative">
        <div className="flex flex-row bg-slate-200 text-black  border-r-1 text-xl rounded-xl ">
          <div className={colorStatus}>.</div>
          <div className="flex flex-col w-[90%] h-full indent-2">
            <div className="w-full">{foodName}</div>
            <div className="">จำนวน : x{quantity}</div>
            <div>
              วันที่ : {time.substring(0, 10).substring(8, 10)}/
              {time.substring(0, 10).substring(5, 7)}/
              {time.substring(0, 10).substring(0, 4)}
            </div>
            <div className="">เวลา : {time.substring(11, 19)} </div>
            <div className=" text-transparent text-xs">.</div>
          </div>
          <div className="absolute right-2 bottom-4">{price} ฿</div>
          {changeStatus == "cooking" ? (
            <div className="absolute -bottom-2 w-full h-[20px] ">
              <div className="flex flex-row w-full h-full">
                <div className="flex w-[10%] h-full"></div>
                <div className="flex flex-row w-[80%] h-full gap-5">
                  <button
                    onClick={onClickFail}
                    className="flex w-[50%] h-full bg-red-300 rounded-sm justify-center text-[16px] items-center"
                  >
                    FAIL
                  </button>
                  <button
                    onClick={onClickComplete}
                    className="flex w-[50%] h-full bg-green-300  rounded-sm justify-center text-[16px] items-center"
                  >
                    COMPLETE
                  </button>
                </div>
                <div className="flex w-[10%] h-full"></div>
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

export default FoodCard;
