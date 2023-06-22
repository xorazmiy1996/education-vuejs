    import CabinetService from "@/service/cabinet";

const state = {
    cabinets: null,
    isLoading: false,
    error: null
}
const getters = {
    cabinets:state =>{
        return state.cabinets
    },
    cabinetError:state =>{
        return state.error
    },
    isLoading:state =>{
        return state.isLoading
    }
}

const mutations = {
    getAllCabinetsStart(state) {
        state.isLoading = true
        state.cabinets = null
        state.error = null
    },
    getAllCabinetsSuccess(state, payload) {
        state.isLoading = false
        state.cabinets = payload

    },
    getAllCabinetsFailure(state) {
        state.isLoading = false
    },

    // createCabinet
    createCabinetStart(state){
          state.isLoading = true
          state.error = null
    },
     createCabinetSuccess(state){
          state.isLoading = false
          state.error = null
    },
    createCabinetFailure(state,payload){
          state.isLoading = false
          state.error = payload
    }

}


const actions = {
    getAllCabinets(context) {
        return new Promise((resolve, reject) => {
            context.commit('getAllCabinetsStart')
            CabinetService.getAllCabinets()
                .then(response => {
                    context.commit('getAllCabinetsSuccess', response.data)
                    resolve(response.data)

                })
                .catch(error => context.commit('getAllCabinetsFailure'))
        })

    },
    createCabinet(context, data){
        return new Promise((resolve, reject) =>{
            context.commit('createCabinetStart')
            CabinetService.createCabinet(data)
                .then(response =>{
                    context.commit('createCabinetSuccess')
                    resolve(response.data)
                })
                .catch(error =>{
                    context.commit('createCabinetFailure', error.response.data)
                    reject(error.response.data)
                })
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