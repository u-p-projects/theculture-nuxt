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
  }
}
</script>

<style lang="scss" scoped>
@import 'assets/styles/mixins';

.cursor {
  position: absolute;
  width: 70px;
  height: 70px;
  transform: translate(-50%, -50%);
  cursor: none;
  display: none;

  &--show {
    display: block;
  }

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

  @include mobile {
    // display: none !important;
    opacity: 0;
  }
}
</style>
