<template>
  <div
    class="app"
    :class="[
      $store.state.time.isPlaying ? 'app--play' : 'app--pause'
    ]"
    @mousemove="updateCursor">
    <Top @update="(state) => toggleVideo(state)" />

    <ImageContainers />

    <Captions />

    <TCVideo ref="video" />

    <TCCursor
      :show="showCursor"
      :top="cursor.y"
      :left="cursor.x"
      :playing="playing"
      :status="playing ? 'play' : 'pause'"
      @update="(playState) => toggleVideo(playState)" />
  </div>
</template>

<script>
import Top from '@/components/Top'
import ImageContainers from '@/components/ImageContainers'
import Captions from '@/components/Captions'
import TCVideo from '@/components/TCVideo'
import TCCursor from '@/components/TCCursor'

export default {
  name: 'App',
  components: {
    Top,
    ImageContainers,
    Captions,
    TCVideo,
    TCCursor
  },
  data() {
    return {
      cursor: {
        x: (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth) / 2,
        y: (window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight) / 2
      },
      showCursor: true,
      playing: false
    }
  },
  mounted() {
    // subscribe to showCursor updates
    this.$store.subscribe((mutation, state) => {
      if (mutation.type === 'time/setShowCursor') {
        this.showCursor = state.time.showCursor
      }
    })
  },
  methods: {
    updateCursor($evt) {
      const scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop

      this.cursor.x = $evt.pageX

      this.cursor.y = $evt.pageY - scrollTop
    },
    toggleVideo(state) {
      this.playing = state

      this.$store.commit('time/setIsPlaying', state)

      if (this.playing) {
        this.$refs.video.$el.play()
      } else {
        this.$refs.video.$el.pause()
      }
    }
  }
}
</script>

<style lang="scss">
:root {
  --app-height: 100%;
}

html {
  // word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  font-stretch: 100%;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.app {
  width: 100vw;
  min-height: 100vh;

  @include mobile {
    &--pause {
      &:after {
        content: '';
        width: 70px;
        height: 70px;
        display: block;
        // background: red;
        background-image: url('~assets/img/cursor-play.svg');
        position: fixed;
        pointer-events: none;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }
}
</style>
