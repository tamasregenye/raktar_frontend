import axios from "axios";
import { TOKEN_STORAGE_KEY } from "../config/constants";

export const api = axios.create(
    {
        baseURL: "http://localhost:3000/api",
        headers: {
            "Content-Type": "application/json"
        }
    }
)

//token hozzáfűzése a kérések fejlécébe
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem(TOKEN_STORAGE_KEY);
        if(token){
            config.headers.Authorization=`Bearer ${token}`;
        }
        return config;
    }
)