import axios from "@/service/axios";
const CabinetService={
    getAllCabinets(){
        return axios.get('/educations/cabinet/')
    },
    createCabinet(data){
        return axios.post('/educations/cabinet/', data)
    },
    detailCabinet(id){
        return axios.get(`/educations/cabinet/${id}/`)
    },
    addStudentCabinet(id){
        return axios.post(`/educations/cabinet/${id}/add_student/`)

    },
    deleteCabinet(id){
        return axios.delete(`/educations/cabinet/${id}/`)
    }
}

export default CabinetService
