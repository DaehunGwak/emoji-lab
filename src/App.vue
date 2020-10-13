<template>
  <div id="app">
    <Emoji></Emoji>
  </div>
</template>

<script>
import Emoji from './components/Emoji.vue'

export default {
  name: 'App',
  components: {
    Emoji
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
