import axios from "@/service/axios";
const teacherService = {
    getAllTeachers(){
        return axios.get('/accounts/all_teacher_data/')
    }
}
export default teacherService