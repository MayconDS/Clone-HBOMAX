import axios from "axios";
const Api = axios.create({ baseURL: process.env.VITE_BASE_API });
export default Api;
