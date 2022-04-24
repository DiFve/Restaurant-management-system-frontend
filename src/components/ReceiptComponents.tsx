import Receiptform from "./Receiptform"
import { alacarteMenu, allMenu, buffetMenu } from '../api/menu'
import { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"
import jwtDecode from "jwt-decode"

interface idProps {
    id: string | undefined
    detail: Array<any>
    total: number
}

const ReceiptComponents: React.FC<idProps> = (props) => {
    var id = props.id
    var detail = props.detail
    var total = props.total

    const decodedJWT: any = jwtDecode(localStorage.getItem('token') || '')
    const userTableNumber = decodedJWT.table
    //console.log(decodedJWT.foodType)
    const menuType = decodedJWT.foodType
    const navigateBack = useNavigate();
    const onClickBack = () => {
        navigateBack("/orderlist");
    };
    console.log("menuType")
    console.log(menuType)
    const checkTotal = () => {
        if (menuType == "a-la-carte") //a-la-carte
        {
            return (
                <div className="flex flex-col items-end mr-[10%] my-[10%] max-my-[60px]">
                    <label className="text-3xl items-center">ยอดรวม</label>
                    <label className="text-3xl items-center">{total} -</label>
                </div>
            )
        }

    }


    return (
        <div className="flex h-screen w-full items-center overflow-y-hidden justify-center bg-white">
            <div className="h-[95%] w-[95%] bg-white" >
                <div className="h-[90%] ">
                    <div className="w-[93.5%] h-[95%] mx-[3%] bg-gray-200 overflow-y-scroll border-[2px] border-black">
                        {detail.map((element) => {
                            return <Receiptform orderName={element.foodName} detail={element.detail} price={element.price} quantity={element.quantity} menuType={menuType} />
                        })}
                        {checkTotal()}
                    </div>

                </div>

                <div className='flex flex-row h-[10%] items-center justify-center'>
                    <div className="flex justify-center w-[40%]">
                        <div className='bg-headerRed w-[50%] text-center min-h-[40px] min-w-[120px] max-w-[250px] max-h-[40px] border-[2px] border-black'>
                            <button className='pt-[3%] ' onClick={onClickBack}>
                                <label className='text-2xl text-white '> กลับ </label>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )

}
export default ReceiptComponents