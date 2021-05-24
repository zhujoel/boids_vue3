import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import PrimeVue from 'primevue/config'
import Button from 'primevue/button'
import Accordion from 'primevue/accordion'
import AccordionTab from 'primevue/accordiontab'
import Slider from 'primevue/slider'
import InputText from 'primevue/inputtext'
import ColorPicker from 'primevue/colorpicker'
import InputNumber from 'primevue/inputnumber'

import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'

createApp(App)
  .use(router)
  .use(PrimeVue)
  .component('Button', Button)
  .component('Accordion', Accordion)
  .component('AccordionTab', AccordionTab)
  .component('Slider', Slider)
  .component('InputText', InputText)
  .component('ColorPicker', ColorPicker)
  .component('InputNumber', InputNumber)
  .mount('#app')
