<template>
  <div class="emoji">
    <div id="emojiFirst">🥺</div>
  </div>
</template>

<script>
export default {
  name: 'Emoji',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.emoji {
  font-size: 10rem;
  text-align: center;
}

#emojiFirst {
  display: inline-block;
  padding-top: 2%;
  animation-duration: 2s;
  animation-name: spin;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}

@keyframes spin {
  100% { transform: rotate(360deg);}
}
</style>
