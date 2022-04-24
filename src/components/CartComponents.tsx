
import OrderReceipt from "./OrderReceipt"
import DontHaveOrder from './img/DontHaveOrder.png'
import { useEffect, useState } from 'react'
import { getItemInCart, deleteItemInCart, confirmItemInCart, getCartOrder } from '../api/cart'
import jwtDecode from "jwt-decode"
import { useNavigate } from "react-router-dom"


interface item {
    description: string;
    detail: Array<object>;
    foodName: string;
    foodType: string;
    price: Number;
    tableNumber: Number;
    foodID: string;
}

const CartPageComponents: React.FC = () => {
    var objAllItemMenu = [{
        "detail":
            [
                {
                    "detail": [],
                    "price": -1,
                    "foodID": "",
                    "quantity": -1,
                    "time": "",
                    "_id": ""
                }
            ]
    }]

    var totalPrice = 0

    const navigate = useNavigate();
    const onClickBack = () => {
        navigate("/orderlist");
    };

    const [getAllItem, setAllItem] = useState<any>(objAllItemMenu)
    const decodedJWT: any = jwtDecode(localStorage.getItem('token') || '')
    const userTableNumber = decodedJWT.table
    const menuType = decodedJWT.foodType


    useEffect(() => {
        const getItemCart = async () => {
            //console.log(getTableID[0].tableNumber)
            const res = await getItemInCart((userTableNumber).toString())
            setAllItem(res?.data.detail)
            //console.log(res?.data.detail)
            //console.log(res?.data.detail[0].detail)
        }
        getItemCart()

    }, []);

    getAllItem.map((priceMenu: any) => {
        totalPrice = totalPrice + (priceMenu.price * priceMenu.quantity)
    })
    //console.log(totalPrice)
    //console.log(userTableNumber)
    console.log(totalPrice)
    const totolCheck = () => {
        if (totalPrice > 0) {
            return (
                <div className="h-[15%] flex flex-col items-end pr-[5%] mx-[3%] ">
                    <label className="text-2xl items-center">ยอดรวม</label>
                    <label className="text-2xl items-center">{totalPrice} -</label>
                </div>
            )

        }
    }
    const confirm = async () => {
        const res = await confirmItemInCart((userTableNumber).toString())
        window.location.reload()
    }


    //console.log(getAllItem)
    console.log(getAllItem)
    if (getAllItem != 0) {
        return (
            <div className="flex h-screen w-full items-center overflow-y-hidden justify-center bg-white">
                <div className="h-[95%] w-[95%] bg-white" >
                    <div className="h-[90%] ">
                        <div className="w-[93.5%] h-[95%] mx-[3%] bg-lightYellow overflow-y-scroll">
                            {getAllItem.map((element: any) => {
                                return (
                                    //<div></div>
                                    <OrderReceipt
                                        orderName={element.foodName}
                                        detail={element.detail}
                                        price={element.price} quantity={element.quantity}
                                        menuType={menuType}
                                        tableNumber={userTableNumber}
                                        foodID={element._id}
                                    />
                                    //<OrderReceipt orderName={element.orderName} detail={element.detail} price={element.price} quantity={element.quantity} menuType={menuType} />
                                )
                            })}
                            {totolCheck()}
                        </div>

                    </div>

                    <div className='flex flex-row h-[10%] items-center justify-between'>
                        <div className="flex justify-center w-[40%]">
                            <div className='bg-headerRed h-[70%] w-[70%] min-h-[35px] min-w-[105px] max-w-[250px] max-h-[40px] text-center border-[2px] border-black' >
                                <button className='pt-[3%] ' onClick={onClickBack}>
                                    <label className='text-xl text-white '> กลับ </label>
                                </button>
                            </div>
                        </div>
                        <div className="flex justify-center w-[40%] ">
                            <div className='bg-headerRed h-[70%] w-[70%] min-h-[35px] min-w-[105px] max-w-[250px] max-h-[40px] text-center border-[2px] border-black'>
                                <button className='pt-[3%]' onClick={confirm}>
                                    <label className='text-xl text-white'> ยืนยัน </label>
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
                    <label className="text-2xl flex justify-center ">โอ๊ ! คุณยังไม่มี</label>
                    <label className="text-2xl flex justify-center">อะไรในตระก้าเลย</label>
                    <div className='bg-headerRed h-[25%] w-[40%] max-h-[45px] max-w-[200 px] min-w-[150px] text-center border-[2px] border-black mt-[20%]'>
                        <button className=' ' onClick={onClickBack}>
                            <label className='text-3xl text-white '> ดูออเดอร์ </label>
                        </button>
                    </div>
                </div>
            </div>
        )

    }


}

export default CartPageComponents