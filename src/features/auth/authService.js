import axios from 'axios';
import {base_url} from "../../utils/base_url"
import { config } from "../../utils/axiosconfig";
const login = async(userData)=>{
    const  response = await axios.post(`${base_url}/User/admin-login`, userData);
    if(response.data){
        localStorage.setItem('user',JSON.stringify(response.data));
    }
    return response.data;
};

const getOrders = async () => {
    const response = await axios.get(`${base_url}/User/getallorders`, config);
  
    return response.data;
  };

export const authService={
    login,
    getOrders
};

export default authService;
