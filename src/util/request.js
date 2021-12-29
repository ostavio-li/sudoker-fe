import axios from "axios";
import {ElMessage} from "element-plus";

const request = axios.create({
    baseURL: '/',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json; charset=utf8'
    }
})

request.defaults.withCredentials = false

request.interceptors.request.use(
    config => {
        let token = localStorage.getItem("Authorization")
        if (token != null) {
            config.headers['Authorization'] = token
        }
        return config
    }, error => {
        return Promise.reject(error)
    }
)

request.interceptors.response.use(
    response => {
        return response
    }, error => {
        ElMessage.warning('服务器错误')
        return Promise.reject(error)
    }
)

export default request