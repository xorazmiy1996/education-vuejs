import EssayService from "@/service/essay";

const state = {
    isLoading: false,
    essayError: null,
    essaysDetail: null,
    allEssays: null,
}
const getters = {
    isLoading: state => {
        return state.isLoading
    },
    essayError: state => {
        return state.essayError
    },
    essaysDetail: state => {
        return state.essaysDetail
    },
    allEssays: state => {
        return state.allEssays
    },
}
const mutations = {
    creatEssayStart(state) {
        state.isLoading = true
        state.essayError = null
    },
    creatEssaySuccess(state) {
        state.isLoading = false
        state.essayError = null
    },
    creatEssayFailure(state, payload) {
        state.isLoading = false
        state.essayError = payload
    },

    // get essays Detail
    getEssayDetailStart(state) {
        state.isLoading = true
        state.essayError = null
    },
    getEssayDetailSuccess(state, payload) {
        state.isLoading = false
        state.essaysDetail = payload
        state.essayError = null
    },
    getEssayDetailFailure(state, payload) {
        state.isLoading = false
        state.essayError = payload
    },


    // all get essays
    allGetEssayStart(state) {
        state.isLoading = true
        state.essayError = null
    },
    allGetEssaySuccess(state, payload) {
        state.isLoading = false
        state.allEssays = payload

    },
    allGetEssayFailure(state, payload) {
        state.isLoading = false
        state.essayError = payload
    },

    // delete essay
    deleteEssayStart(state) {
        state.isLoading = true
    },
    deleteEssaySuccess(state) {
        state.isLoading = false

    },
    deleteEssayFailure(state) {
        state.isLoading = false
    },
    // update essay
    updateEssayStart(state) {
        state.isLoading = true
        state.essayError = null
    },
    updateEssaySuccess(state) {
        state.isLoading = false
        state.essayError = null
    },
    updateEssayFailure(state, payload) {
        state.isLoading = false
        state.essayError = payload
    },


}
const actions = {
    createEssay(context, data) {
        return new Promise((resolve, reject) => {
            context.commit("creatEssayStart")
            EssayService.createEssay(data)
                .then(response => {
                    context.commit('creatEssaySuccess')
                    resolve(response)
                })
                .catch(error => {
                    context.commit('creatEssayFailure', error.response.data)
                    reject(error.response.data)
                })
        })
    },
    updateEssay(context, data) {
        return new Promise((resolve, reject) => {
            context.commit('updateEssayStart')
            EssayService.updateEssay(data.data, data.id)
                .then(response => {
                    context.commit('updateEssaySuccess')
                    resolve(response.data)
                })
                .catch(error => {
                    context.commit('updateEssayFailure')
                    reject(error.response.data)

                })

        })
    },
    updateDetailEssay(context, data) {
        return new Promise((resolve, reject) => {
            context.commit('updateEssayStart')
            console.log('00000000000000000000')
            EssayService.updateEssayDetail(data.data, data.id)
                .then(response => {
                    context.commit('updateEssaySuccess')
                    resolve(response.data)
                })
                .catch(error => {
                    context.commit('updateEssayFailure')
                    reject(error.response.data)

                })

        })
    },
    deleteEssay(context, id) {
        return new Promise(resolve => {
            context.commit('deleteEssayStart')
            EssayService.deleteEssay(id)
                .then(() => {
                    context.commit('deleteEssaySuccess')
                    resolve()
                })
        })

    },
    getEssayDetail(context, id) {
        return new Promise((resolve, reject) => {
            console.log('111111')
            context.commit('getEssayDetailStart')
            EssayService.getEssayDetail(id)
                .then(response => {
                    console.log('22222')
                    context.commit('getEssayDetailSuccess', response.data)
                    resolve(response.data)
                })
                .catch(error => {
                    console.log('33333')
                    context.commit('getEssayDetailFailure', error.response.data)
                    reject(error.response.data)
                })
        })
    },
    allGetEssay(context) {
        return new Promise((resolve, reject) => {
            context.commit('allGetEssayStart')
            EssayService.allGetEssay()
                .then(response => {
                    context.commit('allGetEssaySuccess', response.data)
                    resolve(response.data)
                })
                .catch(error => {
                    context.commit('allGetEssayFailure')
                    reject(error.response.data)
                })
        })
    }

}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}