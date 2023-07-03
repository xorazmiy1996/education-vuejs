import axios from "@/service/axios";
const EssayService = {
    createEssay(data){
        return axios.post('ielts/course/', data)
    }
}

export default EssayService