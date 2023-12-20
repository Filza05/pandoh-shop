import axios from "axios"

const baseURl = "http://localhost:4000";
const axiosInstance = axios.create({
  baseURL: baseURl,
  withCredentials: true
});

export default axiosInstance;
