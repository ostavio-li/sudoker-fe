import {createApp} from 'vue'
import Element from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'

const app = createApp(App);
app.use(Element)
app.mount('#app')
