import { createApp } from 'vue'
import { pinia } from './store'
import { router } from './router'
import { plugin, defaultConfig } from '@formkit/vue'
import config from '../formkit.config'

import App from './App.vue'
import './style.css'

const app = createApp(App)

app
  .use(router)
  .use(pinia)
  .use(plugin, defaultConfig(config))

  app.mount('#app')
