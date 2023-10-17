import ZoomService from "@/service/zoom";
import CabinetService from "@/service/cabinet";

const state = {
    zoomLink: null,
    isLoading: false,
    zoomCreateError: null,

}
const getters = {
    zoomLink: state => {
        return state.zoomLink
    },
    createZoomLinkError: state => {
        return state.zoomCreateError
    },
    isLoading: state => {
        return state.isLoading
    },
}

const mutations = {

    // create zoom link
    createZoomLinkStart(state) {
        state.isLoading = true
        state.zoomCreateError = null
    },
    createZoomLinkSuccess(state,payload) {
        state.isLoading = false
        state.zoomLink = payload
    },
    createZoomLinkFailure(state, payload) {
        state.isLoading = false
        state.zoomCreateError = payload
    },


}


const actions = {
    createZoomLink(context, id) {
        return new Promise((resolve, reject) => {
            context.commit('createZoomLinkStart')
            ZoomService.createZoomLink(id)
                .then(response => {
                    context.commit('createZoomLinkSuccess',response.data)
                    resolve(response.data)
                })
                .catch(error => {
                    context.commit('createZoomLinkFailure', error.response.data)
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
