import { useParams } from "react-router-dom"
import HeaderBar from "../components/HeaderBar"
import FoodForm from "../components/FoodForm"
import placeholder from '../components/img/menu_placeholder.jpg'
import { getFoodInfo } from "../api/food"
import { useEffect, useState } from "react"

const FoodPage : React.FC = () =>{
    const {id} = useParams()
    return (
        <div className="flex flex-col h-screen w-full items-center justify-center">
            <HeaderBar name="Food"/>
            <div className="flex flex-col items-center w-[90%] h-full mt-[20px] mb-[20px] border-black border-[2px] rounded-md">
                <FoodForm id={id}/>
            </div>
        </div>
    )
}

export default FoodPage