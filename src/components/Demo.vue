<template>

  <div
      v-for="(i, index) in data"
      :ref="el => list[index] = el"
  >
    <span
        v-for="(j, col) in i"
        style="margin: 0 5px 0 5px"

    >
      {{j}}
    </span>

  </div>

</template>

<script>
import {ref, onMounted} from "vue";

export default {
  name: "Demo",
  data() {
    return {
      data: [
          ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
          ['h', 'i', 'j', 'k', 'l', 'm', 'n']
      ],
      list: []
    }
  },

  // setup() {
  //   let hello = ref(null)
  //   let world = ref(null)
  //   onMounted(() => {
  //     console.log(world.value)
  //     console.log(hello.value)
  //   })
  //   return {hello}
  // },

  mounted() {
    for (let i = 0; i < this.list.length; i++) {
      this.list[i].className = 'ele'
      // if (i % 2 === 0) {
      //   this.list[i].classList.add('back')
      // }
    }

    for (let i = 0; i < this.list.length; i++) {
      let element = this.list[i].inner;

      console.log(element)
    }

  }

}
</script>

<style scoped>

.ele {
  color: blue;
}

.back {
  background-color: green;
}

</style>