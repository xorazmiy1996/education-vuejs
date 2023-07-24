import topicService from "@/service/topic";
import teacherService from "@/service/teacher";

const state = {
    isLoading: false,
    topic_task1: null,
    topic_task2: null,
    topic_detail: null,

}

const getters = {
    topic_task1: state => {
        return state.topic_task1
    },
    topic_task2: state => {
        return state.topic_task2
    },
    topic_detail: state => {
        return state.topic_detail
    }
}
const mutations = {
    getAllTopicSuccessTask1(state, payload) {
        state.topic_task1 = payload
    },
    getAllTopicSuccessTask2(state, payload) {
        state.topic_task2 = payload
    },
    getTopicDetailStart(state) {
        state.isLoading = true
    },
    getTopicDetailSuccess(state, payload) {
        state.topic_detail = payload
        state.isLoading = false
    },
    getTopicDetailFailure(state) {
        state.isLoading = false
    },

}
const actions = {
    getAllTopic(context) {
        return new Promise((resolve, reject) => {
            topicService.getAllTopic()
                .then(response => {
                    if (response.data.filter(arr => arr["type"] === "task1").length !== 0) {
                        const topic1 = response.data.filter(arr => arr["type"] === "task1")[Math.floor(Math.random() * response.data.filter(arr => arr["type"] === "task1").length)];
                        context.commit('getAllTopicSuccessTask1', topic1)
                    }
                     if (response.data.filter(arr => arr["type"] === "task2").length !== 0) {
                        const topic2 = response.data.filter(arr => arr["type"] === "task2")[Math.floor(Math.random() * response.data.filter(arr => arr["type"] === "task2").length)];
                        context.commit('getAllTopicSuccessTask2', topic2)
                    }


                    resolve(response.data)
                })
                .catch(error => {
                    reject(error.response.data)
                })
        })
    },
    getTopicDetail(context, id) {
        return new Promise((resolve, reject) => {
            context.commit("getTopicDetailStart")
            topicService.getTopicDetail(id)
                .then(response => {
                    context.commit("getTopicDetailSuccess", response.data)
                    resolve(response.data)
                })
                .catch(error => {
                    context.commit("getTopicDetailFailure")
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