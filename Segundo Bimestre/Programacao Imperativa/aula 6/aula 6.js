function calculadora(x, y, op) {
  switch (op) {
    case "soma":
      return x + y;
    case "sub":
      return x - y;
    case "mult":
      return x * y;
    case "div":
      return x / y;
    default:
      return "opção invalida";
  }
}

console.log(calculadora(5, 2, "soma"));
console.log(calculadora(5, 2, "sub"));
console.log(calculadora(5, 2, "mult"));
console.log(calculadora(5, 2, "div"));
console.log(calculadora(2, 2, "error"));

function quadrado(x) {
  return Math.pow(x, 2);
}
console.log(quadrado(2));

function media3(x, y, z) {
  let a = calculadora(x, y, "soma");
  let b = calculadora(a, z, "soma");
  let c = calculadora(b, 3, "div");
  return c;
}
console.log(media3(10, 5, 3));

function calculaPorcentagem(num, por) {
  let result = (por * 100) / num;
  return result;
}
console.log(calculaPorcentagem(100, 25));

function geradorDePorcentagem(x, y) {
  let result = (x * y) / 100;
  return result;
}
console.log(geradorDePorcentagem(25, 100));
