import axios from "axios";
import { $authHost } from "../http";

export async function fSend(route, data) {
    const IP = 'localhost';

    //const vAxios = axios.create();


    return await $authHost.post(`${route}`, data)

}

export async function fGet(route) {
    const IP = 'localhost';

    const vAxios = axios.create();

    return await $authHost.get(`${route}`)
}