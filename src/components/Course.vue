<template>

  <!-- 教程页面 -->

  <transition name="el-fade-in">
    <div style="" v-show="show">


      <vuetyped
          :strings="['Sudoker']"
          :loop="false"
          :smart-backspace="true"
          :cursorChar="'_'"
          :typeSpeed="100"
          :backSpeed="50"
          class="type-head">
        <div class="typing"></div>
      </vuetyped>

      <el-row style="margin: 0 auto;width: 30%;margin-bottom: 4%">
        <el-input
            v-model="search"
            ref="searchBox"
            size="large"
            placeholder="搜索"
            :prefix-icon="Search"
            style="box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)"
            clearable
        />
      </el-row>

      <!--  <el-row>-->
      <!--    <el-col></el-col>-->
      <!--    <img src="co.svg" width="190"/>-->
      <!--  </el-row>-->


      <el-row id="help-grid" :gutter="0" style="margin-top: 2%;">
        <el-col :span="2"></el-col>

        <el-col :span="6" style="text-align: center;">
          <el-card class="cursor-branch">
            <img src="rocket.svg" width="70" height="70">
            <h5 style="font-weight: bold;margin-top: 5%">快速开始</h5>
          </el-card>
        </el-col>

        <el-col :span="1"></el-col>

        <el-col :span="6" style="text-align: center;">
          <el-card class="cursor-branch">
            <img src="政策文件.svg" width="70" height="70">
            <h5 style="font-weight: bold;margin-top: 5%">入门手册</h5>
          </el-card>
        </el-col>

        <el-col :span="1"></el-col>

        <el-col :span="6" style="text-align: center;">
          <el-card class="cursor-branch">
            <img src="code.svg" width="70" height="70">
            <h5 style="font-weight: bold;margin-top: 5%">开发者</h5>
          </el-card>
        </el-col>

      </el-row>

      <el-row id="help-grid1" :gutter="0" style="margin-top: 3%;">
        <el-col :span="2"></el-col>

        <el-col :span="6" style="text-align: center;">
          <el-card class="cursor-branch">
            <img src="user.svg" width="70" height="70">
            <h5 style="font-weight: bold;margin-top: 5%">用户相关</h5>
          </el-card>
        </el-col>

        <el-col :span="1"></el-col>

        <el-col :span="6" style="text-align: center;">
          <el-card class="cursor-branch">
            <img src="junior.svg" width="70" height="70">
            <h5 style="font-weight: bold;margin-top: 5%">进阶技巧</h5>
          </el-card>
        </el-col>

        <el-col :span="1"></el-col>

        <el-col :span="6" style="text-align: center;">
          <el-card class="cursor-branch">
            <img src="faq.svg" width="70" height="70">
            <h5 style="font-weight: bold;margin-top: 5%">常见问题</h5>
          </el-card>
        </el-col>

        <el-col :span="2"></el-col>

      </el-row>

    </div>
  </transition>


</template>

<script setup>
import {Search} from "@element-plus/icons-vue";
</script>

<script>
import vuetyped from "vue3typed/libs/typed";

export default {
  name: "Course",
  components: {
    vuetyped
  },

  data() {
    return {
      show: false,
      search: ""
    }
  },

  mounted() {
    this.show = true
  }
}
</script>

<style scoped>

.cursor-branch {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  cursor: pointer
}

.type-head {
  font-size: 50px;
  margin: 0 auto;
  text-align: center;
  width: fit-content;
  height: 150px;
  color: #666666;
}

</style>