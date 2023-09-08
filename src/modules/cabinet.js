import CabinetService from "@/service/cabinet";

const state = {
    cabinets: null,
    isLoading: false,
    error: null,
    detailCabinet: null,
    addStudentCabinetError: null,
}
const getters = {
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
                    console.log("Muofaqiyatli qo'shildi", response.data)
                    context.commit('addStudentCabinetSuccess')
                    resolve(response.data)
                })
                .catch(error => {
                    console.log("Qo'shilmaadi", error.response.data)
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
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,

}