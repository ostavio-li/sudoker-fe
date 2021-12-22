<template>
  <div style="width: 100%;margin: 0 auto;text-align: center;padding-top: 20px">

    <el-row :gutter="0">
      <el-col :span="7">

      </el-col>

      <el-col :span="10">
        <div style="margin: 0 auto;" class="sudoku-box">
          <el-card>
            <div style="text-align: left">每日一题</div>
            <Sudoku class="su" @finish="put"/>
          </el-card>

        </div>
      </el-col>
      <!--      <el-col :span="6">-->
      <!--        c-->
      <!--      </el-col>-->
    </el-row>


  </div>
</template>

<script>
import Sudoku from "@/components/Sudoku";
export default {
  name: "First",
  components: {
    Sudoku
  }
}
</script>

<style scoped>

</style>