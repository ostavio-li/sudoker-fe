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
        if (response.data.code == null) {
            ElMessage.warning('服务器错误')
        } else {
            if (response.data.code !== '200') {
                ElMessage.warning(response.data.message)
            }
        }
        return response
    }, error => {
        ElMessage({
            message: '服务器错误',
            showClose: true,
            type: 'warning',
            duration: 1500
        })
        return Promise.reject(error)
    }
)

export default request