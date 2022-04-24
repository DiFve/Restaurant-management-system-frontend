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
        //console.log('get food detail error')
        console.log(error)
    }
}
