import HeaderBar from "../components/HeaderBar"
import OrderListComponents from "../components/OrderListComponents"

const OrderListPage: React.FC = () => {
    const dataOrder = [
        { order: "ออเดอร์", timeOrder: "10:25:16", status: "Cancelled" },
        { order: "ออเดอร์", timeOrder: "10:25:16", status: "Complete" },
        { order: "ออเดอร์ปัจจุบัน", timeOrder: "10:25:16", status: "Working" },
        { order: "ออเดอร์", timeOrder: "10:25:16", status: "Complete" },
        { order: "ออเดอร์", timeOrder: "10:25:16", status: "Complete" },
        { order: "ออเดอร์", timeOrder: "10:25:16", status: "Cancelled" }
    ]

    return (
        <div className="flex flex-col h-screen ">
            <HeaderBar name='Cart' />
            <div className="flex h-screen w-full items-center overflow-y-hidden justify-center bg-white">
                <div className="h-[95%] w-[95%] bg-white" >
                    <div className="h-[90%]">
                        <div className="w-[93.5%] h-[95%] m-[3%] bg-lightYellow overflow-y-scroll">
                            {dataOrder.map((element) => {
                                return <OrderListComponents order={element.order} timeOrder={element.timeOrder} status={element.status} />
                            })}

                        </div>
                    </div>
                    <div className="flex justify-center ">
                        <button className="flex justify-center bg-headerRed h-[25%] w-[25%] max-w-[140px] max-h-[45px] max-w-[300 px] min-w-[100px] text-center border-[2px] border-black">
                            <label className="text-3xl text-white"> Back </label>
                        </button>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default OrderListPage