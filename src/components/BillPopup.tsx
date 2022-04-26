import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { confirmBill, getBill } from "../api/table";
import EmployeeMainPage from "../Pages/EmployeeMainPage";
import BillBox from "./BillBox";

interface items {
  tableNumber: string | undefined;
}

const BillPopup: React.FC<items> = (props) => {
  const { tableNumber } = props;

  const [billData, setBillData] = useState<any>([]);
  const [foodData, setFoodData] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const billFunction = async () => {
      var res = await getBill(tableNumber);

      console.log(res?.data);
      setBillData(res?.data);
      setFoodData(res?.data.detail);

      console.log(res?.data.detail);
    };
    billFunction();
  }, []);

  const onClickConfirmOrder = () => {
    confirmBill(tableNumber);
    navigate(`/EmployeeMain`);
  };

  const onClickRefresh = () =>{
      window.location.reload()
  }

  return (
    <div>
      <div className="flex h-screen w-screen z-10 bg-[#edededcc] absolute top-0 left-0 justify-center items-center">
        <div className=" flex flex-col absolute h-[70%] w-[50%] bg-white ">
          {/* Header */}
          <div className="flex h-[15%] w-full bg-slate-300 justify-center items-center">
            <label className="text-3xl">TABLE : {tableNumber}</label>
          </div>
          {/* Main */}
          <div className="relative h-[75%] w-full bg-slate-100">
            {/* Header Detail */}
            <div className="flex flex-col w-full h-full">
              <div className="flex flex-row w-full h-[10%] ">
                <label className="flex w-[8%] bg-slate-200 justify-center items-center">
                  No.
                </label>
                <label className="flex w-[65%] bg-slate-200 justify-center items-center">
                  Name
                </label>
                <label className="flex w-[11%] bg-slate-200 justify-center items-center">
                  QTY
                </label>
                <label className="flex w-[16%] bg-slate-200 justify-center items-center">
                  Price
                </label>
              </div>
              {/* Body Data */}
              <div className="flex flex-col w-full h-full overflow-y-scroll">
                {foodData.map((e: any, i: number) => {
                  return (
                    <BillBox
                      orderNumber={i + 1}
                      foodName={e.foodName}
                      quantity={e.quantity}
                      price={e.price}
                    />
                  );
                })}
              </div>
            </div>
          </div>
          {/* Footer */}

          <div className="relative flex h-[10%] w-full bg-slate-200 justify-center items-center">
            <div className="absolute right-3 text-[120%]">
              TOTAL : {billData.totalPrice}
            </div>
          </div>
        </div>
        <div className="flex flex-row absolute bottom-8 h-[8%] w-[50%] bg-slate-100 rounded-md text-2xl text-white justify-center">
          <button
            onClick={onClickRefresh}
            className="flex h-full w-[30%] bg-red-500 hover:bg-red-400 rounded-md text-2xl text-white justify-center items-center right-0"
          >
            BACK
          </button>
          <div className="h-full w-[10%]"> </div>
          <button
            onClick={onClickConfirmOrder}
            className="flex h-full w-[30%] bg-red-500 hover:bg-red-400 rounded-md text-2xl text-white justify-center items-center right-0"
          >
            CONFIRM
          </button>
        </div>
      </div>
    </div>
  );
};

export default BillPopup;
