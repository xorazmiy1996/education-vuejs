import AuthService from "@/service/auth";

const state = {
    isLoading: false,
    student: null,
    errors: null,
    isLoggedIn: null,
};

const mutations = {
    registerStart(state) {
        state.isLoading = true
        state.student = null
        state.errors = null
        state.isLoggedIn=null

    },
    registerSuccess(state, payload) {
        state.isLoading = false
        state.student = payload
        state.isLoggedIn=true

    },
    registerFailure(state, payload) {
        state.isLoading = false
        state.errors = payload
        state.isLoggedIn=false
    },
    loginStart(state) {
        state.isLoading = true
        state.student = null
        state.errors = null
        state.isLoggedIn=null
    },
    loginSuccess(state, payload) {
        state.isLoading = false
        state.student = payload
        state.isLoggedIn=true
    },
    loginFailure(state, payload) {
        state.isLoading = false
        state.errors = payload
        state.isLoggedIn=false
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
        state.isLoggedIn=false
    },


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
                    context.commit("loginSuccess", response.data)
                     localStorage.setItem("token", response.data.access)
                    resolve(response.data)

                })
                .catch(error => {
                    context.commit("loginFailure", error.response.data)
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
    getToken(context, data) {
        return new Promise((resolve, reject) => {
            AuthService.getToken(data)
                .then(response => {
                    // console.log(response.data)
                    // console.log(response.data.access)
                    localStorage.setItem("token", response.data.access)
                    localStorage.setItem("username", '')
                    localStorage.setItem("password", '')
                    resolve(response.data)
                })
                .catch(error => {
                    console.log(error.response.data)
                    reject(error.response.data)

                })
        })
    }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions,
    // getters
}
