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
    },
    createStudentComment(data){
        return axios.post(`/educations/student_comment/`, data)
    },
    getAllStudentComment(){
        return axios.get(`/educations/student_comment/`,)
    },
    getStudentComment(id){
        return axios.get(`/educations/student_comment/${id}`,)
    },
    readyStudentComment(id){
        return axios.patch(`/educations/student_comment/${id}`)
    },
}

export default CabinetService
