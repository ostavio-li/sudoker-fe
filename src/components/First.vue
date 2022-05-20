<template>

  <transition name="el-fade-in">
  <div v-show="show" style="width: 100%;margin: 0 auto;text-align: center;padding-top: 20px">

    <vuetyped
        :strings="['数独客', 'Sudoker']"
        :loop="false"
        :smart-backspace="true"
        :cursorChar="'_'"
        :typeSpeed="100"
        :backSpeed="50"
        class="type-head">
      <div class="typing"></div>
    </vuetyped>

    <el-row :gutter="0">
      <el-col :span="6">

      </el-col>

      <el-col :span="12">
<!--         这里是数独组件，目前无法响应窗口缩放-->
        <div style="margin: 0 auto;" class="sudoku-box">
          <el-card style="height: 100%;width: 100%">
            <Sudoku class="su" @finish="put"/>
          </el-card>

        </div>
      </el-col>
      <!--      <el-col :span="6">-->
      <!--        c-->
      <!--      </el-col>-->
    </el-row>


  </div>

  </transition>
</template>

<script>
import Sudoku from "@/components/Sudoku";
import vuetyped from "vue3typed/libs/typed";

export default {
  name: "First",
  components: {
    Sudoku,
    vuetyped
  },
  data() {
    return {
      show: false
    }
  },
  mounted() {
    this.show = true
  }
}
</script>

<style scoped>

.type-head {
  font-size: 50px;
  margin: 0 auto;
  text-align: center;
  width: fit-content;
  height: 150px;
  color: #666666;
}

.sudoku-box {
  /*border: #888888 solid 2px;*/
  /*border-radius: 20px;*/
  width: 450px;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

</style>