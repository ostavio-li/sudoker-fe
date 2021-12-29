import {createApp} from 'vue'
import {createStore} from "vuex";
import Element from 'element-plus'
import 'element-plus/dist/index.css'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import router from './router'
import App from './App.vue'

const store = createStore({
    state() {
        return {
            loggedin: false
        }
    },
    mutations: {
        login(state) {
            state.loggedin = true
        },
        logout(state) {
            state.loggedin = false
        }
    }
})

const app = createApp(App);
app.use(Element)
app.use(router)
app.use(store)
app.mount('#app')
