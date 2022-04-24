import jwtDecode from "jwt-decode";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getCartOrder } from "../api/cart";
import HeaderBar from "../components/HeaderBar"
import OrderListComponents from "../components/OrderListComponents"

const OrderPage: React.FC = () => {

    const decodedJWT: any = jwtDecode(localStorage.getItem('token') || '')
    const typeFood = decodedJWT.foodType
    const userTableNumber = decodedJWT.table
    //console.log(decodedJWT)
    const [getCartOreder, setCartOreder] = useState<any>([])
    const goBackMenu = useNavigate();

    const onClickBack = () => {
        goBackMenu(`/menu/${typeFood}`);
    };
    useEffect(() => {
        const getCOrder = async () => {
            const res = await getCartOrder((userTableNumber).toString())
            setCartOreder(res?.data.order)
            //console.log(res?.data.order)
            //console.log(res?.data.order)
        }
        getCOrder()

    }, []);

    console.log(getCartOreder)

    return (
        <div className="flex flex-col h-screen ">
            <HeaderBar name='ออเดอร์' />
            <div className="flex h-screen w-full items-center overflow-y-hidden justify-center bg-white">
                <div className="h-[95%] w-[95%] bg-white" >
                    <div className="h-[90%]">
                        <div className="w-[93.5%] h-[95%] m-[3%] bg-lightYellow overflow-y-scroll">
                            {getCartOreder.map((element: any, index: number) => {
                                var time = element.time.substr(11, 8) // "2013-03-10"
                                //console.log(time)
                                return <OrderListComponents order={"ออเดอร์ที่ " + (index + 1)} timeOrder={time} status={element.orderStatus} id={element._id} />

                            })}

                        </div>
                    </div>
                    <div className="flex justify-center ">
                        <button className="flex justify-center bg-headerRed h-[25%] w-[25%] min-w-[150px] max-h-[45px] max-w-[250px] text-center border-[2px] border-black" onClick={onClickBack}>
                            <label className="text-3xl text-white"> สั่งอาหาร </label>
                        </button>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default OrderPage
