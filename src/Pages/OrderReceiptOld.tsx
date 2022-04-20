import HeaderBar from "../components/HeaderBar"

import ReceiptComponents from "../components/ReceiptComponents"

const OrderReceiptOld: React.FC = () => {
    return (
        <div className="flex flex-col h-screen">
            <HeaderBar name='ใบเสร็จ' />
            <ReceiptComponents />
        </div>
    )
}

export default OrderReceiptOld