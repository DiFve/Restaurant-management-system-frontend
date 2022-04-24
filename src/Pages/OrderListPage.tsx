import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTableOrder } from "../api/table";
import OrderListBox from "../components/OrderListBox";
import HeaderBar from "../components/RestaurantManagerBar";



const OrderListPage: React.FC = (props) => {
  const { tableNumber } = useParams();

  const [allTableOrder, setAllTableOrder] = useState([]);

  console.log(allTableOrder);

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
      <HeaderBar name={tableNumber} />
      <div className="grid grid-cols-4 gap-2 m-2">
        {allTableOrder &&
          allTableOrder.map((element: any, index: number) => {
            return (
              <OrderListBox tableNumber={tableNumber} orderNumber={index + 1} orderStatus={element.orderStatus} orderID={element._id} />
            )


          })}
      </div>
    </div>
  );
};

export default OrderListPage;
