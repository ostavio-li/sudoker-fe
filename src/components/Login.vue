<!-- 登录页面 -->
<template>
  <div @keydown="keyDown">

    <el-card class="login" style="">

      <div style="text-align: center;width: 80%;margin: 0 auto">
        <h4 style="line-height: 32px"><img src="/logo.svg" style="margin-bottom: 2px" width="32" alt="logo"/> Sudoker
        </h4>
        <div>
          <el-input ref="phone" style="margin: 5px" placeholder="用户名" autofocus="autofocus" :prefix-icon="Avatar"
                    maxlength="15" minlength="8" clearable show-word-limit v-model="user.username"/>
        </div>
        <div>

          <el-input style="margin: 5px" placeholder="密码" :prefix-icon="Lock" clearable v-model="user.password"
                    show-password/>


        </div>
        <!--        <div>-->
        <!--          <el-input style="margin: 5px;width: 65%;" disabled placeholder="验证码" v-model="user.captcha"/>-->
        <!--          <el-button style="width: 30%;margin-left: 2%;" disabled @click="getCaptcha">{{ captcha }}</el-button>-->
        <!--        </div>-->
        <!--        <div id="nc" class="slide">-->
        <!--        </div>-->

        <div style="width: 100%;height: 20px;">
          <el-link style="float: right;font-size: 5px" type="info" @click="forget">忘记密码</el-link>
        </div>
        <div>
          <el-button @click="login(user.username, user.password)" :disabled="!canLogin">登录 / 注册</el-button>
        </div>
      </div>

    </el-card>
  </div>
</template>

<script setup>
import {Avatar, Lock} from "@element-plus/icons-vue";
</script>

<script>
import {ElMessage, ElMessageBox} from "element-plus";
import client from "@/api/client";

export default {
  name: "Login",
  data() {
    return {
      captcha: '获取验证码',
      user: {
        username: '',
        password: '',
        captcha: ''
      }
    }
  },
  computed: {
    canLogin: function () {
      return this.user.username.length > 0 && this.user.password.length > 0
    }
  },
  mounted() {
    // var c = svgCaptcha.create()
    // console.log(c)
    // window.addEventListener('keydown', this.keyDown)
  },

  beforeRouteLeave() {
    // window.removeEventListener('keydown', this.keyDown)
  },

  methods: {

    keyDown(e) {
      if (e.key === 'Enter') {
        if (this.canLogin) {
          this.login(this.user.username, this.user.password)
        } else {
          console.log('用户名或密码为空')
        }
      }
    },

    forget() {
      ElMessageBox.alert('😝 用户名: ' + this.user.username + ', 密码: ' + this.user.password, '警告', {
        confirmButtonText: '确认',
        callback: (action) => {

        },
        showClose: false,
        closeOnClickModal: true
      })
    },
    login(username, password) {
      console.log('Signed in')
      client.login(username, password).then(resp => {
        if (resp.data.code === '500') {
          ElMessage({
            type: 'error',
            message: resp.data.message
          })
        } else {
          const token = resp.data.data;
          localStorage.setItem('Authorization', token)
          ElMessage({
            type: 'success',
            message: '登录成功'
          })
        }
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
  width: 460px;
  height: 260px;
  position: absolute;
  top: 53%;
  left: 50%;
  margin: -200px 0 0 -250px;
}

</style>