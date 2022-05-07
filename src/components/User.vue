<template>
<!--  <template>-->

  <el-card style="height: 400px">
    <el-table :data="company" style="width: 100%">
      <el-table-column prop="id" label="ID" width="180" />
      <el-table-column prop="companyName" label="名称" width="180" />
      <el-table-column prop="createTime" label="注册时间" />
    </el-table>
  </el-card>
<!--  </template>-->

  <el-row :gutter="0" style="margin-top: 10px;height: 300px">
    <el-col :span="7">
      <el-card id="main" style="height: 100%">

      </el-card>
    </el-col>

    <el-col :span="10">

      <!-- 这里是数独组件，目前无法响应窗口缩放 -->
      <!--        <div style="margin: 0 auto;" class="sudoku-box">-->
      <!--          <el-card>-->
      <!--            <div style="text-align: left">每日一题</div>-->
      <!--            <Sudoku class="su" @finish="put"/>-->
      <!--          </el-card>-->

      <!--        </div>-->
    </el-col>
    <!--      <el-col :span="6">-->
    <!--        c-->
    <!--      </el-col>-->
  </el-row>

</template>

<script>
// import request from "../api/client.js";
import * as echarts from 'echarts'

export default {
  name: "User",

  data() {
    return {
      company: []
    }
  },

  mounted() {
    // request.list().then(resp => {
    //   this.compaany = resp.data.data
    // })
    var chart = echarts.init(document.getElementById('main'));
    const option = {
      xAxis: {
        type: 'category',
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [120, 190, 150, 80, 70, 110, 130],
          type: 'bar'
        }
      ]
    };
    chart.setOption(option)
  }

}
</script>

<style scoped>

</style>