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
      nota: [
        {
          id: 1,
          valor: 7,
          semestre: 1,
        },

        {
          id: 2,
          valor: 5,
          semestre: 2,
        },

        {
          id: 3,
          valor: 9.5,
          semestre: 3,
        },
      ],
    },
    {
      id: 2,
      nome: 'Matemática',
      matriculado: true,
      frequencia: {
        presenca: 5,
        total: 9,
      },
      nota: [
        {
          id: 4,
          valor: 4,
          semestre: 1,
        },

        {
          id: 5,
          valor: 6,
          semestre: 2,
        },

        {
          id: 6,
          valor: 5.5,
          semestre: 3,
        },
      ],
    },
    {
      id: 3,
      nome: 'Geografia',
      matriculado: true,
      frequencia: {
        presenca: 7,
        total: 10,
      },
      nota: [
        {
          id: 7,
          valor: 8,
          semestre: 1,
        },

        {
          id: 8,
          valor: 8.5,
          semestre: 2,
        },

        {
          id: 9,
          valor: 7.25,
          semestre: 3,
        },
      ],
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
