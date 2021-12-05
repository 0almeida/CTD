var nomeAluno = 'Drago';
var nota1 = 6;
var nota2 = 6;
var nota3 = 2;
var notaMedia = (nota1 + nota2 + nota3) / 3;

console.log('ola ' + nomeAluno);

if (notaMedia >6) {
	console.log('Sua media é',+notaMedia, 'Aprovado');
} else if (notaMedia == 6) {
	console.log('Sua media é',+notaMedia,'Recuperaçao');
	
	
} else {
	console.log("Sua media é", +notaMedia ,"Reprovado");
		
}