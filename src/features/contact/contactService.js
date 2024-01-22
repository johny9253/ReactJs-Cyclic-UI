import axios from "axios";
import { config } from "../../utils/axiosconfig";
import { base_url } from "../../utils/base_url";

const getQueries = async () => {
  const response = await axios.get(`${base_url}/enquiry/`);
  return response.data;
};
const createQuery = async (query) => {
  const response = await axios.post(`${base_url}/enquiry/`, query);
  return response.data;
};


const contactService = {
  getQueries,
  createQuery,  
};

export default contactService;
