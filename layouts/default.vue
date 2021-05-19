<template>
  <div
    class="app"
    @mousemove="updateCursor">
    <Top />

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
        x: 0,
        y: 0
      },
      showCursor: false,
      playing: false
    }
  },
  mounted() {
  },
  methods: {
    updateCursor($evt) {
      const scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop

      this.cursor.x = $evt.pageX
      this.cursor.y = $evt.pageY - scrollTop
    },
    toggleVideo(state) {
      this.playing = state

      console.log(this.$refs.video)
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
@font-face {
  font-family:'marr-sans';
  src:
    url('~assets/fonts/marr-sans/MarrSansCondWeb-Medium.woff2') format('woff2'),
    url('~assets/fonts/marr-sans/MarrSansCondWeb-Medium.woff') format('woff');
  font-weight:500;
  font-style:normal;
}

@font-face {
  font-family:'nhg';
  src:
    url('~assets/fonts/nhg/NeueHaasGrotDisp-75Bold-Web.woff2') format('woff2'),
    url('~assets/fonts/nhg/NeueHaasGrotDisp-75Bold-Web.woff') format('woff');
  font-weight:500;
  font-style:normal;
}

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
}
</style>
