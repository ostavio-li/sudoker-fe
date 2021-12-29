import axios from "axios";

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
        config.headers['Authorization'] = localStorage.getItem("Authorization")
        return config
    }, error => {
        return Promise.reject(error)
    }
)

request.interceptors.response.use(
    response => {
        return response
    }, error => {
        return Promise.reject(error)
    }
)

export default request