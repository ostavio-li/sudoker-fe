<template>

  <div class="nav">
    <span style="margin: 0 auto;width: 90%;line-height: 60px">
      <img id="icon" alt="数独客" src="/sudoku.png" />
      <strong style="font-size: larger;margin-left: 40px">Sudoker</strong>
      <span style="float:right;">
        <el-button type="primary" @click="toAdmin">Admin</el-button>
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