import axios from "@/service/axios";

const CourseService = {
    getAllCourse(){
        return axios.get('/educations/course/')
    }
}
export default CourseService