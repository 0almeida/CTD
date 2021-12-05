function clienteBanco(numeroConta, tipoConta, saldo, nomeCompleto) {
  this.numeroConta = numeroConta;
  this.tipoConta = tipoConta;
  this.saldo = saldo;
  this.nomeCompleto = nomeCompleto;
}

let cliente1 = new clienteBanco(
  5486273622,
  "Conta Corrente",
  27771,
  "Abigael Natte"
);
let cliente2 = new clienteBanco(
  1183971869,
  "Conta Poupança",
  8675,
  "Ramon Connell"
);
let cliente3 = new clienteBanco(
  9582019689,
  "Conta Poupança",
  27363,
  "Jarret Lafuente"
);
let cliente4 = new clienteBanco(
  1761924656,
  "Conta Poupança",
  32415,
  "Ansel Ardley"
);
let cliente5 = new clienteBanco(
  7401971607,
  "Conta Poupança",
  18789,
  "Jacki Shurmer"
);
let cliente6 = new clienteBanco(
  630841470,
  "Conta Corrente",
  28776,
  "Jobi Mawtus"
);
let cliente7 = new clienteBanco(
  4223508636,
  "Conta Corrente",
  2177,
  "Thomasin Latour"
);
let cliente8 = new clienteBanco(
  185979521,
  "Conta Poupança",
  25994,
  "Lonnie Verheijden"
);
let cliente9 = new clienteBanco(
  3151956165,
  "Conta Corrente",
  7601,
  "Alonso Wannan"
);
let cliente10 = new clienteBanco(
  2138105881,
  "Conta Poupança",
  33196,
  "Bendite Huggett"
);

let listaDeContas = [
  cliente1,
  cliente2,
  cliente3,
  cliente4,
  cliente5,
  cliente6,
  cliente7,
  cliente8,
  cliente9,
  cliente10,
];

let Banco = {
  clientes: listaDeContas,
};
console.log(Banco.clientes[1]);
