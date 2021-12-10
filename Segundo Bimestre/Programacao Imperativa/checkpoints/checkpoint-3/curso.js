const estudantes = require("./estudantes");

// console.log(estudantes);

module.exports = curso = {
  nome_do_curso: "Full stack",
  nota_de_aprovacao: 7,
  faltas_maximas: 5,
  estudantes: [
    estudantes[0],
    estudantes[1],
    estudantes[2],
    estudantes[3],
    estudantes[4],
  ],
  adicionar_estudante: (aluno) => {
    curso.estudantes.push(aluno);
  },
  verificar_um: (aluno) => {
    let percent = (curso.nota_de_aprovacao * 10) / 100;
    if (
      (aluno.calcular_media() >= curso.nota_de_aprovacao &&
        aluno.qtds_faltas <= curso.faltas_maximas) ||
      (aluno.qtds_faltas == curso.faltas_maximas &&
        aluno.calcular_media() + percent >= curso.nota_de_aprovacao)
    ) {
      return true;
    } else {
      return false;
    }
  },
  verificar_todos: () => {
    let result = [];
    curso.estudantes.forEach((element) => {
      result.push(curso.verificar_um(element));
    });
    return result;
  },
};
