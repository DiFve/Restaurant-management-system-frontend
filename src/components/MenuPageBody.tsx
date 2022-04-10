import search_icon from './img/search_icon.png'
import menu_placeholder from './img/menu_placeholder.jpg'
import MenuComponent from './MenuComponent'
interface Menu{
    name:string,
    pic : string,
}
const MenuPageBody : React.FC = () => {
    var options:Array<string> = ['Hello','Mother','Father','Kwai']
    var menu:Array<Menu> = [
        {
            'name' : 'หมูแดดเดียวมากๆ',
            'pic' : 'Daddy' ,
        },
        {
            'name' : 'หมูสองแดดมากๆ',
            'pic' : 'Daddy',
        },
        {
            'name' : 'หมูสามแดดมากๆ',
            'pic' : 'Daddy',
        },
        {
            'name' : 'หมูสี่แดดมากๆ',
            'pic' : 'Daddy',
        },
        {
            'name': 'หมูห้าแดดมากๆ',
            'pic' : 'Daddy',
        },
        {
            'name' : 'หมูหกแดดมากๆ',
            'pic' : 'Daddy',
        },
        {
            'name' : 'หมูเก้าแดดมากๆ',
            'pic' : 'Daddy',
        },
    ]
    return(
        <div className="flex flex-col w-full h-full">
            <div className="flex flex-row h-[55px] w-full mt-[3%]">
                <div className="flex basis-3/4 h-full items-center justify-center">
                    <img src={search_icon} alt="search_icon" className='h-[65%]'/>
                    <input type="text" className="h-[70%] w-[70%] indent-2.5 focus:outline-none" placeholder='Search...'/>
                </div>
                <div className="flex basis-1/4 justify-center items-center">
                    <select className='h-[60%] w-[80%]'>
                        {
                            options.map((element)=>{
                                console.log(element)
                                return (
                                    <option value={element} key={element}> {element}</option>
                                )
                            })
                        }
                    </select>
                </div>
            </div>
            <div className='flex h-[100%] w-[100%] justify-center items-center'>
                <div className='flex flex-col bg-gray-100 h-[90%] w-[90%] items-center'>
                    <div className='overflow-y-scroll w-full h-full border-[2px] border-black'>
                        {menu.map((element)=>{
                            return(
                                <MenuComponent name={element['name']} pic={element.pic}/>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className='flex h-[16%] w-[100%] justify-center items-center'>
                <div className='bg-headerRed h-[42px] w-[186px] text-center border-[2px] border-black'>
                    <button className=''>
                        <label className='text-3xl text-white'> View Order </label>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default MenuPageBody