import { createApp } from 'vue'
import App from './app.vue'
import youngDesign from 'young-design'
import { Message } from 'young-design'
const app = createApp(App)

app.use(youngDesign).use(Message).mount('#app')