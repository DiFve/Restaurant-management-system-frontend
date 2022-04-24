import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getIncomingOrder } from "../api/table";
import QueueOrder from "./QueueOrder";
import config from "../config.json";

const QueueLayout: React.FC = () => {
  const example = [
    { tableNumber: 0, orderID: "" },
    { tableNumber: 5, orderID: "" },
    { tableNumber: 4, orderID: "" },
    { tableNumber: 1, orderID: "" },
  ];

  const [comingOrder, setComingOrder] = useState([]);

  useEffect(() => {
    const incomingOrder = async () => {
      const res = await getIncomingOrder();
      console.log("Queue Layout");
      console.log(res?.data);
      setComingOrder(res?.data);
    };
    incomingOrder();
  }, []);

  return (
    <div className="flex flex-col content-center text-center m-5 gap-5 min-w-[50px] ">
      {comingOrder.map((element: any) => {
        return (
          <QueueOrder
            tableNumber={element.tableNumber}
            orderID={element.orderID}
          />
        );
      })}
    </div>
  );
};

export default QueueLayout;
