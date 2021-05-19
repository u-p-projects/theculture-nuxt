<template>
  <header
    class="top"
    :class="[
      currentColor === '#000' ? 'top--black' : 'top--white'
    ]"
    :style="{
      color: currentColor
    }">
    <ul>
      <li
        v-for="(item, key) in items"
        :key="`item${key}`"
        class="item"
        :class="{
          'item--show': currentItems.includes(key)
        }">
        <p>
          <template v-if="item.type === 'text'">
            {{ item.name }}
          </template>
          <template v-else>
            <a
              :href="item.link"
              rel="noopener noreferrer"
              target="_blank">
              {{ item.name }}
            </a>
          </template>
        </p>
      </li>
      <li
        v-if="currentItems.length === 2"
        class="item item--break"></li>
      <li class="item item--show menu">
        <TCMenuButton
          :active="menuActive"
          :menuColor="currentColor === '#000' ? 'black' : 'white'"
          @toggle="(state) => menuActive = state" />
      </li>
      <li class="item item--show"></li>
    </ul>

    <Dropdown
      :active="menuActive"
      @toggle="(active) => menuActive = active" />
  </header>
</template>

<script>
import TCMenuButton from '@/components/TCMenuButton'
import Dropdown from '@/components/Dropdown'
export default {
  name: 'Top',
  components: {
    TCMenuButton,
    Dropdown
  },
  computed: {
    items() {
      return [
        {
          name: 'The Culture',
          type: 'text',
          link: null,
          time: [3.5, 46]
        },
        {
          name: 'Hosted by Osman Faruqi',
          type: 'text',
          link: null,
          time: [17, 35]
        },
        {
          name: 'Every Friday',
          type: 'text',
          link: null,
          time: [33, 35]
        },
        {
          name: 'Apple Podcasts',
          type: 'link',
          link: 'https://podcasts.apple.com/au/podcast/7am/id1461999702',
          time: [38, 46]
        },
        {
          name: 'Spotify',
          type: 'link',
          link: 'https://podcasts.apple.com/au/podcast/7am/id1461999702',
          time: [40, 46]
        }
      ]
    },
    colors() {
      return [
        {
          color: '#fff',
          time: [3.5, 6.7]
        },
        {
          color: '#000',
          time: [6.7, 8.9]
        },
        {
          color: '#fff',
          time: [9, 13]
        },
        {
          color: '#000',
          time: [13, 16.9]
        },
        {
          color: '#fff',
          time: [17, 21.4]
        },
        {
          color: '#000',
          time: [21.5, 26]
        },
        {
          color: '#fff',
          time: [26.1, 34.9]
        },
        {
          color: '#000',
          time: [35, 42.9]
        },
        {
          color: '#fff',
          time: [43, 45]
        }
      ]
    }
  },
  data() {
    return {
      currentItems: [],
      currentColor: '#000',
      menuActive: false
    }
  },
  mounted() {
    // subscribe for time updates from video playing (@timeupdate)
    this.$store.subscribe((mutation, state) => {
      if (mutation.type === 'time/setCurrentTime') {
        // get items that should be currently shown
        const showItems = this.items.map((item) => {
          const show = state.time.currentTime > item.time[0] && state.time.currentTime < item.time[1]

          // return show
          item.show = show

          return item
        })

        // created a filtered list of items to show and then map / return the items index
        const filteredItems = showItems.filter(item => item.show).map((item) => {
          const index = this.items.findIndex(findItem => findItem.name === item.name)

          return index
        })

        // if the filtered items don't match currentItems update currentItems
        if (filteredItems.length > 0 && this.currentItems !== filteredItems /* && filteredItems.findIndex(item => !this.currentItems.includes(item)) !== -1 */) {
          this.currentItems = filteredItems
        }
      }
    })

    this.$store.subscribe((mutation, state) => {
      if (mutation.type === 'time/setCurrentTime') {
        const colorIndex = this.colors.findIndex((color) => {
          return state.time.currentTime > color.time[0] && state.time.currentTime < color.time[1]
        })

        // console.log('image index: ', showContainerIndex)

        if (colorIndex !== -1) {
          this.currentColor = this.colors[colorIndex].color
        }
      }
    })
  }
}
</script>

<style lang="scss" scoped>
$padding: 20px;

.top {
  width: 100%;
  position: absolute;
  z-index: 1000;
  top: 0px;
  left: 0px;
  font-size: 24px;
  line-height: 27px;
  font-family: helvetica;

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    text-align: center;
    align-items: flex-start;
    padding: $padding;
    width: calc(100% - 120px);

    .item {
      display: none;
      text-transform: uppercase;
      justify-content: center;

      &:first-child {
        // first child
      }

      &--show, &--break {
        display: flex;
      }

      &--break {
        min-width: 104px;
      }

      &.menu {
        display: flex;
        position: absolute;
        right: 0;
        top: 0;
        padding: 20px;
        // justify-content: flex-end;
      }
    }
  }
}
</style>