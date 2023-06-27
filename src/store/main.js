import {createStore} from "vuex";
import result_test from "@/modules/result_test"
import auth from "@/modules/auth";
import cabinet from "@/modules/cabinet";
import course from "@/modules/course";
import teacher from "@/modules/teacher";



const store = createStore({
    state: {},
    getters: {},
    mutations: {},
    actions: {},


    modules: {result_test, auth, cabinet, course, teacher},

})
export default store