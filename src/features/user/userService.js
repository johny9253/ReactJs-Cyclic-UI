import axios from 'axios';
import { base_url } from "../../utils/base_url"
import { config } from "../../utils/axiosconfig";
const login = async (userData) => {
    const response = await axios.post(`${base_url}/User/login`, userData);
    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
};
const register = async (userData) => {
    const response = await axios.post(`${base_url}/User/register`, userData);
    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
};

const updateUser = async (userData) => {
    const response = await axios.put(`${base_url}/User/edit-user`, userData, config);
    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
};
const getOrders = async () => {
    const response = await axios.get(`${base_url}/User/get-orders`, config);
    return response.data;
};
const getUserWishlist = async () => {
    const response = await axios.get(`${base_url}/User/wishlist`, config);
    return response?.data;
}
const getUserCart = async () => {
    const response = await axios.get(`${base_url}/User/cart`, config);
    return response?.data;
}
const addToCart = async (cartData) => {
    const response = await axios.post(`${base_url}/User/cart`, cartData, config);
    return response?.data;
}
const removeCartItem = async (cartItemId) => {
    const response = await axios.delete(`${base_url}/User/remove-cart-item/${cartItemId}`, config);
    return response?.data;
}
const updateCartItem = async (cartData) => {
    console.log(config);
    const response = await axios.put(`${base_url}/User/update-cart-item/${cartData.cartItemId}/${cartData.quantity}`, config);
    return response?.data;
}
const createOrder = async (orderData) => {
    const response = await axios.post(`${base_url}/User/cart/create-order`, orderData, config);
    return response?.data;
}
export const userService = {
    register,
    login,
    getOrders,
    getUserWishlist,
    getUserCart,
    addToCart,
    removeCartItem,
    updateCartItem,
    createOrder,
    updateUser
};

export default userService;
