import './assets/main.css'

// primevue css
import 'primevue/resources/themes/aura-light-green/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css'



import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from "@/store/main";
import uiComponets from "@/ui-componets";
import Toaster from "@meforma/vue-toaster";
import VueMask from '@devindex/vue-mask';

import PrimeVue from "primevue/config";
import InputText from "primevue/inputtext";
import InlineMessage from "primevue/inlinemessage";
import FloatLabel from "primevue/floatlabel";
import FileUpload from "primevue/fileupload";
import RadioButton from "primevue/radiobutton";
import Calendar from "primevue/calendar";
import InputMask from "primevue/inputmask";
import Password from "primevue/password";
import Button from "primevue/button";
import InputIcon from 'primevue/inputicon';
import InputGroup from 'primevue/inputgroup';
import InputGroupAddon from 'primevue/inputgroupaddon';
import InputOtp from 'primevue/inputotp';
import ProgressSpinner from 'primevue/progressspinner';
import Textarea from 'primevue/textarea';
import Dropdown from 'primevue/dropdown';
import InputNumber from 'primevue/inputnumber';



import {Form, Field, ErrorMessage, defineRule, configure} from "vee-validate";
import {email, required} from "@vee-validate/rules";
import ToastService from "primevue/toastservice";

// VeeValidate sozlamalari
// configure({
//     generateMessage: ctx => ctx.message,
//     validateOnInput: false // Har bir kiritishda tekshirish
// });


const app = createApp(App)
uiComponets.map(componet=>{
    app.component(componet.name, componet)
})

app.use(ToastService);
// primeng component
app.component('InputText', InputText);
app.component('InlineMessage', InlineMessage);
app.component('FloatLabel', FloatLabel);
app.component('FileUpload', FileUpload);
app.component('RadioButton', RadioButton);
app.component('Calendar', Calendar);
app.component('InputMask', InputMask);
app.component('Password', Password);
app.component('Button', Button);


app.component('Form', Form);
app.component('Field', Field);
app.component('ErrorMessage', ErrorMessage);
app.component('InputIcon', InputIcon);
app.component('InputGroup', InputGroup);
app.component('InputGroupAddon', InputGroupAddon);
app.component('InputOtp', InputOtp);
app.component('ProgressSpinner', ProgressSpinner);
app.component('Textarea', Textarea);
app.component('Dropdown', Dropdown);
app.component('InputNumber', InputNumber);


defineRule('required', required);
defineRule('email', email);

app.use(store)
app.use(router)

app.use(Toaster)
app.use(VueMask);

// primeng
app.use(PrimeVue);



app.mount('#app')
