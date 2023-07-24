import teacherService from "@/service/teacher";

const state = {
    teachers: null
}

const getters = {
    teachers: state => {
        return state.teachers
    }
}

const mutations = {
    getAllTeachersSuccess(state, payload) {
        state.teachers = payload
    }
}
    const actions = {
        getAllTeachers(context) {
            return new Promise((resolve, reject) => {
                teacherService.getAllTeachers()
                    .then(response => {
                        context.commit('getAllTeachersSuccess', response.data)
                        resolve(response.data)
                    })
                    .catch(error => {
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
    actions,
}