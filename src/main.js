import './assets/main.css'

import {createApp} from 'vue'
import {createStore} from "vuex";
import App from './App.vue'
import router from './router'


const store = createStore({
    /* state, actions, mutations */
    state: {
        result_test: 0,
    },
    mutations: {
    setResulTest(state, new_result) {
      state.result_test = new_result;
    }
  }
});

const app = createApp(App)

app.use(router)
app.use(store)

app.mount('#app')
