<template>

  <el-container id="out-container">
    <el-header>
      <nav class="navbar navbar-expand-lg navbar-light" style="height: 100%">
        <div class="container-fluid">
          <a class="navbar-brand" target="_self" href="/" style="user-select:none;">
<!--            <img src="/bootstrap-logo.svg" class="d-inline-block align-text-top" alt="" width="30" height="24">-->
<!--            <img id="icon" alt="数独客" src="/sudoku.png" />-->
            &nbsp;<strong style="font-size: larger;">Sudoker</strong>
          </a>

          <form class="d-flex">

            <el-dropdown placement="bottom-end">

              <el-avatar class="ava" size="medium"
                         src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"/>

              <template #dropdown>
                <el-dropdown-menu>
                  <div style="margin: 10% 10%;font-family: 微软雅黑, sans-serif;font-size: medium">{{user}}</div>
                  <el-divider content-position="center"></el-divider>
                  <el-dropdown-item icon="el-icon-bangzhu" style="user-select: none;">帮助中心</el-dropdown-item>
                  <el-dropdown-item icon="el-icon-close" style="color: red;user-select: none;" @click.native="logout">
                    退出登录
                  </el-dropdown-item>
                </el-dropdown-menu>
              </template>

            </el-dropdown>
          </form>

        </div>
      </nav>
    </el-header>
    <el-container id="in-container">

      <el-aside>

        <el-menu
            :default-active="$route.path"
            :router="true"
        >

          <el-menu-item index="/adm/sudoku">
            <i class="el-icon-document"></i>
            <span slot="title">数独</span>
          </el-menu-item>

          <el-menu-item index="/adm/user">
            <i class="el-icon-user-solid"></i>
            <span slot="title">用户管理</span>
          </el-menu-item>

          <el-menu-item index="/adm/demo">
            <i class="el-icon-document"></i>
            <span slot="title">Demo</span>
          </el-menu-item>

        </el-menu>

      </el-aside>

      <el-main>

        <router-view/>

      </el-main>

    </el-container>

  </el-container>

</template>

<script>

export default {
  name: "admin",
  data() {
    return {
      user: '李健成',
      place: 'bottom-end',
      activerouter: '/'
    }
  }
}

</script>

<style scoped>

::selection {
  background-color: lightblue;
}

::-moz-selection {
  background-color: lightblue;
}

.container-fluid {
  height: auto;
}

.el-header {
  background-color: white;
  color: var(--el-text-color-primary);
  text-align: center;
  line-height: 60px;
  height: 60px;

  /*border-style: solid;*/
  position: relative;
  z-index: 10;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
}

.el-aside {
  background-color: white;
  color: var(--el-text-color-primary);
  text-align: center;
  line-height: 200px;
  width: 10%;
  border-right: 1px gainsboro solid;
}

.el-main {
  background-color: #fafafa;
  color: var(--el-text-color-primary);
  text-align: center;
  /*line-height: 160px;*/
}

.el-menu-item {
  text-align: left;
  /*user-select: none;*/
}

.el-menu-item.is-active {
  background-color: #e3e8f0;
  box-shadow: inset -4px 0 0 0 #409EFF;
  border-right: solid 0;
}

.el-menu {
  border-right: solid 0;
}

.el-divider {
  width: 70%;
  margin: 0 auto;
}


#out-container {
  padding: 0;
  margin: 0;
  height: 100%;
}

#in-container {
  padding: 0;
  margin: 0;
  height: 93%;
  width: 100%;
}

</style>