export default {
  UPDATE_STATE: (state, payload) => {
    Object.keys(payload).forEach((key) => {
      state[key] = payload[key]
    })
  },

  CLEAR_STATE: (state) => {
    Object.keys(state).forEach((key) => {
      state[key] = null
    })
  },
}
