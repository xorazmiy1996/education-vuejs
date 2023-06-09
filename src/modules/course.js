import CourseService from "@/service/course";

const state = {
    isLoading: false,
    courses: null,
    errors: null,

}

const getters = {
    courses: state => {
        return state.courses
    },
    isLoading: state => {
        return state.isLoading
    },
    createCourseErrors: state => {
        return state.errors
    }
}

const mutations = {
    getAllCourseSuccess(state, payload) {
        state.courses = payload
    },
    // create course

    createCourseStart(state) {
        state.isLoading = true
        state.errors = null
    },

    createCourseSuccess(state) {
        state.isLoading = false
        state.errors = null
    },
    createCourseFailure(state,payload) {
        state.isLoading = false
        state.errors = payload
    },
     // delete course
     deleteCourseStart(state) {
        state.isLoading = true
        state.errors = null
    },

    deleteCourseSuccess(state) {
        state.isLoading = false
        state.errors = null
    },
    deleteCourseFailure(state) {
        state.isLoading = false

    },



}
const actions = {

    createCourse(context, data) {
        return new Promise((resolve, reject) => {
            context.commit("createCourseStart")
            CourseService.createCourse(data)
                .then(response => {
                     context.commit("createCourseSuccess")
                    resolve(response.data)
                })
                .catch(error => {
                    context.commit("createCourseFailure",error.response.data)
                    reject(error.response.data)
                })
        })
    },
    deleteCurse(context, id){
        return new Promise(resolve => {
            context.commit('deleteCourseStart')
            CourseService.deleteCurse(id)
                .then(() =>{
                    context.commit('deleteCourseSuccess')
                    resolve()
                })

        })


    },


    getAllCourse(context) {
        return new Promise((resolve, reject) => {
            CourseService.getAllCourse()
                .then(response => {
                    context.commit('getAllCourseSuccess', response.data)
                    resolve(response.data)

                })
                .catch(error => {
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
    actions
}