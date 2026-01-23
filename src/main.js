import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './pages/App.vue'
import router from './router'
import '@fontsource-variable/geist'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
