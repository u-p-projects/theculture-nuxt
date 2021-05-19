export const state = () => ({
  currentTime: 0,
  isPlaying: false,
  ended: false,
  showCursor: true
})

export const getters = {
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
}

export const mutations = {
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
}
