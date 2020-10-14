<template>
  <div>
    <pre>
      <router-link to="emoji">go to emoji</router-link>

      <router-link to="rolling">go to rolling</router-link>
    </pre>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'emoji',
  data() {
    return {
      url: process.env.BASE_URL
    }
  },
  created () {
    const history = this.$router.history
    const targetUrl = `${this.url}rolling`
    console.log(history.current)
    console.log(targetUrl)
    if (history.current.path !== targetUrl) {
      this.$router.push(targetUrl)
    }
  }
}
</script>

<style>

</style>