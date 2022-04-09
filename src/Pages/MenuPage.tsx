import HeaderBar from "../components/HeaderBar"
import MenuPageBody from "../components/MenuPageBody"

const MenuPage : React.FC = () => {
    return (
        <div className="flex flex-col h-screen">
            <HeaderBar/>
            <MenuPageBody/>
        </div>
    )
}

export default MenuPage