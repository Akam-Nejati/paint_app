import { createApp } from 'vue'
import './style.css'
import 'material-icons/iconfont/material-icons.css';
import { createPinia } from 'pinia'
import App from './App.vue'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)    
app.mount('#app')
