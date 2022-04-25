import HeaderBar from "../components/HeaderBar"
import CartPageComponents from "../components/CartComponents"


const CartPage: React.FC = () => {
    return (
        <div className="flex flex-col h-screen">
            <HeaderBar name='ตะกร้ารถเข็น' />
            <CartPageComponents />
        </div>
    )
}

export default CartPage