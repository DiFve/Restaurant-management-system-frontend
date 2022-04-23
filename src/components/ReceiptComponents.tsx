import OrderReceipt from "./OrderReceipt"
import { alacarteMenu, allMenu, buffetMenu } from '../api/menu'
import { useEffect, useState } from 'react'

const ReceiptComponents: React.FC = () => {
    var totalPrice = 1000
    const menuType = "alacarte"

    const data = [
        { orderName: "ผัดกระเพรากุ้งรุ้งๆ", detail: [""], price: 1000 },
        { orderName: "ข้าวผัดกุ้งมุ่งใส่กระเทียม", detail: ["พิเศษ", "ใส่ไข่", "ใส่ตูด"], price: 100, quantity: 2 },
        { orderName: "ผัดกระเพรากุ้ง", detail: ["พิเศษ"], price: 250, quantity: 2 },
        { orderName: "ผัดกระเพรากุ้งไม่ใส่ใบกระเพราว้าวๆวุ้วหุ้วว", detail: ["พิเศษ"], price: 10000, quantity: 1 },
        { orderName: "ผัดกระเพรากุ้งไม่ใส่ใบกระเพรา", detail: ["พิเศษจ้า"], price: 9999, quantity: 2 },
        { orderName: "ผัดกระเพรากุ้งไม่ใส่ใบกระเพรา", detail: ["พิเศษงุงิ"], price: -200, quantity: 9 },
        { orderName: "ผัดกระเพรากุ้งไม่ใส่ใบกระเพรา", detail: ["พิเศษ", "ใส่ไข่", "ใส่ตูด"], price: 1000, quantity: 5 },
        { orderName: "ผัดกระเพรากุ้ง", detail: [""], price: 0, quantity: 0 },
    ]


    return (
        <div className="flex h-screen w-full items-center overflow-y-hidden justify-center bg-white">
            <div className="h-[95%] w-[95%] bg-white" >
                <div className="h-[90%] ">
                    <div className="w-[93.5%] h-[95%] mx-[3%] bg-gray-100 overflow-y-scroll border-[2px] border-black">
                        {data.map((element) => {
                            return <OrderReceipt orderName={element.orderName} detail={element.detail} price={element.price} quantity={element.quantity} menuType={menuType} />
                        })}
                        <div className="h-[15%] flex justify-between pr-[5%] mx-[3%] ">
                            <div className="w-[50%] flex flex-col justify-center items-center">
                                <label className="text-5xl text-red-600">  </label>
                            </div>
                            <div className="w-[50%] flex flex-col items-end">
                                <label className="text-2xl items-center">ยอดรวม</label>
                                <label className="text-2xl items-center">{totalPrice} -</label>
                            </div>
                        </div>

                    </div>

                </div>

                <div className='flex flex-row h-[10%] items-center justify-center'>
                    <div className="flex justify-center w-[40%]">
                        <div className='bg-headerRed w-[50%] text-center min-h-[40px] min-w-[120px] max-w-[250px] max-h-[40px] border-[2px] border-black'>
                            <button className='pt-[3%] '>
                                <label className='text-2xl text-white '> Back </label>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )

}
export default ReceiptComponents