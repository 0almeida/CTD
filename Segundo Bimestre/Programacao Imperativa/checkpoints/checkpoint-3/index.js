const Aluno = require("./alunos");
const curso = require("./curso");

let aluno6 = new Aluno("juninho", 10, [4, 3, 6, 7, 9]);

curso.adicionar_estudante(aluno6);

console.log(curso.verificar_Todos());
