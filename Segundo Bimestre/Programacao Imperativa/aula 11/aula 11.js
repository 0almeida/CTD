var filmes = [
  "stars wars",
  "totoro",
  "rocky",
  "pulp fiction",
  "la vida es bella",
];

for (let i = 0; i < filmes.length; i++) {
  let c = 0 + i;
  let r = filmes[c].toUpperCase();
  console.log(r);
}

function passagemdeelementos(array1, array2) {
  let invalido = array2.pop();
  const qtd = array2.length;
  for (let i = 0; i < qtd; i++) {
    console.log(qtd, " - ", array2.length);
    array1.push(array2.pop().toUpperCase());
  }
  console.log("Esse filme é invalido", invalido);
  return array1;
}

const asiaScore = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScore = [8, 10, 6, 8, 10, 6, 7, 9, 5];
function compararQualificacoes(cont1, cont2) {
  let comparacoes = [];
  for (let conta = 0; conta < cont1.length; conta++) {
    comparacoes[conta] = cont1[conta] == cont2[conta];
  }
  return comparacoes;
}
console.log(compararQualificacoes(asiaScore, euroScore));
