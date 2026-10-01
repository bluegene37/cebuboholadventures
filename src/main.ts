// Gene - Oct 1, 2026: Installed Vue Router into the main Vue application instance.
/*
import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'

const app = createApp(App)
app.mount('#app')
*/

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'

const app = createApp(App)
app.use(router)
app.mount('#app')

