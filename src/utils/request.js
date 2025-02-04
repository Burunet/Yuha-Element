import axios from "axios";

const request = axios.create({
    baseURL:import.meta.env.VITE_BASE_URL,
    timeout:10000
})

request.interceptors.request.use(
    (config)=>{
        config.headers.XToken = '';
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
)

request.interceptors.response.use(
    (response)=>{
        return response.data;
    },
    (error) => {
        return Promise.reject(error);
    }
)

export default request;