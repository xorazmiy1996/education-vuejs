import {createStore} from "vuex";
import result_test from "@/modules/result_test"
import AuthService from "@/service/auth";
import auth from "@/modules/auth";

const store = createStore({
    state: {},
    mutations: {},
    actions: {},
    modules: {result_test, auth},

})
export default store