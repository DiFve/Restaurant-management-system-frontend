import { useNavigate } from "react-router-dom";

interface listOrder {
    order: string;
    status: string;
    timeOrder: string | undefined;
}

const checkStatus = (status: string) => {
    if (status == "Working") {
        return <div className="w-[10%] h-full  bg-green-600 border-r-[2px] border-black"> </div>
    }
    else {
        return <div className="w-[10%] h-full  bg-gray-300 border-r-[2px] border-black"> </div>
    }

}

const OrderListComponents: React.FC<listOrder> = (props) => {
    const { order, timeOrder, status } = props
    var navigate = useNavigate();
    const onClickOrder = () => {
        navigate("/cart");
    };
    var checkGotoOrder = false
    if (status == "Working") { checkGotoOrder = true }

    return (

        <button onClick={checkGotoOrder ? onClickOrder : undefined} className="flex flex-row h-[15%] w-[95%] mb-[10%] mt-[3%] ml-[2%] border-[2px] border-black">
            {checkStatus(status)}
            <div className="flex flex-col w-[60%] h-full">
                <div className="w-full flex justify-center ]">
                    <label className="text-2xl">{order}</label>
                </div>
                <div className="h-[10%]"></div>
                <div className="w-full flex justify-center">
                    <label className="text-2xl">{status}</label>
                </div>
            </div>
            <div className="w-[30%] h-full flex justify-end pr-[5%]">
                <label className="text-xl">{timeOrder}</label>
            </div>

        </button>
    )

}
export default OrderListComponents