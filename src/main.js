import './assets/main.css'

import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from "@/store/main";
import uiComponets from "@/ui-componets";

import Toaster from "@meforma/vue-toaster";

const app = createApp(App)
uiComponets.map(componet=>{app.component(componet.name, componet)})


app.use(store)
app.use(router)

app.use(Toaster)

app.mount('#app')
