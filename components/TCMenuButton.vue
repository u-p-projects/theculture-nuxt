<template>
  <button
    class="menu-btn"
    :class="[
      `menu-btn--${menuColor}`,
      {
        'menu-btn--active': active
      }
    ]"
    @mouseover="() => updateCursor(false)"
    @mouseout="() => updateCursor(true)"
    @click="() => $emit('toggle', !active)">
    <span>Menu</span>
  </button>
</template>

<script>
export default {
  name: 'TCMenuButton',
  props: {
    active: {
      type: Boolean,
      default: false
    },
    menuColor: {
      type: String,
      default: 'black'
    }
  },
  methods: {
    updateCursor(state) {
      console.log('showCursor: ', state)
      this.$store.commit('time/setShowCursor', state)
    }
  }
}
</script>

<style lang="scss" scoped>
.menu-btn {
  appearance: none;
  padding: 0;
  margin: 0;
  background: none;
  border: none;
  width: 40px;
  height: 40px;
  box-sizing: border-box;
  padding: 10px 8px;
  cursor: pointer;
  position: relative;
  transform: translateY(-8px) translateX(6px);

  &.menu-btn--black {
    span, &:before, &:after {
      background: #000;
    }
  }

  &.menu-btn--white {
    span, &:before, &:after {
      background: #fff;
    }
  }

  &--active {
    span {
      opacity: 0;
    }

    &:before {
      top: 50% !important;
      transform: translateX(-50%) rotate(-45deg) !important;
    }

    &:after {
      top: 50% !important;
      transform: translateX(-50%) rotate(45deg) !important;
    }
  }

  span {
    font-size: 0px;
    display: block;
    background:#000;
    width: 23px;
    height: 2px;
    transform-origin: center;
    transition: 0.2s linear;
    pointer-events: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%) rotate(0deg);
  }

  &:before, &:after {
    content: '';
    display: block;
    background:#000;
    width: 23px;
    height: 2px;
    transform-origin: center;
    transition: 0.2s linear;
    pointer-events: none;
    position: absolute;
    left: 50%;
    transform: translateX(-50%) rotate(0deg);
  }

  &:before {
    top: 12px;
  }

  &:after {
    bottom: 12px;
  }

  @include mobile {
    transform: translateY(-2px) translateX(6px);
  }
}
</style>
