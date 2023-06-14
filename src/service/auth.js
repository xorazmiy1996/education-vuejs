import axios from "@/service/axios";

const AuthService = {
    register(student) {
        return axios.post('/accounts/register/', student)
    },
    login(student_data) {
        return axios.post('/accounts/login/', student_data)
    },
    sendCodeEmail(mail) {
        return axios.post('/accounts/verify_email/', mail)
    },
    verificationCode(code) {
        return axios.post('/accounts/verification_code/', code)
    },
    getToken(data){
        return axios.post('/accounts/token/', data)
    }
}

export default AuthService