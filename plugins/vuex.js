import { createStore } from "vuex";
const store = createStore({
  state() {
    return {
      currentTime: 0,
      isPlaying: false,
      ended: false,
      showCursor: true
    };
  },
  getters: {
    getCurrentTime: (state) => {
      return state.currentTime
    },
    getIsPlaying: (state) => {
      return state.isPlaying
    },
    getEnded: (state) => {
      return state.ended
    },
    getShowCursor: (state) => {
      return state.showCursor
    }
  },
  mutations: {
    setCurrentTime: (state, time) => {
      state.currentTime = parseFloat(time)
    },
    setIsPlaying: (state, playing) => {
      state.isPlaying = playing
    },
    setEnded: (state, ended) => {
      state.ended = ended
    },
    setShowCursor: (state, cursorState) => {
      state.showCursor = cursorState
    }
  },
});

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(store);
});
