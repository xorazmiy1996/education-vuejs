import axios from "@/service/axios";

const CourseService = {

    createCourse(data){
        return axios.post('/educations/course/', data)
    },

    getAllCourse(){
        return axios.get('/educations/course/')
    }
}
export default CourseService