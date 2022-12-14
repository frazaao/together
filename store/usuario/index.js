const initialState = JSON.parse(localStorage.getItem('usuario'))

export const state = () => ({
  nome: initialState?.nome,
  perfil: initialState?.perfil,
})
