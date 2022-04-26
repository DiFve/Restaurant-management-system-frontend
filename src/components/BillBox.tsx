import React from "react";

interface items {
  orderNumber: number;
  foodName: string;
  quantity: number;
  price: number;
}

const BillBox: React.FC<items> = (props) => {
  const { orderNumber, foodName, quantity, price } = props;
  return (
    <div className="flex flex-row h-[40px] w-full mt-1">
      <label className="flex w-[8%] bg-slate-200 justify-center items-center">
        {orderNumber}
      </label>
      <label className="flex w-[65%] bg-slate-200 justify-center items-center overflow-ellipsis">
        {foodName}
      </label>
      <label className="flex w-[11%] bg-slate-200 justify-center items-center">
        {quantity}
      </label>
      <label className="flex w-[16%] bg-slate-200 justify-center items-center">
        {price}
      </label>
      <div></div>
    </div>
  );
};

export default BillBox;
