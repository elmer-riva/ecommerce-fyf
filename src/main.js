import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import PrimeVue from 'primevue/config'

import Card from "primevue/card"
import Toolbar from "primevue/toolbar"
import IconField from "primevue/iconfield"
import InputIcon from "primevue/inputicon"
import InputText from "primevue/inputtext"
import SplitButton from "primevue/splitbutton"
import 'primeicons/primeicons.css'
import Button from "primevue/button"


const app = createApp(App)

app.use(PrimeVue, {unstyled: true});

app.component('pv-card', Card)
    .component('pv-toolbar', Toolbar)
    .component('pv-iconfield', IconField)
    .component('pv-inputicon', InputIcon)
    .component('pv-inputtext', InputText)
    .component('pv-splitbutton', SplitButton)
    .component('pv-button', Button)

app.mount('#app');
