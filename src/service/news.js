import axios from "@/service/axios";

const NewsService = {
    getNews(){
        return axios.get('/news/news/')
    }
}

export default NewsService