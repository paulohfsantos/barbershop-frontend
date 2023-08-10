import { createApp } from 'vue'
import { pinia } from './store'
import { router } from './router'
import { plugin, defaultConfig } from '@formkit/vue'
import config from '../formkit.config'

import Toast, { PluginOptions, POSITION } from "vue-toastification";
import "vue-toastification/dist/index.css";

import App from './App.vue'
import './style.css'

const app = createApp(App)

const options: PluginOptions = {
  draggable: true,
  position: "top-right" as POSITION,
  timeout: 3000,
  closeOnClick: true,
  pauseOnHover: true,
  hideProgressBar: false,
  icon: true,
}

app
  .use(Toast, options)
  .use(router)
  .use(pinia)
  .use(plugin, defaultConfig(config))

  app.mount('#app')
