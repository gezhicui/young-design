import { createApp } from 'vue'
import App from './app.vue'
import { Message } from 'young-design'
const app = createApp(App)

app.use(Message).mount('#app')