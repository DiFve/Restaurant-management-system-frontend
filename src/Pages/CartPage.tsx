import HeaderBar from "../components/HeaderBar"
import CartPageComponents from "../components/CartComponents"


const CartPage: React.FC = () => {
    return (
        <div className="flex flex-col h-screen">
            <HeaderBar name='Cart' />
            <CartPageComponents />
        </div>
    )
}

export default CartPage