import { useNavigate } from "react-router-dom";
import ReceiptComponents from "./ReceiptComponents";

interface listOrder {
    order: string;
    status: string;
    timeOrder: string | undefined;
    id: string | undefined;
}

const checkStatus = (status: string) => {
    if (status == "cooking") {
        return <div className="w-[10%] h-full  bg-yellow-300 border-r-[2px] border-black"> </div>
    }
    else {
        return <div className="w-[10%] h-full  bg-green-300 border-r-[2px] border-black"> </div>
    }

}

const OrderListComponents: React.FC<listOrder> = (props) => {
    //console.log(props)
    const { order, timeOrder, status, id } = props
    var goCart = useNavigate();
    var goReceipt = useNavigate();
    const onClickOrder = () => {
        goCart("/cart");
    };
    const onClickReceipt = () => {
        goReceipt(`/receipt/${id}`)
    }

    return (

        <button onClick={onClickReceipt} className="flex flex-row h-[15%] w-[95%] mb-[10%] mt-[3%] ml-[2%] border-[2px] border-black">
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