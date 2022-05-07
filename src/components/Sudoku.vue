<template>

  <div id="p" @touchmove.prevent>

    <div style="width: 100%;margin: 0 auto;line-height: 50px">
      <span style="float: left;line-height: 50px">
        <el-button
            class="button-shadow"
            type="success"
            title="提交"
            :icon="Check"
            @click="check"
            circle>

        </el-button>

      </span>&nbsp;

      <el-button type="primary" style="margin: 5px auto;" class="button-shadow" @click="go">{{ status }}</el-button>
      <span style="float: right;line-height: 50px;font-weight: bold;font-size: larger">{{ timer }}</span>
    </div>

    <div>
      <table style="width: 100%">
        <tr v-for="(row, ri) in data" key="row"
            :class="(ri === 2 || ri === 5 || ri === 8) ? 'edge-line' : (ri === 0 || ri === 3 || ri === 6) ? 'edge-top' : ''">
          <td
              v-for="(col, ci) in row"
              key="ci"
              :class="(ci === 2 || ci === 5 || ci === 8) ? 'edge' : (ci === 0 || ci === 3 || ci === 6) ? 'edge-right' : ''"
          >
            <input
                :id="setId(ri, ci)"
                key="index"
                :value="(col === 0) ? '' : col"
                spellcheck="false"
                :class="{'grid':true}"

                readonly="readonly"
                @focus="setPos(ri, ci)"
                @keyup="edit"
            />
          </td>
        </tr>
      </table>
    </div>


  </div>

</template>

<script setup>
import {Check} from "@element-plus/icons-vue";
</script>

<script>
import client from "@/api/client";
import {onMounted, ref} from "vue";

