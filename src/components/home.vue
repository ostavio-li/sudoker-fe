<template>

  <!-- 导航栏 -->
  <Navi class="h"/>

  <!-- Gitee 挂件 -->
<!--  <a href='https://gitee.com/carlos_li/sudoker-fe' target="_blank" title="Fork me on Gitee"-->
<!--     style="position: fixed;z-index: 1;right: 1%">-->
<!--    <img src='https://gitee.com/carlos_li/sudoker-fe/widgets/widget_5.svg' alt='Fork me on Gitee'/>-->
<!--  </a>-->

  <!-- 占位 -->
  <div style="height: 60px;"/>

  <div v-show="mobile" class="tip">
    😝 暂未适配移动端，建议在PC端访问
  </div>

  <router-view v-show="!mobile"/>
  <el-backtop v-show="!mobile"/>

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
  data() {
    return {
      mobile: true
    }
  },
  methods: {
    put() {
      console.log('finish!')
    }
  },
  mounted() {
    if(/phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone/i.test(navigator.userAgent) === false) {
      this.mobile = false
    }
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

.tip {
  border: 0 solid lightslategrey;
  border-radius: 4px;
  width: fit-content;
  padding: 5px;
  margin: 20px auto;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
}

</style>