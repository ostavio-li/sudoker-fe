<!-- 登录页面 -->
<template>
  <div>

    <el-card class="login" style="">

      <div style="text-align: center;width: 80%;margin: 0 auto">
        <h4 style="line-height: 32px"><img src="/logo.svg" style="margin-bottom: 2px" width="32"  alt="logo"/> Sudoker</h4>
        <div>
          <el-input ref="phone" style="margin: 5px" placeholder="手机号" autofocus="autofocus" :prefix-icon="Avatar" maxlength="11" clearable show-word-limit v-model="user.phone"/>
        </div>
        <div>
          <el-input style="margin: 5px" placeholder="密码" :prefix-icon="Lock" clearable v-model="user.password" show-password/>
        </div>
        <div>
          <el-input style="margin: 5px;width: 65%;" disabled placeholder="验证码" v-model="user.captcha"/>
          <el-button style="width: 30%;margin-left: 2%;" disabled @click="getCaptcha">{{captcha}}</el-button>
        </div>
        <div style="width: 100%;height: 20px;">
          <el-link style="float: right;font-size: 5px" type="info" @click="forget">忘记密码</el-link>
        </div>
        <div>
          <el-button @click="forget">登录 / 注册</el-button>
        </div>
      </div>

    </el-card>
  </div>
</template>

<script setup>
import {Avatar, Lock} from "@element-plus/icons-vue";
</script>

<script>


import ElMessage, {ElMessageBox} from "element-plus";

export default {
  name: "Login",
  data() {
    return {
      captcha: '获取验证码',
      user: {
        phone: '',
        password: '',
        captcha: ''
      }
    }
  },
  mounted() {

  },
  methods: {
    forget() {
      ElMessageBox.alert('😝放弃吧，这个链接毫无作用', '警告', {
        confirmButtonText: '确认',
        callback: (action) => {

        },
        showClose: false,
        closeOnClickModal: true
      })
    },
    getCaptcha() {
      ElMessageBox({
        title: '警告',
        message: '😝 目前无验证码',
        confirmButtonText: '确认',
        callback: (action) => {

        },
        showClose: false,
        closeOnClickModal: true
      })
    }
  }
}
</script>

<style scoped>

.login {
  width: 500px;
  height: 300px;
  position: absolute;
  top: 53%;
  left: 50%;
  margin: -200px 0 0 -250px;
}

</style>