import search_icon from './img/search_icon.png'
import menu_placeholder from './img/menu_placeholder.png'
import MenuComponent from './MenuComponent'
import { useEffect, useState } from 'react'
import { alacarteMenu, allMenu, buffetMenu } from '../api/menu'
interface menuType{
    menuType:string | undefined
}
const MenuPageBody : React.FC<menuType> = (props) => {
    var menuType = props.menuType
    const [menu,setMenu] = useState([])
    const [options,setoptions] = useState<Array<string>>([])
    const [filter,setFilter] = useState('all')
    const [filMenu,setFilMenu] = useState<any>([])
    const [search,setSearch] = useState<string>('')
    const optionHandler = (event:any) =>{
        setFilter(event.target.value)
    }
    const searchHandler = (event:any) =>{
        console.log(event.target.value)
        setSearch(event.target.value)
    }
    useEffect(() => {
        const getMenu = async () => {
            if(menuType === 'buffet'){
                var res = await buffetMenu()
            }
            else if(menuType === 'all'){
                var res = await allMenu()
            }
            else{
                var res = await alacarteMenu()
            }
            var menuAll = res?.data
            setMenu(menuAll)
            setFilMenu(menuAll)
            var optionArr:Array<string> = ['all']
            menuAll.forEach((element:any) => {
                element.type.map((val:string)=>{
                    if(!(optionArr.includes(val))){
                        optionArr.push(val)
                    }
                })
            });
            setoptions(optionArr)
        }
        getMenu()
        const cycleGetMenu = setInterval(()=>{
            console.log('re-request Menu')
            getMenu()
        },10000)
        return ()=> clearInterval(cycleGetMenu)
    }, []);
    useEffect(()=>{
        const filterChange=()=>{
            var newMenu:any = []
            if(filter != 'all'){
                menu.filter((element:any,index)=>{
                    if(element.type.includes(filter)){
                        newMenu.push(element)
                    }
                })
                setFilMenu(newMenu)
            }
            else{
                newMenu=menu
                setFilMenu(newMenu)
            }
            var searchMenu:any = []
            if(search != ''){
                newMenu.filter((element:any)=>{
                    if(element.foodName.includes(search)){
                        searchMenu.push(element)
                    }
                })
                setFilMenu(searchMenu)
            }else{
                searchMenu=newMenu
                setFilMenu(searchMenu)
            }
        }
        filterChange()
    },[filter,search])
    return(
        <div className="flex flex-col w-full h-full">
            <div className="flex flex-row h-[55px] w-full mt-[3%] items-center justify-center">
                <div className='flex flex-row w-[90%] h-full'>
                    <div className="flex basis-3/4 h-full items-center">
                        <img src={search_icon} alt="search_icon" className='h-[65%]'/>
                        <input type="text" className="h-[70%] w-[70%] indent-2.5 focus:outline-none" placeholder='ค้นหา...' onChange={searchHandler}/>
                    </div>
                    <div className="flex basis-1/4 justify-center items-center">
                        <select className='h-[60%] w-[80%] rounded-md' onChange={optionHandler} >
                            {
                                options.map((element)=>{
                                    return (
                                        <option value={element} key={element}> {element}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                </div>
            </div>
            <div className='flex h-[70%] w-[100%] justify-center items-center'>
                <div className='flex flex-col bg-gray-100 h-[90%] w-[90%] items-center'>
                    <div className='overflow-y-scroll w-full h-full border-[2px] border-black rounded-md'>
                        {filMenu.map((element:any)=>{
                            var thePrice
                            if(menuType=='buffet'){
                                thePrice=0
                            }
                            else{
                                thePrice=element['price']
                            }
                            return(
                                <MenuComponent id={element['_id']} name={element['foodName']} pic={element['image']} price={thePrice} status={element['status']}/>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className='flex h-[16%] w-[100%] justify-center items-center'>
                <div className='bg-headerRed h-[42px] w-[186px] text-center border-[2px] border-black rounded-md'>
                    <button className=''>
                        <label className='text-3xl text-white'> Your Cart </label>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default MenuPageBody