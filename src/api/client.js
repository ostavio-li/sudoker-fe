import request from "@/util/request";

const BASE_URL = '/api'

// 通用后端接口

export default {

    // 登录
    login(username, password) {
        return request({
            method: 'post',
            url: BASE_URL + '/user/login',
            data: {
                username: username,
                password: password
            }
        })
    }

}