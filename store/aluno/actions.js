export default {
  updateAlunoState(context, payload) {
    context.commit('UPDATE_STATE', payload)

    const actualState = localStorage.getItem('aluno')
    localStorage.setItem(
      'aluno',
      JSON.stringify({
        ...actualState,
        ...payload,
      })
    )
  },

  clearState(context) {
    context.commit('CLEAR_STATE')
    localStorage.removeItem('aluno')
  },
}
