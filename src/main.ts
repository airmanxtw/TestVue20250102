//import './assets/main.css'
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import 'animate.css'
import '@/assets/animista.css'

import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const vuetify = createVuetify({
  components,
  directives,
})

const app = createApp(App)

app.config.errorHandler = (err, instance, info) => {
  debugger
  console.error(err, instance, info)
}

app.use(router).use(vuetify)

app.mount('#app')
