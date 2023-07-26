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
            context.commit('getEssayDetailStart')
            EssayService.getEssayDetail(id)
                .then(response => {
                    context.commit('getEssayDetailSuccess', response.data)
                    resolve(response.data)
                })
                .catch(error => {
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
                    const students = []
                    for (let i = 0; i < response.data.length; i++) {
                        let id = response.data[i]['id']

                        let student = response.data[i]['student']
                        let essay1 = null;
                        let essay2 = null;
                        if (response.data[i]['essays'][0]) { // 1-essay
                            let essay = response.data[i]['essays'][0]
                            if (essay['type'] === 'task1')
                                essay1 = essay
                            else essay2 = essay // task2
                        }
                        if (response.data[i]['essays'][1]) { // 2-essay
                            let essay = response.data[i]['essays'][1]
                            if (essay['type'] === 'task1')
                                essay1 = essay
                            else essay2 = essay // task2
                        }
                        const new_data = {
                            id: id,
                            student: student,
                            essay1: essay1,
                            essay2: essay2,
                            score: response.data[i]['score'],
                            created_at: response.data[i]['created_at'],
                        }
                        students.push(new_data)
                    }
                        context.commit('allGetEssaySuccess', students)
                        resolve(students)
                    }
                )
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