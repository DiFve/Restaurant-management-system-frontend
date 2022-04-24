import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { allMenu } from "../api/menu"
import HeaderBar from "../components/HeaderBar"
import MenuPageBody from "../components/MenuPageBody"
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";

const MenuPage: React.FC = () => {
    const { type } = useParams()
    const decodedJWT:any = jwtDecode(localStorage.getItem('token') || '')
    const userFoodType = decodedJWT.foodType || ''
    const navigate = useNavigate()
    if(userFoodType != type){
        navigate(`/menu/${userFoodType}`)
    }
    return (
        <div className="flex flex-col h-screen">
            <HeaderBar name='เมนู' />
            <MenuPageBody menuType={type} />
        </div>
    )
}

export default MenuPage;
