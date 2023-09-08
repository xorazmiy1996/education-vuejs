import axios from "@/service/axios";
const CabinetService={
    getAllCabinets(cabinet_type){
        return axios.get(`/educations/cabinet/`, {
            params: {
                course__type: cabinet_type
            }
        })
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
