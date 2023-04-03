import { createApp } from 'vue'
import App from './App.vue'
import {createPinia} from 'pinia'

//Create Pinia Instance 
const pinia = createPinia()

createApp(App).mount('#app')
