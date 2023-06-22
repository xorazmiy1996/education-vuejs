import CourseService from "@/service/course";
const state = {
    courses:null
}

const getters = {
    courses:state=>{
        return state.courses
    }
}

const mutations = {
        getAllCourseSuccess(state,payload){
            state.courses = payload
        }
}
const actions = {
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

    }
}
export default {
    namespaced:true,
    state,
    getters,
    mutations,
    actions
}