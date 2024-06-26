import axios from "@/service/axios";

const CourseService = {

    createCourse(data){
        return axios.post('/educations/course/', data,{
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    courseDetail(id){
        return axios.get(`/educations/course/${id}/`)
    },
    patchCourse(id,data){
        return axios.patch(`/educations/course/${id}/`,data);
    },

    getAllCourse(){
        return axios.get('/educations/course/')
    },
    deleteCurse(id){
        return axios.delete(`/educations/course/${id}/`)
    }

}
export default CourseService