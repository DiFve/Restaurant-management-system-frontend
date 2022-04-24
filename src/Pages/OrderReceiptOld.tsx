import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getCartOrder } from "../api/cart"
import HeaderBar from "../components/HeaderBar"

import ReceiptComponents from "../components/ReceiptComponents"

const OrderReceiptOld: React.FC = () => {

    var detail = [""]
    const { id } = useParams()
    const [getCartOreder, setCartOreder] = useState<any>([])
    useEffect(() => {
        const getCOrder = async () => {
            const res = await getCartOrder((3).toString())
            setCartOreder(res?.data.order)
            //console.log(res?.data.order)
            console.log(res?.data.order)
        }
        getCOrder()

    }, []);


    getCartOreder.map((data: any) => {
        if (data._id == id) {
            console.log(data.detail)
            detail = (data.detail)
        }

    })


    //const { detail } = []
    return (
        <div className="flex flex-col h-screen">
            <HeaderBar name='ใบเสร็จ' />
            <ReceiptComponents id={id} detail={detail} />

        </div>
    )
}

export default OrderReceiptOld