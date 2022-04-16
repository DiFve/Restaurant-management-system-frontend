import { MouseEventHandler, useEffect, useState } from "react"
import { getFoodInfo } from "../api/food"
import config from "../config.json";
interface idProps{
    id:string | undefined
}
const FoodForm : React.FC<idProps> = (props) =>{
    var obj = 
    { 
        "detail": 
        [
            {
                "topicName": [
                ],
                "choice": [
                ],
                "option": [
                ],
                "require": [
                ],
                "_id": ""
            }
        ]
    }
    const [foodInfo,setFoodInfo] = useState<any>(obj)
    const [foodDetail,setFoodDetail] = useState<any>(obj.detail[0])
    const [foodPic,setFoodPic] = useState('')
    const [foodPrice,setFoodPrice] = useState(0)
    const userFoodType:string = 'buffet'
    useEffect(() => {
        const getFood = async () => {
            const res = await getFoodInfo(props.id)
            const foodData = res?.data
            setFoodInfo(foodData.menu)
            setFoodDetail(foodData.menu.detail[0])
            setFoodPic(`${config.imageURL}${foodData.menu.image}`)
            if(userFoodType==='buffet' && foodData.menu.foodType.includes('buffet')){
                setFoodPrice(0)
            }
            else{
                setFoodPrice(foodData.menu.price)
            }
        }
        getFood()
      }, []);
    const [number,setNumber] = useState(0)
    var {topicName,choice,option,require,_id} = foodDetail
    const onNumberClickHandler=(event:any)=>{
        var action = event.target.id
        if(action == 'plus'){
            setNumber(number+1)
        }
        else {
            if(number > 0){
                setNumber(number-1)
            }
        }
    }
    return(
        <div className="flex flex-col h-full">
            <div className='flex w-[100%] h-[25%] justify-center items-center'>
                <img src={foodPic} alt="menu_thumbnail" className='w-[90%] h-[80%] max-h-[170px] min-h-[170px]'/>
            </div>
            <div className="h-[70%] w-[100%]">
                <div className="flex flex-row w-full bg-red-200 border-b-2 items-center justify-center">
                    <div className="h-[100%] w-[22.5%] break-words text-center text-4xl">
                        
                    </div>
                    <div className="h-[100%] w-[55%] break-words text-center text-3xl">
                        <label>{foodInfo.foodName}</label>
                    </div>
                    <div className="flex h-[100%] w-[22.5%] break-words text-center text-2xl justify-center items-center">
                        <label>{foodPrice}&nbsp;฿</label>
                    </div>
                </div>
                <div className="h-[15%] w-[100%] pl-[3%] pr-[4%] break-words overflow-y-scroll border-b-2">
                    <label className="text-2xl">Details : </label>
                    <p className="text-2xl">{foodInfo.description}</p>
                </div>
                <div className="flex flex-col h-[53%] w-[100%] mt-[2%] pl-[3%] pr-[4%] overflow-y-scroll border-b-2 min-h-[200px]">
                    <form className="text-2xl w-[100%]">
                        {  
                            topicName.map((val:any,index:number)=>{
                                if(val !== ''){
                                    return(
                                        <fieldset id={'group ' + index}>
                                            <label>{val}</label>
                                            {
                                                option[index].map((val:any)=>{
                                                    if(require[index]==="true"){
                                                        return(
                                                            <div className="ml-[10%]">
                                                                <input className='' type="radio" value={val} name={topicName[index]} required/>
                                                                <label>{val}</label>
                                                            </div>
                                                        )
                                                    }
                                                    else if(require[index]==='false'){
                                                        return(
                                                            <div className="ml-[10%]">
                                                                <input className='' type="radio" value={val} name={topicName[index]}/>
                                                                <label>{val}</label>
                                                            </div>
                                                        )
                                                    }
                                                })
                                            }
                                        </fieldset>
                                    )
                                }
                                else{
                                    return(
                                        <div>
                                            
                                        </div>
                                    )
                                }
                            })
                        }
                        <label>Additional : </label>
                        <textarea className="bg-gray-100 border border-black">
                        </textarea>
                    </form>
                        
                </div>
                <div className="flex flex-col h-[24%] w-[100%] overflow-y-scroll">
                    <div className="flex h-[50%] w-[100%] justify-center items-center text-4xl">
                        <button className="flex bg-headerRed h-[85%] w-[15%] rounded-[50%]" id='minus' onClick={onNumberClickHandler}>-</button>
                        <label className="ml-[20px] mr-[20px] w-[32px] text-center">{number}</label>
                        <button className="flex bg-headerRed h-[85%] w-[15%] rounded-[50%]" id='plus' onClick={onNumberClickHandler}>+</button>
                    </div>
                    <div className="flex h-[50%] w-[100%] justify-center items-center text-center">
                        <button className="flex bg-headerRed h-[75%] w-[50%] text-center text-3xl text-white justify-center items-center border-[2px]">
                            <label htmlFor=""> Confirm </label>
                        </button>
                    </div>
                </div>
            </div>

        </div>
        
    )
}

export default FoodForm