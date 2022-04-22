import HeaderBar from "../components/HeaderBar"
import CartComponents from "../components/CartComponents"
import OrderListComponents from "../components/OrderListComponents"

const CartPage: React.FC = () => {
    return (
        <div className="flex flex-col h-screen">
            <HeaderBar name='Cart' />
            <CartComponents />
        </div>
    )
}

export default CartPage