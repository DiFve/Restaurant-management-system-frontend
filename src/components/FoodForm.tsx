import jwtDecode from "jwt-decode";
import { MouseEventHandler, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { addFoodToCart, getFoodInfo } from "../api/food"
import config from "../config.json";
interface idProps {
    id: string | undefined
}
const FoodForm: React.FC<idProps> = (props) => {
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
    const navigate = useNavigate()
    const [foodInfo, setFoodInfo] = useState<any>(obj)
    const [foodDetail, setFoodDetail] = useState<any>(obj.detail[0])
    const [foodPic, setFoodPic] = useState('')
    const [foodPrice, setFoodPrice] = useState(0)
    const [foodOption, setFoodOption] = useState<any>([])
    const [openPopup, setOpenPopup] = useState<boolean>()
    const [number, setNumber] = useState(0)
    const [additional, setAdditional] = useState('')
    const [errorText, setErrorText] = useState('')
    const decodedJWT: any = jwtDecode(localStorage.getItem('token') || '')
    const userFoodType = Object.values(decodedJWT)[3] || 'all'
    const userTableNumber = decodedJWT.table
    useEffect(() => {
        const getFood = async () => {
            const res = await getFoodInfo(props.id)
            const foodData = res?.data
            foodData.menu.detail[0].choice.forEach((element: any, index: number) => {
                if (element == 'single') {
                    foodData.menu.detail[0].choice[index] = 'radio'
                }
                else if (element == 'multiple') {
                    foodData.menu.detail[0].choice[index] = 'checkbox'
                }
                else {
                    element = element
                }
            });
            console.log(foodData.menu)
            setFoodInfo(foodData.menu)
            setFoodDetail(foodData.menu.detail[0])
            setFoodPic(`${config.imageURL}${foodData.menu.image}`)
            if (userFoodType === 'buffet' && foodData.menu.foodType.includes('buffet')) {
                setFoodPrice(0)
            }
            else {
                setFoodPrice(foodData.menu.price)
            }
        }
        getFood()
    }, []);
    var { topicName, choice, option, require, _id, additionalPrice } = foodDetail
    const onNumberClickHandler = (event: any) => {
        var action = event.target.id
        if (action == 'plus') {
            setNumber(number + 1)
        }
        else {
            if (number > 0) {
                setNumber(number - 1)
            }
        }
    }

    const optionChangeHandler = (event: any) => {
        let newOption = [...foodOption]
        console.log(event.target.name)
        if (event.target.type == 'radio') {
            if (event.target.checked) {
                newOption[Number(event.target.name)] = [event.target.value]
            }
            else if (!event.target.checked) {
                newOption[Number(event.target.name)] = ['']
            }
        }
        else if (event.target.type == 'checkbox') {
            let newCheckBox: Array<any> = foodOption[Number(event.target.name)] || []
            console.log(newCheckBox)
            if (event.target.checked) {
                newCheckBox.push(event.target.value)
                setFoodPrice(foodPrice + additionalPrice[Number(event.target.name)][Number(event.target.id)])
            }
            else {
                newCheckBox = newCheckBox.filter((element: any) => {
                    return element != event.target.value
                })
                setFoodPrice(foodPrice - additionalPrice[Number(event.target.name)][Number(event.target.id)])
            }
            newOption[Number(event.target.name)] = newCheckBox
            console.log(newOption)
        }
        setFoodOption(newOption)
    }

    const popupHandler = (event: any) => {
        if (number > 0) {
            setOpenPopup(!openPopup)
            event.preventDefault()
        }
        else {
            setErrorText('Please Select the amount')
        }
    }
    const additionalHandler = (event: any) => {
        setAdditional(event.target.value)
    }
    const submitHandler = async (event: any) => {
        var reqBody = {
            'detail': [{
                "topicName": '',
                'option': [],
            }
            ],
            "price": 0,
            'quantity': 0,
            'foodID': '',
            //'additionalInfo' : additional
        }
        reqBody.detail.pop()
        topicName.map((element: string, index: number) => {
            var choice = {
                "topicName": '',
                "option": [],
            }
            choice.topicName = element
            choice.option = foodOption[index]
            reqBody.detail.push(choice)
        })
        reqBody.price = number * foodPrice
        reqBody.quantity = number
        if (props.id !== undefined) {
            reqBody.foodID = props.id
        }
        const res = await addFoodToCart(userTableNumber, reqBody)
        console.log(res)
        navigate(`/menu/${userFoodType}`)
    }
    return (
        <div className="flex flex-col h-full">
            <div className='flex w-[100%] h-[25%] justify-center items-center'>
                <img src={foodPic} alt="menu_thumbnail" className='w-[90%] h-[80%] max-h-[170px] min-h-[170px]' />
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
                <div className="h-[70%] w-[100%]">
                    <div className="flex flex-row w-full border-b-2 items-center justify-center">
                        <div className="h-[100%] w-[15%] break-words text-center text-4xl">

                        </div>
                        <div className="h-[100%] w-[70%] break-words text-center text-2xl font-bold max-h-[38px]">
                            <label>{foodInfo.foodName}</label>
                        </div>
                        <div className="flex h-[100%] w-[15%] break-words text-center text-xl justify-center items-center">
                            <label>{foodPrice}&nbsp;฿</label>
                        </div>
                    </div>
                    <div className="flex flex-col h-[30%] w-[100%] mt-[2%]">
                        <div className="flex h-[50%] w-[100%] justify-center items-center text-4xl text-center">
                            <button className="flex bg-headerRed h-[85%] w-[14%] rounded-[100%] text-white text-center text-5xl justify-center items-center pb-[4px]" id='minus' onClick={onNumberClickHandler}>
                                -
                            </button>
                            <label className="ml-[20px] mr-[20px] w-[32px] text-center">{number}</label>
                            <button className="flex bg-headerRed h-[85%] w-[14%] rounded-[100%] text-white text-center text-5xl justify-center items-center pb-[4px]" id='plus' onClick={onNumberClickHandler}>
                                +
                            </button>
                        </div>
                        <div className="flex flex-col h-[70%] w-[100%] justify-center items-center text-center">
                            <button className="flex bg-headerRed h-[75%] w-[50%] text-center text-3xl text-white justify-center items-center border-[2px]" onClick={popupHandler}>
                                <label htmlFor=""> Add to Cart </label>
                            </button>
                            <label htmlFor="" className="text-headerRed text-sm">{errorText}</label>
                        </div>
                    </div>
                </form>
                {openPopup &&
                    <div className="flex h-screen z-10 bg-[#edededcc] absolute w-[100%] top-0 left-0 justify-center items-center">
                        <div className="flex flex-col bg-white h-[40%] w-[80%] border-[2px] border-black">
                            <div className="flex flex-row h-[30%] w-[100%] items-center">
                                <img src={foodPic} alt="" className="h-[90%] w-[50%] ml-[3%]" />
                                <label className="text-xl ml-[2%] text-right">{'ชื่อ : ' + foodInfo.foodName}<br></br>
                                    <label className="text-sm text-headerRed">{'x' + number}</label>
                                </label>
                            </div>
                            <div className="flex flex-col h-[30%] overflow-y-scroll pl-[2%]">
                                {
                                    foodOption.map((val: any) => {
                                        return (
                                            <div>
                                                <label htmlFor="">
                                                    {
                                                        val.map((element: any) => {
                                                            return element + ','
                                                        })
                                                    }
                                                </label>

                                            </div>

                                        )
                                    })
                                }
                                Additional :&nbsp;
                                {
                                    additional
                                }
                            </div>
                            <div className="flex h-[20%] w-[100%] justify-center items-center text-center text-xl text-right">
                                <label htmlFor="">Price :&nbsp;{foodPrice * number}</label>
                            </div>
                            <div className="flex h-[20%] w-[100%] justify-center items-center text-center">
                                <button className="flex bg-headerRed h-[50%] w-[30%] text-center text-xl text-white justify-center items-center border-[2px]" onClick={submitHandler}>confirm</button>
                                <button className="flex bg-headerRed h-[50%] w-[30%] text-center text-xl text-white justify-center items-center border-[2px] ml-[5%]" onClick={popupHandler}>cancel</button>
                            </div>
                        </div>
                    </form>
                        {openPopup &&
                    <div className="flex h-screen z-10 bg-[#edededcc] absolute w-[100%] top-0 left-0 justify-center items-center ">
                        <div className="flex flex-col bg-white h-[40%] w-[80%] border-[2px] border-black max-w-[350px]">
                            <div className="flex flex-row h-[30%] w-[100%] items-center">
                                <img src={foodPic} alt="" className="h-[90%] w-[50%] ml-[3%]" />
                                <label className="text-xl ml-[2%] text-right">{'ชื่อ : ' + foodInfo.foodName}<br></br>
                                    <label className="text-sm text-headerRed">{'x' + number}</label>
                                </label>
                            </div>
                            <div className="flex flex-col h-[30%] overflow-y-scroll pl-[2%]">
                                {
                                    foodOption.map((val: any) => {
                                        return (
                                            <div>
                                                <label htmlFor="">
                                                    {
                                                        val.map((element: any) => {
                                                            return element + ','
                                                        })
                                                    }
                                                </label>

                                            </div>

                                        )
                                    })
                                }
                                Additional :&nbsp;
                                {
                                    additional
                                }
                            </div>
                            <div className="flex h-[20%] w-[100%] justify-center items-center text-center text-xl text-right">
                                <label htmlFor="">Price :&nbsp;{foodPrice * number}</label>
                            </div>
                            <div className="flex h-[20%] w-[100%] justify-center items-center text-center">
                                <button className="flex bg-headerRed h-[50%] w-[30%] text-center text-xl text-white justify-center items-center border-[2px]" onClick={submitHandler}>confirm</button>
                                <button className="flex bg-headerRed h-[50%] w-[30%] text-center text-xl text-white justify-center items-center border-[2px] ml-[5%]" onClick={popupHandler}>cancel</button>
                            </div>
                        </div>
                    </div>

                }
            </div>
        </div>
        </div >

    )
}

export default FoodForm