<template>
  <div style="font-weight: bold; font-size: 2em;margin: 0.5rem">
    Welcome ~
  </div>


  <el-tabs model-value="first" @tab-click="handleClick" style="width: 60%; margin: 0 auto;height: fit-content">
    <el-tab-pane label="公司" name="first">
      <el-button type="primary" :loading="load" style="margin-bottom: 10px;" @click="list">
        刷新
      </el-button>

      <br/>
<!--      <div class="alert alert-danger" role="alert" style="text-align: left">-->
<!--        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"-->
<!--             class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img"-->
<!--             aria-label="Warning:">-->
<!--          <path-->
<!--              d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>-->
<!--        </svg>-->
<!--        请忽略该警告，这是用来测试 UI 的-->
<!--      </div>-->
      <el-table :data="companys" empty-text="暂无数据"
                style="width: 60%;box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);margin: 10px auto;">
        <el-table-column prop="id" label="序号" min-width="10%"/>
        <el-table-column prop="companyName" label="公司名" min-width="50%"/>
        <el-table-column prop="createTime" label="注册时间" min-width="40%"/>
      </el-table>
    </el-tab-pane>
    <el-tab-pane label="Demo 2" name="second">这里是 Demo 2</el-tab-pane>
    <el-tab-pane label="Demo 3" name="third">这里是 Demo 3</el-tab-pane>
    <el-tab-pane label="Demo 4" name="fourth">这里是 Demo 4</el-tab-pane>
  </el-tabs>

</template>

<script>
// import { ref } from 'vue'

export default {
  name: 'HelloWorld',

  data() {
    return {
      msg: '后台系统',
      companys: [],
      load: false
    }
  },

  methods: {
    list() {

    }
  }
}

// const count = ref(0)
</script>

<style>

.el-message--error {
  background-color: #f8d7da;
}

</style>
