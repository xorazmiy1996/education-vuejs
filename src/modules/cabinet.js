import CabinetService from "@/service/cabinet";

const state = {
    cabinets: null,
    isLoading: false,
    error: null,
    detailCabinet: null,
    addStudentCabinetError: null,
    allStudentComment: null,
    studentComment: null,
}
const getters = {
    allStudentComment: state => {
        return state.allStudentComment
    },
    studentComment: state => {
        return state.studentComment
    },
    cabinets: state => {
        return state.cabinets
    },
    detailCabinet: state => {
        return state.detailCabinet
    },
    cabinetError: state => {
        return state.error
    },
    addStudentCabinetError: state => {
        return state.addStudentCabinetError
    },
    isLoading: state => {
        return state.isLoading
    },
}

const mutations = {
    getAllCabinetsStart(state) {
        state.isLoading = true
        state.cabinets = null
        state.error = null
        state.detailCabinet = null
    },
    getAllCabinetsSuccess(state, payload) {
        state.isLoading = false
        state.cabinets = payload

    },
    getAllCabinetsFailure(state) {
        state.isLoading = false
    },

    // createCabinet
    createCabinetStart(state) {
        state.isLoading = true
        state.error = null
    },
    createCabinetSuccess(state) {
        state.isLoading = false
        state.error = null
    },
    createCabinetFailure(state, payload) {
        state.isLoading = false
        state.error = payload
    },

    // detailCabinet
    getDetailCabinetStart(state) {
        state.isLoading = true
        state.cabinets = null
        // state.detailCabinet = null
        state.error = null
    },
    getDetailCabinetSuccess(state, payload) {
        state.isLoading = false
        state.detailCabinet = payload
        state.error = null
    },
    getDetailCabinetFailure(state, payload) {
        state.isLoading = false
        state.error = payload
    },

    // addStudentCabinet
    addStudentCabinetStart(state) {
        state.isLoading = true
        state.addStudentCabinetError = null
    },
    addStudentCabinetSuccess(state) {
        state.isLoading = false
        state.addStudentCabinetError = null
    },
    addStudentCabinetFailure(state, payload) {
        state.isLoading = false
        state.addStudentCabinetError = payload
    },

    // delete cabinet

       deleteCabinetStart(state) {
        state.isLoading = true
    },
    deleteCabinetSuccess(state) {
        state.isLoading = false
    },
    // createCabinet
    createStudentCommentStart(state) {
        state.isLoading = true
        state.error = null
    },
    createStudentCommentSuccess(state) {
        state.isLoading = false
        state.error = null
    },
    createStudentCommentFailure(state, payload) {
        state.isLoading = false
        state.error = payload
    },

    // all student comment
    getAllStudentCommentStart(state) {
        state.isLoading = true
        state.allStudentComment = null
        state.error = null
    },
    getAllStudentCommentSuccess(state, payload) {
        state.isLoading = false
        state.allStudentComment = payload

    },
    getAllStudentCommentFailure(state) {
        state.isLoading = false
    },
    // get student comment
    getStudentCommentStart(state) {
        state.isLoading = true
        state.studentComment = null
        state.error = null
    },
    getStudentCommentSuccess(state, payload) {
        state.isLoading = false
        state.studentComment = payload

    },
    getStudentCommentFailure(state) {
        state.isLoading = false
    },




}


const actions = {
    getAllCabinets(context, cabinet_type) {
        return new Promise((resolve, reject) => {
            context.commit('getAllCabinetsStart')
            CabinetService.getAllCabinets(cabinet_type)
                .then(response => {
                    context.commit('getAllCabinetsSuccess', response.data)
                    resolve(response.data)

                })
                .catch(error => context.commit('getAllCabinetsFailure'))
        })

    },
    createCabinet(context, data) {
        return new Promise((resolve, reject) => {
            context.commit('createCabinetStart')
            CabinetService.createCabinet(data)
                .then(response => {
                    context.commit('createCabinetSuccess')
                    resolve(response.data)
                })
                .catch(error => {
                    context.commit('createCabinetFailure', error.response.data)
                    reject(error.response.data)
                })
        })

    },
    detailCabinet(context, id) {
        return new Promise((resolve, reject) => {
            context.commit('getDetailCabinetStart')
            CabinetService.detailCabinet(id)
                .then(response => {
                    resolve(response.data)
                    context.commit('getDetailCabinetSuccess', response.data)
                })
                .catch(error => {
                    reject(error.response.data)
                    context.commit('getDetailCabinetFailure', error.response.data)

                })
        })
    },
    addStudentCabinet(context, id) {
        return new Promise((resolve, reject) => {
            context.commit('addStudentCabinetStart')
            CabinetService.addStudentCabinet(id)
                .then(response => {
                    context.commit('addStudentCabinetSuccess')
                    resolve(response.data)
                })
                .catch(error => {
                    context.commit('addStudentCabinetFailure', error.response.data)
                    reject(error.response.data)
                })
        })
    },
    deleteCabinet(context, id){
        return new Promise(resolve =>{
            context.commit('deleteCabinetStart')
            CabinetService.deleteCabinet(id)
                .then(() =>{

                     context.commit('deleteCabinetSuccess')
                    resolve()

                })


        })
    },
    createStudentComment(context, data) {
        return new Promise((resolve, reject) => {
            context.commit('createStudentCommentStart')
            CabinetService.createStudentComment(data)
                .then(response => {
                    context.commit('createStudentCommentSuccess')
                    resolve(response.data)
                })
                .catch(error => {
                    context.commit('createStudentCommentFailure', error.response.data)
                    reject(error.response.data)
                })
        })
    },
    getAllStudentComment(context) {
        return new Promise((resolve, reject) => {
            context.commit('getAllStudentCommentStart')
            CabinetService.getAllStudentComment()
                .then(response => {
                    context.commit('getAllStudentCommentSuccess', response.data)
                    resolve(response.data)

                })
                .catch(error => context.commit('getAllStudentCommentFailure'))
        })

    },
    getStudentComment(context,id) {
        return new Promise((resolve, reject) => {
            context.commit('getStudentCommentStart')
            CabinetService.getStudentComment(id)
                .then(response => {
                    context.commit('getStudentCommentSuccess', response.data)
                    resolve(response.data)

                })
                .catch(error => context.commit('getAllStudentCommentFailure'))
        })

    },
    readyStudentComment(context,id) {
        console.log("1")
        return new Promise((resolve, reject) => {
            // context.commit('getStudentCommentStart')
            CabinetService.readyStudentComment(id)
                .then(response => {
                    // context.commit('getStudentCommentSuccess', response.data)
                    resolve(response.data)

                })
                .catch(error => context.commit('getAllStudentCommentFailure'))
        })

    },
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,

}