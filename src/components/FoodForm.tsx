import { MouseEventHandler, useState } from "react"

interface Food{
    id:string | undefined
}
const FoodForm : React.FC<Food> = (props) =>{
    var foodDetail:string = 'asasdfasdfasdfasasdfaghujwrjtdfasdf'
    var obj = 
    { 
        "detail": 
        [
            {
                "topicName": [
                    "Spicy",
                    "Happiness",
                    "Taste",
                ],
                "choice": [
                    "single",
                    "single",
                    "single"
                ],
                "option": [
                    [
                        "PhetNoi",
                        "PhetKlang",
                        "PhetMak"
                    ],
                    [
                        "Rare",
                        "Medium",
                        "Medium-rare"
                    ],
                    [
                        "Khem",
                        "MaiKhem",
                        "Khem muen hee"
                    ]
                ],
                "require": [
                        "true",
                        "true",
                        "false"
                ],
                "_id": "62543514d8df66ccde71ea08"
            }
        ]
    }
    const [number,setNumber] = useState(0)
    var {topicName,choice,option,require,_id} = obj.detail[0]
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
    console.log(topicName)
    return(
        <div className="h-[70%] w-[100%]">
            <div className="h-[20%] w-[100%] pl-[3%] pr-[4%] break-words overflow-y-scroll border-b-2">
                <label className="text-2xl">Details : </label>
                <p className="text-2xl">{foodDetail}</p>
            </div>
            <div className="flex flex-col h-[55%] w-[100%] mt-[2%] pl-[3%] pr-[4%] overflow-y-scroll">
                <form className="text-2xl w-[100%]">
                    {  
                        topicName.map((val,index)=>{
                            return(
                                <fieldset id={'group ' + index}>
                                    <label>{val}</label>
                                    {
                                        option[index].map((val)=>{
                                            if(require[index]==="true"){
                                                return(
                                                    <div className="ml-[10%]">
                                                        <input className='indent-3' type="radio" value={val} name={topicName[index]} required/>
                                                        <label>{val}</label>
                                                    </div>
                                                )
                                            }
                                            else if(require[index]==='false'){
                                                return(
                                                    <div className="ml-[10%]">
                                                        <input className='indent-3' type="radio" value={val} name={topicName[index]}/>
                                                        <label>{val}</label>
                                                    </div>
                                                )
                                            }
                                        })
                                    }
                                </fieldset>
                            )
                        })
                    }
                    <label>Additional : </label>
                    <textarea className="bg-gray-100 border border-black">
                    </textarea>
                </form>
                    
            </div>
            <div className="flex flex-col h-[24%] w-[100%] overflow-y-scroll">
                <div className="flex h-[50%] w-[100%] justify-center items-center text-4xl">
                    <button className="flex bg-headerRed h-[100%] w-[17%] rounded-[50%]" id='minus' onClick={onNumberClickHandler}>-</button>
                    <label className="ml-[20px] mr-[20px] w-[32px] text-center">{number}</label>
                    <button className="flex bg-headerRed h-[100%] w-[17%] rounded-[50%]" id='plus' onClick={onNumberClickHandler}>+</button>
                </div>
                <div className="flex h-[50%] w-[100%] justify-center items-center text-center">
                    <button className="flex bg-headerRed h-[75%] w-[50%] text-center text-3xl text-white justify-center items-center border-[2px]">
                        <label htmlFor=""> Confirm </label>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default FoodForm