import teacherService from "@/service/teacher";

const state = {
    isLoading:false,
    error:false,
    teachers: null,
    teachersHaveCabinet: null

}

const getters = {
    isLoading: state => {
        return state.isLoading
    },
    error: state => {
        return state.error
    },
    teachers: state => {
        return state.teachers
    },

    teachersHaveCabinet: state => {
        return state.teachersHaveCabinet
    },



}

const mutations = {
    // teachers
    getAllTeachersStart(state) {
        state.isLoading = true;
        state.error = null;
        state.teachers = null
    },
    getAllTeachersSuccess(state, payload) {
        state.teachers = payload
        state.isLoading = false;
    },
    getAllTeachersFailure(state, payload) {
        state.error = payload
        state.isLoading = false;
    },

    // teachers have cabinets

    getAllTeacherHaveCabinetsStart(state) {
        state.isLoading = true
        state.teachersHaveCabinet = null
        state.error = null

    },
    getAllTeacherHaveCabinetsSuccess(state, payload) {
        state.isLoading = false
        state.teachersHaveCabinet = payload

    },
    getAllTeacherHaveCabinetsFailure(state, payload) {
        state.error = payload
    },



}
const actions = {
    getAllTeachers(context, filter) {
        return new Promise((resolve, reject) => {
            context.commit('getAllTeachersStart')
            teacherService.getAllTeachersHaveCabinet(filter)
                .then(response => {
                    context.commit('getAllTeachersSuccess', response?.data)
                    resolve(response?.data)
                    console.log(response?.data)
                })
                .catch(error => {
                    context.commit('getAllTeachersFailure', response?.data)
                    reject(error.response?.data)
                })
        })
    },
    getAllTeachersHaveCabinet(context) {
        return new Promise((resolve, reject) => {
            context.commit('getAllTeacherHaveCabinetsStart')
            teacherService.getAllTeachersHaveCabinet()
                .then(response => {
                    context.commit('getAllTeacherHaveCabinetsSuccess', response.data.results)
                    resolve(response.data)
                })
                .catch(error => {
                    context.commit('getAllTeacherHaveCabinetsFailure', error.data)
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