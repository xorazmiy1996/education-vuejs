import axios from "axios";
import {getItem, setItem} from "@/helpers/persistanceStorage";
axios.defaults.baseURL= "http://185.103.254.135:8080/api"
axios.interceptors.request.use(config =>{
    const token = localStorage.getItem('token')
    const authorization= token ? `Bearer ${token}`: ''
    config.headers.Authorization = authorization
    return config
})
export default axios