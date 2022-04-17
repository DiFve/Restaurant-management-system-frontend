import { useParams } from "react-router-dom"
import HeaderBar from "../components/HeaderBar"
import FoodForm from "../components/FoodForm"
import OrderReceipt from "./CartPageBody"



const CartPage: React.FC = () => {
    const data = [
        { orderName: "ข้าวผัดกุ้งมุ่งใส่กระเทียม", detail: "พิเศษ", price: 100 },
        { orderName: "ผัดกระเพรากุ้ง", detail: "พิเศษ", price: 250 },
        { orderName: "ผัดกระเพรากุ้งไม่ใส่ใบกระเพราว้าวๆวุ้วหุ้วว", detail: "พิเศษ", price: 10000 },
        { orderName: "ผัดกระเพรากุ้งไม่ใส่ใบกระเพรา", detail: "พิเศษจ้า", price: 10000 },
        { orderName: "ผัดกระเพรากุ้งไม่ใส่ใบกระเพรา", detail: "พิเศษงุงิ", price: -200 },
        { orderName: "ผัดกระเพรากุ้งไม่ใส่ใบกระเพรา", detail: "พิเศษเลือดน้อย", price: 10000 }
    ]
    return (
        <div className="flex h-screen w-full items-center overflow-y-hidden justify-center bg-black">
            <div className="h-[90%] w-[85%] bg-white" >
                <div className="h-[90%] ">
                    <div className="w-[93.5%] h-[80%] m-[3%] bg-red-300 overflow-y-scroll ">
                        {data.map((element) => {
                            return <OrderReceipt orderName={element.orderName} detail={element.detail} price={element.price} />
                        })}
                    </div>
                    <div className="h-[15%] flex justify-end bg-black">
                        <label className="ยอดรวม"></label>
                    </div>
                </div>

                <div className='flex flex-row h-[16%] items-center bg-black justify-between'>
                    <div className="flex justify-center w-[40%]">
                        <div className='bg-headerRed h-[40%] w-[70%] text-center border-[2px] border-black'>
                            <button className='pt-[3%]'>
                                <label className='text-xl text-white '> Back </label>
                            </button>
                        </div>
                    </div>
                    <div className="flex justify-center w-[40%] ">
                        <div className='bg-headerRed h-[40%] w-[70%] text-center border-[2px] border-black'>
                            <button className='pt-[3%]'>
                                <label className='text-xl text-white'> Comfirm </label>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default CartPage