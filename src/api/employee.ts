import api from "./apiClient";
import config from "../config.json";

export const getEmployeeInfo = async () =>{
    try{
        const res = await api(`${config.apiURL}getAllEmployeeData`, {
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

export const deleteEmployee = async (Email:string) =>{
    try{
        const res = await api(`${config.apiURL}deleteEmployee`, {
            headers: {},
            data: {email:Email},
            method: "DELETE",
          });
        console.log(res)
        return res
    }
    catch(error){
        console.log('get food detail error')
    }
}