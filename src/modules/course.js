import CourseService from "@/service/course";

const state = {
    isLoading: false,
    courses: null,
    errors: null,
    courseDetail: null,
    link:null

}

const getters = {
    link: state => {
        return state.link
    },
    courses: state => {
        return state.courses
    },
    isLoading: state => {
        return state.isLoading
    },
    courseDetail: state => {
        return state.courseDetail
    },
    createCourseErrors: state => {
        return state.errors
    }
}

const mutations = {
    getAllCourseSuccess(state, payload) {
        state.courses = payload
    },
    // subscription course

    subscriptionCourseStart(state) {
        state.isLoading = true
        state.errors = null
    },

    subscriptionCourseSuccess(state, payload) {
        state.isLoading = false
        state.errors = null
        state.link = payload
    },
    subscriptionCourseFailure(state, payload) {
        state.isLoading = false
        state.errors = payload
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
    createCourseFailure(state, payload) {
        state.isLoading = false
        state.errors = payload
    },

    //patch course
    patchCourseStart(state) {
        state.isLoading = true
        state.errors = null
    },
    patchCourseSuccess(state) {
        state.isLoading = false
    },
    patchCourseFailure(state, payload) {
        state.isLoading = false
        state.errors = payload

    },
    // Detail course
    courseDetailStart(state) {
        state.isLoading = true
        state.errors = null
    },
    courseDetailSuccess(state, payload) {
        state.isLoading = false
    },
    courseDetailFailure(state, payload) {
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
    subscriptionCourse(context, data) {
        return new Promise((resolve, reject) => {
            context.commit("subscriptionCourseStart")
            console.log("adff")
            CourseService.subscriptionCourse(data)
                .then(response => {
                    context.commit("subscriptionCourseSuccess")
                    resolve(response.data)
                })
                .catch(error => {
                    context.commit("subscriptionCourseFailure", error?.response?.data)
                    reject(error?.response?.data)
                })
        })
    },

    createCourse(context, data) {
        return new Promise((resolve, reject) => {
            context.commit("createCourseStart")
            CourseService.createCourse(data)
                .then(response => {
                    context.commit("createCourseSuccess")
                    resolve(response.data)
                })
                .catch(error => {
                    context.commit("createCourseFailure", error?.response?.data)
                    reject(error?.response?.data)
                })
        })
    },
    patchCourse(context, data) {
        return new Promise((resolve, reject)=>{
            context.commit("patchCourseStart")
            CourseService.patchCourse(data.id, data.data)
                .then(response =>{
                    context.commit("patchCourseSuccess")
                    resolve(response.data)
                })
                .catch(error =>{
                    context.commit("patchCourseFailure", error.data)
                    reject(error.data)
                })
        })

    },
    courseDetail(context, id) {
        return new Promise((resolve, reject) => {
            context.commit("courseDetailStart")
            CourseService.courseDetail(id)
                .then(response => {
                    context.commit("courseDetailSuccess", response.data)
                    resolve(response.data)
                })
                .catch(error => {
                    context.commit("courseDetailFailure", error?.response?.data)
                })

        })

    },
    deleteCurse(context, id) {
        return new Promise(resolve => {
            context.commit('deleteCourseStart')
            CourseService.deleteCurse(id)
                .then(() => {
                    context.commit('deleteCourseSuccess')
                    resolve()
                })

        })


    },


    getAllCourse(context) {
        return new Promise((resolve, reject) => {
            CourseService.getAllCourse()
                .then(response => {
                    context.commit('getAllCourseSuccess', response.data.results)
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