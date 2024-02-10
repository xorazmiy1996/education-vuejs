import AuthService from "@/service/auth";
import CourseService from "@/service/course";



const state = {
    isLoading: false,
    user: null,
    allUsers: null,
    errors:null,
    errorsLogin: null,
    errorsRegister: null,
    isLoggedIn: null,
    userPhoto:null,
};

const getters = {
     isLoading:state =>{
        return state.isLoading
    },

    isLoggedIn: state => {
        return Boolean(state.isLoggedIn)
    },
    isAnonymous: state => {
        return state.isLoggedIn === false
    },
    user:state =>{
        return state.user
    },
    errorsRegister:state =>{
        return state.errorsRegister
    },
    errorsLogin:state =>{
        return state.errorsLogin
    },
    allUsers:state =>{
        return state.allUsers
    }

}

const mutations = {
    registerStart(state) {
        state.isLoading = true
        state.user = null
        state.errorsRegister = null
        state.isLoggedIn = null

    },
    registerSuccess(state, payload) {
        state.isLoading = false
        state.user = payload
        state.isLoggedIn = true

    },
    registerFailure(state, payload) {
        state.isLoading = false
        state.errorsRegister = payload
        state.isLoggedIn = false
    },
    // all users
    allUsersStart(state) {
        state.isLoading = true
        state.allUsers = null
        state.errors = null


    },
    allUsersSuccess(state, payload) {
        state.isLoading = false
        state.allUsers = payload

    },
    allUsersFailure(state, payload) {
        state.isLoading = false
        state.errors = payload
    },

    // all users
    patchUsersStart(state) {
        state.isLoading = true
        state.errors = null


    },
    patchUsersSuccess(state) {
        state.isLoading = false


    },
    patchUsersFailure(state, payload) {
        state.isLoading = false
        state.errors = payload
    },

    // patch users Photo
    patchUserPhotoStart(state) {
        state.isLoading = true
        state.errors = null


    },
    patchUserPhotoSuccess(state, payload) {
        state.isLoading = false


    },
    patchUserPhotoFailure(state, payload) {
        state.isLoading = false
        state.errors = payload
    },




    loginStart(state) {
        state.isLoading = true
        state.user = null
        state.errorsLogin = null
        state.isLoggedIn = null
    },
    loginSuccess(state) {
        state.isLoading = false
        // state.user = payload
        state.isLoggedIn = true
    },
    loginFailure(state, payload) {
        state.isLoading = false
        state.errorsLogin = payload
        state.isLoggedIn = false
    },
    // kk
    verificationCodeStart(state) {
        state.isLoading = true
        state.errors = null

    },
    verificationCodeSuccess(state, payload) {
        state.isLoading = false

    },
    verificationCodeFailure(state, payload) {
        state.isLoading = false
        state.errors = payload
        state.isLoggedIn = false
    },
    currentUserStart(state) {
        state.isLoading = true
    },
    currentUserSuccess(state, payload) {
        state.isLoading = false
        state.user = payload
        state.isLoggedIn = true
    },
    currentUserFailure(state) {
        state.isLoading = false
        state.user = null
        state.isLoggedIn = false
    },
    logout(state) {
        state.user = null
        state.isLoading = null
        state.isLoggedIn= false

    }


};


const actions = {
    register(context, student) {
        return new Promise((resolve, reject) => {
            context.commit("registerStart")
            AuthService.register(student)
                .then(response => {
                    context.commit("registerSuccess", response.data)
                    resolve(response.data)
                })
                .catch(error => {
                    context.commit("registerFailure", error.response.data)
                        reject(error.response.data)
                })


        })
    },
    login(context, student_data) {
        return new Promise((resolve, reject) => {
            context.commit("loginStart")
            AuthService.login(student_data)
                        .then(response => {
                    context.commit("loginSuccess")
                    localStorage.setItem("token", response.data.access)
                    localStorage.setItem("refresh", response.data.refresh)

                    resolve(response.data)

                    })
                .catch(error => {
                    context.commit("loginFailure", error?.data)
                    reject(error.response.data)
                })

        })
    },
    sendCodeEmail(context, mail) {
        return new Promise((resolve, reject) => {
            AuthService.sendCodeEmail(mail)
                .then(response => {
                        resolve(response.data)
                })
                .catch(error => {
                    reject(error.response.data)
                })
        })
    },
    verificationCode(context, code) {
        return new Promise((resolve, reject) => {
            context.commit("verificationCodeStart")
            AuthService.verificationCode(code)
                .then(response => {
                    context.commit("verificationCodeSuccess", response.data)
                    resolve(response.data)
                })
                .catch(error => {
                    reject(error.response.data)
                    context.commit("verificationCodeFailure", error.response.data)
                })


        })
    },
    getUser(context) {
        return new Promise((resolve) => {
            const isAuthenticated = localStorage.getItem('token'); // ro'yxatdan o'tganmi yo'qmi?
            if(!isAuthenticated) {
                context.commit('currentUserFailure')
            } else {
                context.commit('currentUserStart')
                AuthService.getUser().then(response => {
                    context.commit("currentUserSuccess", response.data)
                    localStorage.setItem('userType',response.data.type)
                    resolve(response.data)

                }).catch(() => {
                    context.commit('logout')
                    localStorage.removeItem('token')
                    localStorage.removeItem('refresh')
                })
            }
        })
      },
    getAllUsers(context, type){
        return new Promise((resolve, reject) =>{
            context.commit('allUsersStart')
            AuthService.getAllUser(type)
                .then(response =>{
                    context.commit('allUsersSuccess', response.data)
                    resolve(response.data)
                })
                .catch(error =>{
                    context.commit('allUsersFailure', error.data)
                    reject(error.data)
                })

        })

    },
    logout(context) {
        context.commit('logout')
        localStorage.removeItem('token')
        localStorage.removeItem('refresh')

    },
    patchUser(context, data) {
        return new Promise((resolve, reject)=>{
            context.commit("patchUsersStart")
            AuthService.patchUser(data.data)
                .then(response =>{
                    context.commit("patchUsersSuccess")
                    resolve(response.data)
                })
                .catch(error =>{
                    console.log(error)
                    context.commit("patchUsersFailure", error.data)
                    reject(error.data)
                })
        })

    },
    patchUserPhoto(context, data) {
        return new Promise((resolve, reject)=>{
            context.commit("patchUserPhotoStart")
            AuthService.patchUserPhoto(data.id, data.send_file)
                .then(response =>{
                    context.commit("patchUserPhotoSuccess")
                    resolve(response.data)
                })
                .catch(error =>{
                    console.log(error)
                    context.commit("patchUserPhotoFailure", error.data)
                    reject(error.data)
                })
        })

    },

}
export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}
