<template>
  <aside
    class="cursor"
    :class="{
      'cursor--show': show,
      'cursor--play': status === 'play',
      'cursor--pause': status === 'pause'
    }"
    :style="{
      top: `${top}px`,
      left: `${left}px`
    }"
    @click="() => $emit('update', !playing)">
    <div class="container">
      <img
        class="play"
        src="~/assets/img/cursor-play.svg">
      <img
        class="pause"
        src="~/assets/img/cursor-pause.svg">
    </div>
    <!-- <div id="cursor" class="play">
      <div id="cursorWrapper">
        <img src="assets/img/cursor/cursor-play.svg">
        <img src="assets/img/cursor/cursor-pause.svg">
        <img src="assets/img/cursor/cursor-reload.svg">
      </div>
    </div> -->
  </aside>
</template>

<script>
export default {
  name: 'TCCursor',
  props: {
    left: {
      type: Number,
      default: 0
    },
    top: {
      type: Number,
      default: 0
    },
    show: {
      type: Boolean,
      default: false
    },
    playing: {
      type: Boolean,
      default: false
    },
    status: {
      type: String,
      default: 'pause'
    }
  },
  mounted() {

  }
}
</script>

<style lang="scss" scoped>
.cursor {
  position: absolute;
  width: 70px;
  height: 70px;
  transform: translate(-50%, -50%);
  cursor: none;

  &--pause {
    img.play {
      display: block;
    }
  }

  &--play {
    img.pause {
      display: block;
    }
  }

  img {
    display: none;
  }
}
</style>
