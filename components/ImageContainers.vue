<template>
  <ul class="image-containers">
    <li
      v-for="(block, index) in containers"
      :key="block.name"
      class="container"
      :class="[
        index === current ? 'container--show' : 'container--hide'
      ]"
      :style="{
        backgroundColor: `${index === current ? block.background : 'lime'}`
      }">
      <template v-if="block.image">
        <img
          :src="windowWidth > 768 ? (windowWidth > 1799 ? block.image.xl : block.image.desktop) : block.image.mobile"
        />
      </template>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'ImageContainers',
  computed: {
    containers() {
      return [
        {
          name: 'phone',
          image: { mobile: '/img/mock/m-phone.jpg', desktop: '/img/mock/phone.jpg', xl: '/img/mock/phone-xl.jpg' },
          show: false,
          time: [0, 3.5],
          background: '#000'
        },
        {
          name: 'theculture',
          image: { mobile: '/img/mock/m-logo.png', desktop: '/img/mock/logo.png', xl: '/img/mock/logo.png' },
          show: false,
          time: [3.5, 6],
          background: '#000'
        },
        {
          name: 'sevenAM',
          image: false,
          show: false,
          time: [6, 7.8],
          background: '#3388ff'
        },
        {
          name: 'bag',
          image: { mobile: '/img/mock/m-bag.jpg', desktop: '/img/mock/bag.jpg', xl: '/img/mock/bag-xl.jpg' },
          show: false,
          time: [9, 10],
          background: '#000'
        },
        {
          name: 'greenWord',
          image: false,
          show: false,
          time: [13, 14],
          background: '#41ad49'
        },
        {
          name: 'cup',
          image: { mobile: '/img/mock/m-mug.jpg', desktop: '/img/mock/mug.jpg', xl: '/img/mock/mug-xl.jpg' },
          show: false,
          time: [17, 18],
          background: '#000'
        },
        {
          name: 'yellowWord',
          image: false,
          show: false,
          time: [21.5, 22.5],
          background: '#ffd600'
        },
        {
          name: 'mag',
          image: { mobile: '/img/mock/m-mag.jpg', desktop: '/img/mock/mag.jpg', xl: '/img/mock/mag-xl.jpg' },
          show: false,
          time: [26.1, 27.1],
          background: '#000'
        },
        {
          name: 'blackWord',
          image: false,
          show: false,
          time: [31.1, 32.1],
          background: '#000'
        },
        {
          name: 'sweater',
          image: { mobile: '/img/mock/m-sweater.jpg', desktop: '/img/mock/sweater.jpg', xl: '/img/mock/sweater-xl.jpg' },
          show: false,
          time: [35, 36],
          background: '#000'
        },
        {
          name: 'logo2',
          image: { mobile: '/img/mock/m-logo.png', desktop: '/img/mock/logo.png', xl: '/img/mock/logo.png' },
          show: false,
          time: [43, 44],
          background: '#000'
        }
      ]
    }
  },
  data() {
    return {
      current: 0,
      windowWidth: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
    }
  },
  mounted() {
    this.$store.subscribe((mutation, state) => {
      if (mutation.type === 'time/setCurrentTime') {
        const showContainerIndex = this.containers.findIndex((container) => {
          return state.time.currentTime > container.time[0] && state.time.currentTime < container.time[1]
        })

        if (showContainerIndex !== -1) {
          this.current = showContainerIndex
        }
      }
    })
  }
}
</script>

<style lang="scss" scoped>
.image-containers {
  position: fixed;
  width: 100%;
  height: 100%;
  // background: lime;
  cursor: none;

  .container {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    visibility: hidden;

    &--show {
      visibility: visible;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
