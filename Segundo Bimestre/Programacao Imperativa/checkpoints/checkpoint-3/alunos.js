function Aluno(nome, falta, nota = []) {
  this.nome = nome;
  this.qtds_faltas = falta;
  this.nota = nota;
  this.calcular_media = () => {
    let res = this.nota.reduce(
      (previousValue, currentValue) => previous_value + current_value
    );

    return (res / this.nota.length).toFixed(1);
  };

  this.falta = () => {
    this.qtds_faltas += 1;
    return "falta adicionada";
  };
}

module.exports = Aluno;
