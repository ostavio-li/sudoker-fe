<template>

  <div class="nav">
    <span style="margin: 0 auto;width: 90%;line-height: 60px">
<!--      <img id="icon" alt="数独客" src="sudoku.png"/>-->
      <img src="logo.svg" alt="数独客" title="数独客" style="line-height: 60px; margin-bottom: 2px" width="40" height="40" />
      <strong style="font-size: larger;margin-left: 10px">Sudoker</strong>

      <!-- 导航链接 -->
      <span style="margin-left: 2%;display: inline-block">

        <el-menu
            :default-active="$route.path"
            class="nav-link"
            mode="horizontal"
            text-color="#505050"
            :ellipsis=false
            :router="true"
        >
          <el-menu-item index="/">首页</el-menu-item>
          <el-menu-item index="/course">教程</el-menu-item>
          <el-menu-item index="3" disabled title="功能未上线">比赛</el-menu-item>
          <el-menu-item index="4" disabled title="功能未上线">下载</el-menu-item>
          <el-menu-item index="5" disabled title="功能未上线">商店</el-menu-item>
          <el-menu-item index="6" disabled title="功能未上线">论坛</el-menu-item>
        </el-menu>

      </span>

      <span style="float:right;">
        <el-button type="primary" size="small" plain @click="toAdmin">关于</el-button>
        <form v-if="hasLogin" style="display: inline-block;line-height: 60px;height: 60px">

            <el-dropdown placement="bottom-end" style="height: 60px; line-height: 60px">

              <el-avatar class="avat" :fit="cover" size="medium" src="ava.png"/>

              <template #dropdown>
                <el-dropdown-menu>
                  <div style="margin: 10% 10%;font-family: 微软雅黑, sans-serif;font-size: medium">{{ user }}</div>
                  <el-divider content-position="center" ></el-divider>
                  <el-dropdown-item :icon="Help" style="user-select: none;">帮助中心</el-dropdown-item>
                  <el-dropdown-item
                      :icon="Close"
                      style="color: red;user-select: none;"
                      @click="logout">
                    退出登录
                  </el-dropdown-item>
                </el-dropdown-menu>
              </template>

            </el-dropdown>
          </form>
        <el-button v-if="!hasLogin" type="success" plain size="small" @click="this.$router.push('login')">登录</el-button>
      </span>

    </span>
  </div>

</template>

<script setup>
import {Help, Close} from "@element-plus/icons-vue";
</script>

<script>
import router from "../router";

export default {
  name: "navi",
  data() {
    return {
      user: '李健成',
      activeIndex: '1',
      // 是否登录
      // 是否是管理员
      isAdmin: false
    }
  },
  computed: {
    hasLogin: function () {
      return this.$store.state.loggedin
    }
  },
  methods: {
    toAdmin() {
      router.push('/adm/user')
    },
    logout() {
      localStorage.removeItem("Authorization")
      this.$store.commit('logout')
      this.$router.go(0)
    }
  },
  mounted() {
    if (localStorage.getItem('Authorization') != null) {
      this.$store.commit('login')
    }
  }
}
</script>

<style scoped>

/*会员金边*/
/*burlywood*/

/*普通黑边*/
/*lightslategrey*/

.el-divider--horizontal {
  margin: 0;
}

.el-menu--horizontal {
  border-bottom: none;
}

.el-menu {
  --el-menu-hover-bg-color: transparent;
  --el-menu-hover-color: #409eff;
}

.avat {
  border: 1px solid lightslategrey;
  outline: none;
  margin-left: 6px;
  vertical-align: middle;
  margin-bottom: 2px;
}

.nav {
  height: 60px;
  width: 100%;
  line-height: 60px;
  background-color: #fafafa;
  box-shadow: 0 3px 3px #aaaaaa;
  /*text-align: center;*/
}

.nav-link {
  background-color: transparent;
  line-height: 60px;
  padding: 0;
}

#icon {
  position: absolute;
  top: 50%;
  margin-top: -16px;
}

</style>