import { useParams } from "react-router-dom"
import HeaderBar from "../components/HeaderBar"
import FoodForm from "../components/FoodForm"
import placeholder from '../components/img/menu_placeholder.jpg'

const FoodPage : React.FC = () =>{
    const {id} = useParams()
    console.log(id)
    return (
        <div className="flex flex-col h-screen w-full items-center">
            <HeaderBar name="Im Ar Roi"/>
            <div className="flex flex-col items-center w-[90%] h-[80%] mt-[40px] border-black border-[2px]">
                <div className='flex w-[100%] h-[30%] justify-center items-center'>
                    <img src={placeholder} alt="menu_thumbnail" className='w-[90%] h-[80%]'/>
                </div>
                <FoodForm id={id}/>
            </div>
        </div>
    )
}

export default FoodPage