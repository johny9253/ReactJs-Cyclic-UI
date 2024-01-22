import axios from "axios";
import { config } from "../../utils/axiosconfig";
import { base_url } from "../../utils/base_url";

const getScales= async () => {
  const response = await axios.get(`${base_url}/brand/`);

  return response.data;
};
const createScale = async (scale) => {
  const response = await axios.post(`${base_url}/brand/`, scale, config);

  return response.data;
};

const scaleService = {
  getScales,
  createScale,
};

export default scaleService;
