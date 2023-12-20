import axios from "axios";

const baseURl = "https://localhost:4000";
const axiosInstance = axios.create({
  baseURL: baseURl,
});

export default axiosInstance;
