import axios from "axios";
import router from '@/router/index';
import {getItem, setItem} from "@/helpers/persistanceStorage";
// axios.defaults.baseURL= "http://193.168.227.62:8080/api"
// axios.defaults.baseURL= "https://apiedu.speakuplc.uz/api"
axios.defaults.baseURL= "http://nginx:80/api"






axios.interceptors.request.use(config =>{
    const token = localStorage.getItem('token')
    const authorization= token ? `Bearer ${token}`: ''
    config.headers.Authorization = authorization
    return config
})



// Axios-interseptor qo'shish
axios.interceptors.response.use(
  (response) => {
    if(response.request.responseURL == 'https://apiedu.speakuplc.uz/api/accounts/token/refresh/') {
      const newAccessToken = response.data.access;
      localStorage.setItem('token', newAccessToken); // Yangi access tokenni o'z ma'lumot omboriga yoki xotirasiga saqlash
    }
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    if(error.request.responseURL == 'https://apiedu.speakuplc.uz/api/accounts/token/refresh/'){
      originalRequest._retry = false;
      localStorage.removeItem('token');
      router.push({ name: "login" });
      return;
    }

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      // Refresh tokenni olish
      const refreshToken = localStorage.getItem('refresh'); // Refresh tokenni o'z ma'lumot omborigidan yoki xotirasidan olish
      // Refresh token bilan yangi access tokenni olish
      const data = {
        "refresh": refreshToken
      }
      await axios.post(
        '/accounts/token/refresh/',data
      ).then(() => {
        originalRequest._retry = true;
      })
    }

    return Promise.reject(error);
  }
);










export default axios


