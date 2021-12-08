function Usuarios(sexo, nome, altura){
    this.nome=nome;
    this.altura=altura;
    this.sexo=sexo;
}

let pessoa0 = new Usuarios("F","Abigael Natte",1.61);
let pessoa1 = new Usuarios("M","Ramon Connell",1.75);
let pessoa2 = new Usuarios("M","Jarret Lafuente",1.55);
let pessoa3 = new Usuarios("F","Ansel Ardley",1.67);
let pessoa4 = new Usuarios("F","Jacki Shurmer",1.75);
let pessoa5 = new Usuarios("M","Jobi Mawtus",1.88);
let pessoa6 = new Usuarios("M","Thomasin Latour",1.67);
let pessoa7 = new Usuarios("F","Lonnie Verheijden",1.63);
let pessoa8 = new Usuarios("M","Alonso Wannan",1.92);
let pessoa9 = new Usuarios("F","Bendite Huggett",1.80);

let listaDePessoas = [pessoa0, pessoa1, pessoa2, pessoa3, pessoa4, pessoa5, pessoa6, pessoa7, pessoa8, pessoa9];

let maiorAltura = (listaDePessoas) => {
    let maior = 0;
    for(let i=0;i<=9;i++){
        if(listaDePessoas[i].altura>maior){
            maior=listaDePessoas[i].altura;
        }
    }
    return maior;
}

let menorAltura = (listaDePessoas) => {
    let menor = 100;
    for(let i=0;i<=9;i++){
        if(listaDePessoas[i].altura<menor){
            menor=listaDePessoas[i].altura;
        }
    }
    return menor;
}

let mediaAlturaMulheres = (listaDePessoas) =>{
    let media=0;
    let count=0;
    let altura=0;
    for (let i=0;i<=9;i++){
        if(listaDePessoas[i].sexo=="F"){
            count++;
            altura=altura+listaDePessoas[i].altura;
        }
    }
    media=altura/count;
    return media;
}

let numeroHomens = (listaDePessoas) =>{
    let count=0;
    for (let i=0;i<=9;i++){
        if(listaDePessoas[i].sexo=="M"){
            count++;
        }
    }
    return count;
}

console.log("A maior altura é " + maiorAltura(listaDePessoas));

console.log("A menor altura é " + menorAltura(listaDePessoas));

console.log("A média da altura das Mulheres é " + mediaAlturaMulheres(listaDePessoas));