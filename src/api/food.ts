import api from "./apiClient";
import config from "../config.json";
export const getFoodInfo = async (id:string | undefined) =>{
    try{
        const res = await api(`${config.apiURL}getMenuByID/${id}`, {
            headers: {},
            data: {},
            method: "GET",
          });
        console.log(res)
        return res
    }
    catch(error){
        console.log('get food detail error')
    }
}

export const addFoodToCart = async (tableNumber:number,body:any)=>{
    try{
        const detailBody = {
            'detail':body
        }
        const res = await api(`${config.apiURL}addItemToCart/${tableNumber.toString()}`,{
        //const res = await api(`${config.apiURL}addItemToCart/1`,{
            headers:{},
            data:detailBody,
            method:"PUT",
        });
        return res
    }
    catch(error:any){
        console.log('add food to cart error : '+ (error.message||''))
    }
}