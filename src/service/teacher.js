import axios from "@/service/axios";
const teacherService = {
    getAllTeachers(){
        return axios.get('/accounts/all_teacher_data/')
    },
    getAllTeachersHaveCabinet(filter){
        console.log(filter)
        const newFilter = new URLSearchParams(filter).toString();
        return axios.get(`/educations/teachers?${newFilter}`)
    }
}
export default teacherService