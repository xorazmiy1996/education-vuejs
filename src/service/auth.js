import axios from "@/service/axios";

const AuthService = {
    register(student) {
        console.log("oxirgisi")
        console.log(student)
        return axios.post('/accounts/register/', student,{headers: {
            "Content-Type":"multipart/form-data"
            }
        })
    },
    sendCodeEmail(mail) {
        return axios.post('/accounts/verify_email/', mail)
    },
    verificationCode(code) {
        return axios.post('/accounts/verification_code/', code)
    },
    login(student_data) {
        return axios.post('/accounts/login/', student_data)
    },
    getUser(){
        return axios.get('/accounts/user_profile/')
    },
    patchUser(data){
        console.log("3")
        return axios.patch(`/accounts/update_profile/`, data)
    },
    getAllUser(type){
        return axios.get(`/accounts/all_user/?type=${type}`)
    },
    patchUserPhoto(id, data){
        return axios.patch(`/base/update_file/${id}`, data, {
            headers: {
                'Content-Type':'multipart/form-data'
            }
        })
    },

}

export default AuthService