export const state = () => ({
  currentTime: 0,
  isPlaying: false,
  ended: false
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
  }
}
