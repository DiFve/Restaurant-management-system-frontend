import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { allMenu } from "../api/menu"
import HeaderBar from "../components/HeaderBar"
import MenuPageBody from "../components/MenuPageBody"

const MenuPage : React.FC = () => {
    const {type} = useParams()
    return (
        <div className="flex flex-col h-screen">
            <HeaderBar name='Menu'/>
            <MenuPageBody menuType={type}/>
        </div>
    )
}

export default MenuPage