<template>
  <video
    playsinline
    class="video"
    @timeupdate="() => updateTime()"
    @ended="() => ended()">
    <source
      type="video/mp4"
      src="~/assets/video/immersive-video-480x320.mp4" />
  </video>
</template>

<script>
export default {
  name: 'TCVideo',
  methods: {
    updateTime() {
      const currentTime = this.$el.currentTime.toFixed(2)

      this.$store.commit('time/setCurrentTime', currentTime)
    },
    ended() {
      this.$store.commit('time/setEnded', true)
    }
  }
}
</script>

<style lang="scss" scoped>
.video {
  opacity: 0;
  left: 100%;
  top: 100%;
  position: absolute;
  width: 0px;
  height: 0px;
}
</style>
