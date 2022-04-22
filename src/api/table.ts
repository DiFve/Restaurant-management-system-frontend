import api from "./apiClient";
import config from "../config.json";

export const getTableInfo = async () =>{
    try{
        const res = await api(`${config.apiURL}seeTable`, {
            headers: {},
            data: {},
            method: "GET",
          });
        console.log(res)
        return res
    }
    catch(error){
        console.log('get table detail error')
    }
}

export const getTableByID = async (id:string | undefined) =>{
    try{
        const res = await api(`${config.apiURL}seeTableByID/${id}`, {
            headers: {},
            data: {},
            method: "GET",
          });
        console.log(res)
        return res
    }
    catch(error){
        console.log('get see tableByID detail error')
    }
}

