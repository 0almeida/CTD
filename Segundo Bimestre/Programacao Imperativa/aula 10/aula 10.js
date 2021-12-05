let numbers = [22, 33, 54, 66, 72];
console.log(numbers[numbers.length]);

let grupo_de_amigos= [
  ["Harry", "Ron", "Hermione"],
  ["Spiderman", "Hulk", "Ironman"],
  ["Penélope Glamour", "Pierre Nodoyuna", "Patán"],
];
console.log(grupo_de_amigos[1][0]);

let str = "uma string qualquer";
let grupo_de_amigos = [
  [45, 89, 0],
  ["Digital", "House", true],
  ["string", "123", "false", 54, true, str],
];
console.log(grupo_de_amigos[2][grupo_de_amigos[2].length - 1]);

function imprimirInverso(umArray) {
  console.log(umArray[2]);
  console.log(umArray[1]);
  console.log(umArray[0]);
  return umArray;
}
imprimirInverso(["teste", 1, 2]);

function inverter(velho) {
  const novo = [];
  novo[0] = velho[2];
  novo[1] = velho[1];
  novo[2] = velho[0];
  return novo;
}
console.log(inverter(["teste", 1, 2]));

function inverterEficiente(umArray) {
  return umArray.reverse();
}
console.log(inverterEficiente(["teste", 1, 2]));

function somarArray(umArray) {
  let soma = 0;
  soma += umArray.pop();
  soma += umArray.pop();
  soma += umArray.pop();
  soma += umArray.pop();
  soma += umArray.pop();
  return soma;
}
somarArray([5, 10, 20, 5, -5, "a"]);

function join(umArray) {
  let concat = "";

  concat += [0];
  concat += [1];
  concat += [2];
  concat += [3];
  concat += [4];

  return concat;
}
console.log(join(["a", "r", "r", "a", "y"]));