export default {
  name: "Sudoku",
  props: ["user"],
  data() {
    return {
      data: [
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0]
      ],
      uneditable: [
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0]
      ],
      currentX: 100,
      currentY: 100,
      sec: 0,
      min: 0,
      mil: 0,
      timer: '00:00',
      status: '开始',
      currTimer: null,
      dom: null,
      screenWidth: 1000
    }
  },

  setup() {
    const ljc = ref(null)
    onMounted(() => {
      console.log(ljc)

    })
    document.onkeydown = function (e) {
      if (e.keyCode === 37) {
        //自己的代码
        return false;
      }
      if (e.keyCode === 38) {
        //自己的代码
        return false;
      }
      if (e.keyCode === 39) {
        //自己的代码
        return false;
      }
      if (e.keyCode === 40) {
        //自己的代码
        return false;
      }
    }
    return {
      ljc
    }
  },

  mounted() {


    client.dailySudoku().then(resp => {
      this.data = resp.data.data.data
      for (let row = 0; row < this.data.length; row++) {
        for (let col = 0; col < this.data[row].length; col++) {
          if (this.data[row][col] !== 0) {
            this.uneditable[row][col] = 1
          }
        }
      }
    })


  },

  methods: {

    setId(ri, ci) {
      return ri + '-' + ci
    },

    go() {
      // document.getElementById('lll').focus()
      if (this.status === '开始') {
        this.start()
      } else if (this.status === '暂停') {
        this.pause()
      }
    },

    time() {
      this.sec++
      if (this.sec === 60) {
        this.min++
        this.sec = 0
      }
      const minute = this.min >= 10 ? this.min : '0' + this.min
      const second = this.sec >= 10 ? this.sec : '0' + this.sec
      this.timer = minute + ':' + second
    },

    timePerMil() {
      this.mil += 50
      if (this.mil >= 1000) {
        this.sec++
        this.mil = 0
      }
      if (this.sec >= 60) {
        this.min++
        this.sec = 0
      }
      const minute = this.min >= 10 ? this.min : '0' + this.min
      const second = this.sec >= 10 ? this.sec : '0' + this.sec
      this.timer = minute + ':' + second
    },

    start() {
      this.status = '暂停'
      // 计时间隔 50ms
      this.currTimer = setInterval(this.timePerMil, 50)
    },

    // 暂停计时
    pause() {
      clearInterval(this.currTimer)
      this.status = '开始'
    },

    clearTime() {
      this.sec = 0
      this.min = 0
    },

    // 点击时获取当前位置
    setPos(row, col) {
      this.currentX = row
      this.currentY = col
    },

    // 输入
    edit(e) {

      // 如果是数字，则输入
      if ((e.keyCode >= 96 && e.keyCode <= 105) || (e.keyCode >= 48 && e.keyCode <= 57)) {
        if (this.uneditable[this.currentX][this.currentY] === 0) {
          this.data[this.currentX][this.currentY] = Number(e.key)
        }
      }

      // 如果是方向键，则移动当前位置
      if (e.keyCode >= 37 && e.keyCode <= 40) {

        // 左
        if (e.keyCode === 37) {
          this.currentY--
          if (this.currentY < 0) {
            this.currentY = 8
          }
        }

        // 上
        if (e.keyCode === 38) {
          this.currentX--
          if (this.currentX < 0) {
            this.currentX = 8
          }
        }

        // 右
        if (e.keyCode === 39) {
          this.currentY++
          if (this.currentY > 8) {
            this.currentY = 0
          }
        }

        // 下
        if (e.keyCode === 40) {
          this.currentX++
          if (this.currentX > 8) {
            this.currentX = 0
          }
        }

        document.getElementById(this.currentX + '-' + this.currentY).focus()
      }
      return false
    },

    // 检查
    check() {
      // let checked = true
      // for (let row = 0; row < this.data.length; row++) {
      //   // 判断 行 / 列 重复
      //   if (this.isRowRepeat(row) || this.isColRepeat(row)) {
      //     return false
      //   }
      //   // 判断 宫 重复
      //   if (row % 3 === 0) {
      //     for (let col = 0; col < this.data[row].length; col++) {
      //       if (col % 3 === 0) {
      //         // 获取 宫
      //         let palace = []
      //         for (let i = 0; i < 3; i++) {
      //           for (let j = 0; j < 3; j++) {
      //             palace.push(this.data[row + i][col + j])
      //           }
      //         }
      //         if (this.isRowRepeat(palace)) {
      //           checked = false
      //         }
      //       }
      //     }
      //   }
      // }
      //
      // // 触发 完成 事件
      // this.$emit('finish')
      client.download().then(resp => {
        console.log(resp.data)
      })
    },

    isRowRepeat(row) {
      let arr = this.data[row];
      let hash = {}
      for (let num in arr) {
        if (arr[num] === 0) {
          return true
        }
        if (hash[arr[num]]) {
          return true
        } else {
          hash[arr[num]] = true
        }
      }
      return false
    },

    isColRepeat(col) {
      let arr = this.getCol(col)
      let hash = {}
      for (let num in arr) {
        if (arr[num] === 0) {
          return true
        }
        if (hash[arr[num]]) {
          return true
        } else {
          hash[arr[num]] = true
        }
      }
      return false
    },

    getCol(col) {
      let arr = []
      for (let row = 0; row < this.data.length; row++) {
        arr.push(this.data[row][col])
      }
      return arr
    }

  }

}
</script>

<style scoped>

.button-shadow {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04)
}

/*table {*/
/*  height: 90px;*/
/*}*/

/*tr {*/
/*  height: 10px;*/
/*}*/

td {
  /*width: 30px;*/
  padding: 0;
}

#lll:focus {
  color: red;
}

.grid {
  /*background-color: darkgreen;*/
  border: none;
  outline: none;
  /*width: 60px;*/
  width: 100%;
  height: 40px;
  line-height: 60px;
  font-size: 25px;
  text-align: center;
  /*box-shadow: 3px 3px 5px #888888;*/
  caret-color: transparent;
  cursor: pointer;
  padding: 0;
  /*margin: 3px;*/
}

.grid-inner {
  margin: 3px;
}

.grid-bottom {
  /*margin: 3px 3px 10px 3px;*/
  margin: 3px;
}

.question {
  color: aliceblue;
}

.user-input {
  color: gold;
}

.grid:hover {
  cursor: pointer;
  background: rgba(235, 235, 235, 0.6);
}

.grid:focus {
  cursor: pointer;
  background: rgba(235, 235, 235, 0.6);
}

.edge {
  border-left: 1px solid grey;
  border-right: 4px solid grey;
}

.edge-right {
  border-right: 1px solid grey;
  border-left: 4px solid grey;
}

.edge-line {
  border-top: 1px solid grey;
  border-bottom: 4px solid grey;
}

.edge-top {
  border-top: 4px solid grey;
  border-bottom: 1px solid grey;
}

</style>