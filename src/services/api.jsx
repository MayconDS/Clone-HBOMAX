import axios from "axios";
const Api = axios.create({ baseURL: import.meta.env.VITE_BASE_API });
export default Api;
