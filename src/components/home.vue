<template>

  <Navi class="h"/>

  <!-- Gitee 挂件 -->
  <a href='https://gitee.com/carlos_li/sudoker-fe' target="_blank" title="Fork me on Gitee"
     style="position: fixed;z-index: 1;right: 1%">
    <img src='https://gitee.com/carlos_li/sudoker-fe/widgets/widget_5.svg' alt='Fork me on Gitee'/>
  </a>

  <!-- 占位 -->
  <div style="height: 60px;"/>

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
  <el-backtop/>

</template>

<script>
import Sudoku from "./Sudoku.vue";
import {computed, reactive, onMounted, onUnmounted, ref, toRefs, watch} from "vue";
import ModelButton from "./ModelButton.vue";
import Navi from "./navi.vue";

export default {
  name: "Home",
  setup() {
    // const {counter, doubleCounter} = useCounter()
    // let msg = ref('Hello world')
    // const desc = ref(null)
    // const dc = ref(null)
    // watch(counter, (val, oldVal) => {
    //   desc.value.textContent = `Change : ${oldVal} -> ${val}`
    // })
    // watch(doubleCounter, (val, oldVal) => {
    //   dc.value.innerText = `Double change: ${oldVal} -> ${val}`
    // })
    // return {counter, doubleCounter, msg, desc, dc}
  },
  components: {Navi, ModelButton, Sudoku},
  methods: {
    put() {
      console.log('finish!')
    }
  },
  mounted() {

  }
}

function useCounter() {
  const data = reactive({
    counter: 1,
    doubleCounter: computed(() => data.counter * 2)
  })
  let timer

  onMounted(() => {
    timer = setInterval(() => {
      data.counter++
    }, 1000)
  })

  onUnmounted(() => {
    clearInterval(timer)
  })

  return toRefs(data)
}

</script>

<style scoped>
div {
  user-select: none;
}

html, body {
  height: 100%;
}

.h {
  position: fixed;
  top: 0;
  z-index: 1;
}

.su {
  width: 100%;
}

.sudoku-box {
  /*border: #888888 solid 2px;*/
  /*border-radius: 20px;*/
}


.el-card {

}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.box-card {
  width: 480px;
}

</style>