import axios from "axios";
import { config } from "../../utils/axiosconfig";
import { base_url } from "../../utils/base_url";

const getProducts = async () => {
  const response = await axios.get(`${base_url}/product/`);
  return response.data;
};
const getAProduct = async (id) => {
  const response = await axios.get(`${base_url}/product/${id}`);
  return response.data;
};
const createProduct = async (product) => {
  const response = await axios.post(`${base_url}/product/`, product, config);
  return response.data;
};
const addToWishlist = async (prodId) => {  
  const response = await axios.put(`${base_url}/product/wishlist`, {prodId}, config);
  return response.data;
};

const productService = {
  getProducts,
  createProduct,
  getAProduct,
  addToWishlist
};

export default productService;
