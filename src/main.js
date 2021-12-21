import {createApp} from 'vue'
import Element from 'element-plus'
import 'element-plus/dist/index.css'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import router from './router'
import App from './App.vue'

const app = createApp(App);
app.use(Element)
app.use(router)
app.mount('#app')
