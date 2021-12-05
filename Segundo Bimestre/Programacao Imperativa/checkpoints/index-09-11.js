function menu_microondas(op, seg) {
  var Pipoca = 10;
  var Macarrao = 8;
  var Carne = 15;
  var Feijao = 12;
  var Brigadeiro = 8;

  function Tempo_micro(Tinicial, Tuso) {
    if (Tuso >= 3 * Tinicial) {
      console.log("Kabumm");
    } else if (Tinicial >= 2 * Tuso) {
      console.log("comida queimou");
    } else if (Tuso <= Tinicial) {
      console.log("Tempo insuficiente");
    } else {
      console.log("Prato pronto, bom apetite!!");
    }
  }
  switch (op) {
    case 1:
      Tempo_micro(Pipoca, seg);
      break;
    case 2:
      Tempo_micro(Macarrao, seg);
      break;
    case 3:
      Tempo_micro(Carne, seg);
      break;
    case 4:
      Tempo_micro(Feijao, seg);
      break;
    case 5:
      Tempo_micro(Brigadeiro, seg);
      break;
    default:
      console.log("Prato inexistente!");
      break;
  }
}
menu_microondas();
