import axios from "@/service/axios";
const topicService = {
    getAllTopic(){
        return axios.get('/ielts/topic/')
    },
    getTopicDetail(id){
         return axios.get(`/ielts/topic/${id}/`)
    },
}
export default topicService