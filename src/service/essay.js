import axios from "@/service/axios";

const EssayService = {
    createEssay(data) {
        return axios.post('ielts/writing/', data)
    },
    getEssayDetail(id) {
        return axios.get(`/ielts/essay/${id}/`)
    },
    allGetEssay() {
        return axios.get(`/ielts/writing/`)
    },
    deleteEssay(id){
        return axios.delete(`/ielts/writing/${id}/`)
    },
    updateEssay(essay, id){
        return axios.put(`/ielts/writing/${id}/`, essay)
    },
    updateEssayDetail(essay, id){
        return axios.put(`/ielts/essay/${id}/`, essay)
    },
    essayChecker(text_essay) {
        return axios.post('ielts/essay_checker/', text_essay)
    },
}

export default EssayService