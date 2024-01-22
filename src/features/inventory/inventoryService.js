import axios from "axios";
import { base_url } from "../../utils/base_url";
import { config } from "../../utils/axiosconfig";

const getInventories = async () => {
  const response = await axios.get(`${base_url}/inventory/`);
  return response.data;
};
const createInventory = async (inventory) => {
  const response = await axios.post(`${base_url}/inventory/`, inventory, config);

  return response.data;
};
// const updateInventory = async (inventory) => {
//   const response = await axios.put(
//     `${base_url}/inventory/${inventory.id}`,
//     {
//       title: inventory.inventoryData.title,
//       description: inventory.blogData.description,
//       category: inventory.inventoryData.category,
//       images: inventory.inventoryData.images,
//     },
//     config
//   );

//   return response.data;
// };
// const getInventory = async (id) => {
//   const response = await axios.get(`${base_url}/inventory/${id}`, config);

//   return response.data;
// };

// const deleteInventory = async (id) => {
//   const response = await axios.delete(`${base_url}/inventory/${id}`, config);

//   return response.data;
// };
const inventoryService = {
  getInventories,
  createInventory,
//   getInventory,
//   updateInventory,
//   deleteInventory,
};

export default inventoryService;
