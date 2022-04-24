import React from "react";
import { useParams } from "react-router-dom";

const OrderPage: React.FC = () => {
  const { tableNumber, id } = useParams();
  return (
    <div className="h-screen w-screen">
      {/* Header */}
      <div className="flex flex-col bg-[#dc2626] w-full h-1/6">
        <div className="flex text-center text-white text-4xl font-normal justify-center items-center w-full h-full">
          <label>Each Order Page</label>
        </div>
      </div>
      
      <div className="w-screen h-5/6">
        <div className="grid grid-cols-4 gap-2"></div>
      </div>
    </div>
  );
};

export default OrderPage;
