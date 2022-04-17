import HeaderBar from "../components/HeaderBar"
import MenuPageBody from "../components/MenuPageBody"
import CartComponents from "../components/CartComponents"

const CartPage : React.FC = () => {
    return (
        <div className="flex flex-col h-screen">
            <HeaderBar name='Cart'/>
            <CartComponents/>
        </div>
    )
}

export default CartPage