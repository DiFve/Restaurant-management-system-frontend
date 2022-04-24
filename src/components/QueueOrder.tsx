import React from "react";
import { useNavigate } from "react-router-dom";
import OrderPage from "../Pages/OrderPage";

interface OrderList {
  tableNumber: number;
  orderID: string;
}

const QueueOrder: React.FC<OrderList> = (props) => {
  const { tableNumber, orderID } = props;

  const navigate = useNavigate();

  const goToOrderPage = () => {
    navigate(`/EmployeeMain/Table/${tableNumber}/${orderID}`);
  };

  return (
    <div className="h-full w-full ">
      <button
        onClick={goToOrderPage}
        className="bg-white shadow-md hover:bg-slate-100 rounded-md min-h-[50px] w-full xl:text-2xl md:text-xl sm:text-md"
      >
        <div>
          <h3>TABLE {tableNumber}</h3>
        </div>
      </button>
    </div>
  );
};

export default QueueOrder;
