<template>
  <video
    playsinline
    class="video"
    @timeupdate="() => updateTime()">
    <source
      type="video/mp4"
      src="~/assets/video/immersive-video.mp4" />
  </video>
</template>

<script>
export default {
  name: 'TCVideo',
  methods: {
    updateTime() {
      const currentTime = this.$el.currentTime.toFixed(2)

      this.$store.commit('time/setCurrentTime', currentTime)
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
