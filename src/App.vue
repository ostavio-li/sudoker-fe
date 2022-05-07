<template>
  <div v-show="!mobile" id="app">
    <router-view />
  </div>



</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data() {
    return {

    }
  },
  mounted() {

  },
  methods: {
    isMobile() {

    }
  }
}
</script>

<style>

body, html {
  height: 100%;
  padding: 0;
  margin: 0;
  background-color: #eff2f7;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  height: 100%;
}
</style>
