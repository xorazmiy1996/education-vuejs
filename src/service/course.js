import axios from "@/service/axios";

const CourseService = {

    createCourse(data){
        return axios.post('/educations/course/', data)
    },

    getAllCourse(){
        return axios.get('/educations/course/')
    },
    deleteCurse(id){
        return axios.delete(`/educations/course/${id}/`)
    }

}
export default CourseService