
import OrderReceipt from "./OrderReceipt"
import DontHaveOrder from './img/DontHaveOrder.png'
import { useEffect, useState } from 'react'
import { alacarteMenu, allMenu, buffetMenu } from '../api/menu'

interface item {
    detail: Array<object>;
    foodName: string;
    foodType: string;
    pricce: Number;
}

const CartPage: React.FC = () => {
    //const menuType = "buffet"
    const menuType = "alacarte"
    var totalPrice = 1000
    var check = 0

    const [menu, setMenu] = useState('')


    useEffect(() => {
        const getMenu = async () => {
            var res = await alacarteMenu()

            setMenu(res?.data)

        }
        getMenu()

    }, []);


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

    if (check == 0) {
        return (
            <div className="flex h-screen w-full items-center overflow-y-hidden justify-center bg-white">
                <div className="h-[95%] w-[95%] bg-white" >
                    <div className="h-[90%] ">
                        <div className="w-[93.5%] h-[95%] mx-[3%] bg-lightYellow overflow-y-scroll">
                            {data.map((element) => {
                                return (
                                    <OrderReceipt orderName={element.orderName} detail={element.detail} price={element.price} quantity={element.quantity} menuType={menuType} />
                                )
                            })}

                            <div className="h-[15%] flex flex-col items-end pr-[5%] mx-[3%] ">
                                <label className="text-2xl items-center">ยอดรวม</label>
                                <label className="text-2xl items-center">{totalPrice} -</label>
                            </div>

                        </div>

                    </div>

                    <div className='flex flex-row h-[10%] items-center justify-between'>
                        <div className="flex justify-center w-[40%]">
                            <div className='bg-headerRed h-[70%] w-[70%] min-h-[35px] min-w-[105px] max-w-[250px] max-h-[40px] text-center border-[2px] border-black'>
                                <button className='pt-[3%] '>
                                    <label className='text-xl text-white '> Back </label>
                                </button>
                            </div>
                        </div>
                        <div className="flex justify-center w-[40%] ">
                            <div className='bg-headerRed h-[70%] w-[70%] min-h-[35px] min-w-[105px] max-w-[250px] max-h-[40px] text-center border-[2px] border-black'>
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

    else {
        return (
            <div className="flex h-screen w-screen items-center overflow-y-hidden justify-center bg-white ">
                <div className="h-[95%] w-[95%] flex flex-col justify-center items-center mb-[5%] max-h-[450px] max-w-[650px] "  >
                    <img src={DontHaveOrder} alt="" className="max-h-[450px]" />
                    <label className="text-2xl flex justify-center ">uh..You don't have</label>
                    <label className="text-2xl flex justify-center">any order now</label>
                    <div className='bg-headerRed h-[25%] w-[25%] max-h-[45px] max-w-[300 px] min-w-[100px] text-center border-[2px] border-black mt-[20%]'>
                        <button className='pt-[3%] '>
                            <label className='text-3xl text-white '> Back </label>
                        </button>
                    </div>
                </div>
            </div>
        )

    }


}

export default CartPage