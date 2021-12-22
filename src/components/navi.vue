<template>

  <div class="nav">
    <span style="margin: 0 auto;width: 90%;line-height: 60px">
      <img id="icon" alt="数独客" src="/sudoku.png" />
      <strong style="font-size: larger;margin-left: 40px">Sudoker</strong>

      <!-- 导航链接 -->
      <span style="margin-left: 2%">

        <el-link :underline="false" type="info" style="margin-right: 1%">
          教程
        </el-link>

        <el-link :underline="false" type="info" style="margin-right: 1%">
          题库
        </el-link>

        <el-link :underline="false" type="info" style="margin-right: 1%">
          商店
        </el-link>

        <el-link :underline="false" type="info" style="margin-right: 1%">
          比赛
        </el-link>

        <el-link :underline="false" type="info" style="margin-right: 1%">
          下载
        </el-link>

      </span>

      <span style="float:right;">
        <el-button type="primary" size="small" plain @click="toAdmin">联系我们</el-button>
        <form style="display: inline-block;line-height: 60px;height: 60px">

            <el-dropdown placement="bottom-end" style="height: 60px; line-height: 60px">

              <el-avatar class="avat" size="medium"
                         src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"/>

              <template #dropdown>
                <el-dropdown-menu>
                  <div style="margin: 10% 10%;font-family: 微软雅黑, sans-serif;font-size: medium">{{user}}</div>
                  <el-divider content-position="center"></el-divider>
                  <el-dropdown-item :icon="Help" style="user-select: none;">帮助中心</el-dropdown-item>
                  <el-dropdown-item :icon="Close" style="color: red;user-select: none;" @click="logout">
                    退出登录
                  </el-dropdown-item>
                </el-dropdown-menu>
              </template>

            </el-dropdown>
          </form>
      </span>

    </span>
  </div>

</template>

<script>
import router from "../router";

export default {
  name: "navi",
  methods: {
    toAdmin() {
      router.push('/adm/user')
    }
  }
}
</script>

<style scoped>

.avat {
  border: 1px solid burlywood;
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

#icon {
  position: absolute;
  top: 50%;
  margin-top: -16px;
}

</style>