
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getTableByID } from '../api/table'
import OrderListBox from '../components/OrderListBox'
import HeaderBar from '../components/RestaurantManagerBar'


const OrderListPage: React.FC = (props) => {
    var obj =
    {
        "detail":
            [
                {
                    "foodID": ""
                    ,
                    "foodStatus": ""
                    ,
                    "quantity": 0
                    ,
                    "time": ""
                    ,
                    "_id": ""
                }
            ]
    }

    const { id } = useParams()
    const [tableByID, setTableByID] = useState(0)
    const [detailInfo, setDetailInfo] = useState(obj.detail)

    useEffect(() => {


        const getAllTableByID = async () => {
            var res = await getTableByID(id)
            setTableByID(res?.data.tableNumber)

            setDetailInfo(res?.data.orderList.detail)

            console.log(res?.data)
        }
        getAllTableByID()

    }, [])



    const def = "bg-slate-300 p-8"

    const example = [
        { foodID: "ไก่ทอด", quantity: 2, foodStatus: "cooking" },
        { foodID: "ไก่ทอด", quantity: 2, foodStatus: "fail" },
        { foodID: "ไก่ทอด", quantity: 2, foodStatus: "success" },
        { foodID: "ไก่ทอด", quantity: 2, foodStatus: "wrong" },
        { foodID: "ไก่ทอด", quantity: 2, foodStatus: "success" },
        { foodID: "ไก่ทอด", quantity: 2, foodStatus: "success" },
    ]

    return (
        <div className="w-screen h-screen">
            <HeaderBar name={tableByID} />
            <div className="grid grid-cols-4 gap-2 m-2">
                {detailInfo.map((element) => {
                    return <OrderListBox foodID={element.foodID} quantity={element.quantity} foodStatus={element.foodStatus} />
                })}
            </div>
        </div>
    )

}

export default OrderListPage