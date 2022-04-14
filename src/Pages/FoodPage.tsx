import { useParams } from "react-router-dom"
import HeaderBar from "../components/HeaderBar"
import FoodForm from "../components/FoodForm"
import placeholder from '../components/img/menu_placeholder.jpg'
import { getFoodInfo, getFoodPic } from "../api/food"
import { useEffect, useState } from "react"

const FoodPage : React.FC = () =>{
    const {id} = useParams()
    return (
        <div className="flex flex-col h-screen w-full items-center overflow-y-hidden">
            <HeaderBar name="Im Ar Roi"/>
            <div className="flex flex-col items-center w-[90%] h-[80%] mt-[40px] border-black border-[2px]">
                <FoodForm id={id}/>
            </div>
        </div>
    )
}

export default FoodPage