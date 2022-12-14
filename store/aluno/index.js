export const state = () => ({
  idAluno: 1,
  nome: 'Daniel',
  disciplinas: [
    {
      id: 1,
      nome: 'Português',
      matriculado: true,
      frequencia: {
        presenca: 10,
        total: 12,
      },
    },
    {
      id: 2,
      nome: 'Matemática',
      matriculado: true,
      frequencia: {
        presenca: 5,
        total: 9,
      },
    },
    {
      id: 3,
      nome: 'Geografia',
      matriculado: true,
      frequencia: {
        presenca: 7,
        total: 10,
      },
    },
    {
      id: 4,
      nome: 'História',
      matriculado: true,
      frequencia: {
        presenca: 15,
        total: 16,
      },
    },
    {
      id: 5,
      nome: 'Ciências',
      matriculado: true,
      frequencia: {
        presenca: 7,
        total: 8,
      },
    },
  ],
})
