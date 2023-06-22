import axios from "@/service/axios";

const AuthService = {
    register(student) {
        return axios.post('/accounts/register/', student)
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
    }
}

export default AuthService