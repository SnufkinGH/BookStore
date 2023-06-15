import {$authHost,$host} from "./index";

import jwt_decode from "jwt-decode";

export const registration = async (email,password) => {
    console.log(email, password);
    const {data} = await $host.post('/auth/registration',{email,password})
    localStorage.setItem('token',data.token)
    return jwt_decode(data.token)
}

export const login = async (email,password) => {
    const {data} = await $host.post('auth/login',{email,password})
    localStorage.setItem('token', data.token)
    //console.log(`${localStorage.getItem('token')}`);
    return jwt_decode(data.token)
}
