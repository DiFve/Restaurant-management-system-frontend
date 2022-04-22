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
    const [foodOption,setFoodOption] = useState<Array<any>>([])
    const [openPopup,setOpenPopup] = useState<boolean>()
    const [number,setNumber] = useState(0)
    const userFoodType:string = 'buffet'
    useEffect(() => {
        const getFood = async () => {
            const res = await getFoodInfo(props.id)
            const foodData = res?.data
            foodData.menu.detail[0].choice.forEach((element:any,index:number) => {
                if(element=='single'){
                    foodData.menu.detail[0].choice[index]='radio'
                }
                else if( element =='multiple'){
                    foodData.menu.detail[0].choice[index]='checkbox'
                }
                else{
                    element=element
                }
            });
            console.log(foodData.menu)
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
    var {topicName,choice,option,require,_id,additionalPrice} = foodDetail
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

    const optionChangeHandler = (event:any)=>{
        let newOption = [...foodOption]
            console.log(event.target.id)
        if(event.target.type == 'radio'){
            if (event.target.checked){
                newOption[Number(event.target.id)] = [event.target.value]
            }
            else if(!event.target.checked){
                newOption[Number(event.target.id)] = ['']
            }
        }
        else if(event.target.type == 'checkbox'){
            let newCheckBox:Array<any> = foodOption[Number(event.target.id)] || []
            console.log(newCheckBox)
            if (event.target.checked){
                newCheckBox.push(event.target.value)
            }
            else{
                newCheckBox=newCheckBox.filter((element:any)=>{
                    return element != event.target.value    
                })
            }
            newOption[Number(event.target.id)]=newCheckBox
            console.log(newCheckBox)
        } 
        setFoodOption(newOption)
    }

    const popupHandler = (event:any)=>{
        setOpenPopup(!openPopup)
    }
    return(
            <div className="flex flex-col h-full">
                <div className='flex w-[100%] h-[25%] justify-center items-center'>
                    <img src={foodPic} alt="menu_thumbnail" className='w-[90%] h-[80%] max-h-[170px] min-h-[170px]'/>
                </div>
                <div className="h-[70%] w-[100%]">
                    <div className="flex flex-row w-full border-b-2 items-center justify-center">
                        <div className="h-[100%] w-[22.5%] break-words text-center text-4xl">
                            
                        </div>
                        <div className="h-[100%] w-[55%] break-words text-center text-3xl font-bold">
                            <label>{foodInfo.foodName}</label>
                        </div>
                        <div className="flex h-[100%] w-[22.5%] break-words text-center text-2xl justify-center items-center">
                            <label>{foodPrice}&nbsp;฿</label>
                        </div>
                    </div>
                    <div className="h-[15%] w-[100%] pl-[3%] pr-[4%] break-words overflow-y-scroll border-b-2">
                        <label className="text-2xl">Details : </label>
                        <p className="text-xl">{foodInfo.description}</p>
                    </div>
                    <div className="flex flex-col h-[53%] w-[100%] mt-[2%] pl-[3%] pr-[4%] overflow-y-scroll border-b-2 min-h-[200px]">
                        <form className="text-2xl w-[100%]">
                            {  
                                topicName.map((val:any,index:number)=>{
                                    var indexUP = index
                                    if(val !== ''){
                                        return(
                                            <fieldset id={index.toString()} onChange={optionChangeHandler}>
                                                <label>{val}</label>
                                                {
                                                    option[index].map((val:any,index:number)=>{
                                                        if(require[indexUP]==="true"){
                                                            return(
                                                                <div className="ml-[10%] text-xl" >
                                                                    <input className='' id={indexUP.toString()} type={choice[indexUP]} value={val} name={topicName[indexUP]} required/>
                                                                    <label className="pl-[2%]">{val}</label>
                                                                    <label className="pl-[5%] text-base text-hardYellow">{'+ ' + additionalPrice[indexUP][index] + ' ฿'}</label>
                                                                </div>
                                                            )
                                                        }
                                                        else if(require[indexUP]==='false'){
                                                            return(
                                                                <div className="ml-[10%] text-xl" >
                                                                    <input className='' id={indexUP.toString()} type={choice[indexUP]} value={val} name={topicName[indexUP]}/>
                                                                    <label className="pl-[2%]">{val}</label>
                                                                    <label className="pl-[5%] text-base text-hardYellow">{'+ ' + additionalPrice[indexUP][index] + ' ฿'}</label>
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
                        <div className="flex h-[50%] w-[100%] justify-center items-center text-4xl text-center">
                            <button className="flex bg-headerRed h-[85%] w-[15%] rounded-[50%] text-white text-center text-5xl pl-[4%]" id='minus' onClick={onNumberClickHandler}>-</button>
                            <label className="ml-[20px] mr-[20px] w-[32px] text-center">{number}</label>
                            <button className="flex bg-headerRed h-[85%] w-[15%] rounded-[50%] text-white text-center text-5xl pl-[4%]" id='plus' onClick={onNumberClickHandler}>+</button>
                        </div>
                        <div className="flex h-[50%] w-[100%] justify-center items-center text-center">
                            <button className="flex bg-headerRed h-[75%] w-[50%] text-center text-3xl text-white justify-center items-center border-[2px]" onClick={popupHandler}>
                                <label htmlFor=""> Add to Cart </label>
                            </button>
                        </div>
                    </div>
                </div>
                {openPopup &&
                    <div className="flex h-screen z-10 bg-[#edededcc] absolute w-[100%] top-0 left-0 justify-center items-center">
                        <div className="flex flex-col bg-white h-[40%] w-[80%] border-[2px] border-black">
                            <div className="flex flex-row h-[30%] w-[100%] items-center">
                                <img src={foodPic} alt="" className="h-[90%] w-[50%] ml-[3%]"/>
                                <label className="text-xl ml-[2%] text-right">{'ชื่อ : '+foodInfo.foodName}<br></br>
                                    <label className="text-sm text-headerRed">{'x'+number}</label>
                                </label>
                            </div>
                            <div className="flex flex-col h-[50%] bg-red-200 overflow-y-scroll">

                            </div>
                            <div  className="flex h-[20%] w-[100%] justify-center items-center text-center">
                                <button className="flex bg-headerRed h-[50%] w-[30%] text-center text-xl text-white justify-center items-center border-[2px]">confirm</button>
                                <button className="flex bg-headerRed h-[50%] w-[30%] text-center text-xl text-white justify-center items-center border-[2px] ml-[5%]" onClick={popupHandler}>cancel</button>
                            </div>
                        </div>
                    </div>
                
                }
            </div>
        
    )
}

export default FoodForm