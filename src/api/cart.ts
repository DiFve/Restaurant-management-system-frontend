import api from "./apiClient";
import config from "../config.json";


export const getItemInCart = async (tableNumber: string | undefined) => {
    try {
        //console.log(tableNumber)
        const res = await api(`${config.apiURL}getAllItemInCart/${tableNumber}`, {
            headers: {},
            data: {},
            method: "GET",
        });
        //console.log(res)
        return res
    }
    catch (error) {
        console.log('get item in cart error')
    }
}

export const deleteItemInCart = async (tableNumber: string | undefined) => {
    try {
        const res = await api(`${config.apiURL}deleteItemInCart/${tableNumber}`, {
            headers: {},
            data: { tableNumber },
            method: "delete",
        });
        //console.log(res)
        return res
    }
    catch (error) {
        console.log('delete item in cart error')
    }
}

export const confirmItemInCart = async (tableNumber: string | undefined) => {
    try {
        const res = await api(`${config.apiURL}confirmItemInCart/${tableNumber}`, {
            headers: {},
            data: {},
            method: "put",
        });
        //console.log(res)
        return res
    }
    catch (error) {
        console.log('put item in cart error')
    }
}

export const getCartOrder = async (tableNumber: string | undefined) => {
    try {
        const res = await api(`${config.apiURL}seeOrderTable/${tableNumber}`, {
            headers: {},
            data: {},
            method: "get",
        });
        //console.log(res)
        return res
    }
    catch (error) {
        console.log('get CartOrder in cart error')
    }
}