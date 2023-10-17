import AuthService from "@/service/auth";



const state = {
    isLoading: false,
    user: null,
    errors:null,
    errorsLogin: null,
    errorsRegister: null,
    isLoggedIn: null,
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
                    context.commit('currentUserFailure')
                })
            }
        })
      },
    logout(context) {
        context.commit('logout')
        localStorage.removeItem('token')
        localStorage.removeItem('refresh')

    }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}
