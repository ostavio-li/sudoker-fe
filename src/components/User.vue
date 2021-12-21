<template>
  这里是 用户管理
<!--  <template>-->

<!--    <el-table :data="company" style="width: 100%">-->
<!--      <el-table-column prop="id" label="ID" width="180" />-->
<!--      <el-table-column prop="companyName" label="名称" width="180" />-->
<!--      <el-table-column prop="createTime" label="注册时间" />-->
<!--    </el-table>-->
<!--  </template>-->

</template>

<script>
// import request from "../api/client.js";

export default {
  name: "User",

  data() {
    return {
      company: []
    }
  }

  // mounted() {
  //   request.list().then(resp => {
  //     this.compaany = resp.data.data
  //   })
  // }

}
</script>

<style scoped>

</style>