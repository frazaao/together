export default {
  updateState(context, payload) {
    context.commit('UPDATE_STATE', payload)

    const actualState = localStorage.getItem('usuario')
    localStorage.setItem(
      'usuario',
      JSON.stringify({
        ...actualState,
        ...payload,
      })
    )
  },

  clearState(context) {
    context.commit('CLEAR_STATE')
    localStorage.removeItem('usuario')
  },
}
