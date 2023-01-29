const initialState = JSON.parse(localStorage.getItem('aluno'))

export const state = () => ({
  ...initialState,
})
