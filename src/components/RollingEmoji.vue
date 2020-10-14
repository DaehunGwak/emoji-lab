<template>
  <div class="emoji">
    <pre class="emoji-align emoji-move">🥳🧐🤪🤯🤭😘😇🤓🤮🤒🥳🧐🤪🤯🤭😘😇🤓🤮🤒</pre>
    <pre class="emoji-align emoji-move-reverse">🤓🤮🤪😘🥳🧐😇🤯🤭🤒🤓🤮🤪😘🥳🧐😇🤯🤭🤒</pre>
    <pre class="emoji-align emoji-move">🥳🧐🤪🤯🤭😘😇🤓🤮🤒🥳🧐🤪🤯🤭😘😇🤓🤮🤒</pre>
    <pre class="emoji-align emoji-move-reverse">🤓🤮🤪😘🥳🧐😇🤯🤭🤒🤓🤮🤪😘🥳🧐😇🤯🤭🤒</pre>
  </div>
</template>

<script>
export default {
  name: 'RollingEmoji',
}
</script>

<style scoped>
.emoji {
  font-size: 10rem;
  text-align: center;
  align-content: center;
  align-items: center;
}

.emoji-align {
  position: relative;
  letter-spacing: 1rem;
  margin: 0;
}

.emoji-move {
  animation-name: move;
  animation-duration: 10s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-timing-function: linear;
}

.emoji-move-reverse {
  animation-name: move;
  animation-duration: 10s;
  animation-iteration-count: infinite;
  animation-direction: alternate-reverse;
  animation-timing-function: linear;
}

@keyframes move {
  from { right: 0px; }
  to { right: 1000px; }
}
</style>