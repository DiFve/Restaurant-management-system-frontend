import jwtDecode from "jwt-decode"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getCartOrder } from "../api/cart"
import HeaderBar from "../components/HeaderBar"

import ReceiptComponents from "../components/ReceiptComponents"

const OrderReceiptOld: React.FC = () => {

    var detail = [""]
    var total = 0
    const { id } = useParams()
    const decodedJWT: any = jwtDecode(localStorage.getItem('token') || '')
    const userTableNumber = decodedJWT.table
    const [getCartOreder, setCartOreder] = useState<any>([])
    useEffect(() => {
        const getCOrder = async () => {
            const res = await getCartOrder((userTableNumber).toString())
            setCartOreder(res?.data.order)
            //console.log(res?.data.order)
            console.log("order")
            console.log(res?.data.order)
        }
        getCOrder()

    }, []);



    getCartOreder.map((data: any) => {
        console.log("ID=")
        console.log(id)
        console.log(data._id)
        console.log("-------")
        if (data._id == id) {
            console.log(data.totalPrice)
            console.log(data.detail)
            detail = (data.detail)
            total = (data.totalPrice)
        }

    })


    //const { detail } = []
    return (
        <div className="flex flex-col h-screen">
            <HeaderBar name='ใบเสร็จ' />
            <ReceiptComponents id={id} detail={detail} total={total} />

        </div>
    )
}

export default OrderReceiptOld