/*let A = 19;
let B = 20;
let C = 40;
let result = A + B;

console.log(`A soma entre A e B é ${result}`);

let menor = result < C;

console.log(`Esta soma é menor que C? ${menor}`);*/ //EX-01

/*let num = 6;
let result = num % 2;

if(num % 2 == 1) {
    console.log('Ímpar');
} else {
    console.log('Par');
};*/ //EX-02
/*
let A = 16;
let B = 16;
let result = 0;

if (A == B) {
    result = A + B;
} else {
    result = A * B;
}

let C = result;

console.log('O resultado é', C);*/ //EX-03

/*let num = 12;
let ant = num - 1;
let suc = num + 1;

console.log(`O antecessor de ${num} é ${ant}`)
console.log(`O sucessor de ${num} é ${suc}`)*/ //EX-04

/*let minimo = 1.293;
let salario = 3.000;
let calc = parseInt(salario / minimo);

console.log(calc);*/ // EX-05

/*let num = 5;
let percent = num * 5/100;
let reajuste = num + percent;

console.log(reajuste);*/ // EX-06

/*let A = 7;
let B = 5;
let vala = A > B;
let valb = A > B;
let val = true;

const valorReal = () => {
    if (val === vala || valb) {
        console.log('Ambos os valores são Verdadeiro ou Falso');
    } else {
        console.log('Ambos são Falsos');
    }
}

valorReal(); */ //EX-07

/*const triploNum = (numero) => {
    return numero * 3 ;
}

let num = 3

console.log('O triplo de', num, 'é', triploNum(num));*/ //EX-GPT-01

/*const contarImpares = () => {
    let contador = 0;
    for (let i = 1; i <= 20; i++) {
        if (i % 2 !== 0) {
            contador++;
        }
    }
    return contador;
}

console.log('O número de ímpares entre 1 a 20 é', contarImpares());*/ //EX-GPT-02

/*let nums = [1, 2, 3, 4, 5];

const somaNums = () => {
    let soma = 0;

    for (let i = 0; i < nums.length; i++) {
        soma = soma + nums[i];
        console.log(soma);
    }
    return soma;
}

console.log('A soma de todos os elementos é:', somaNums());*/ //EX-GPT-03 Eu dificultei este

//OBJETOS//

/*let carro = {
    marca: "Honda",
    modelo: "Civic",
    ano: 2014,

    exibirInfo: function() {
        console.log(`Carro: ${this.marca} ${this.modelo}, Ano: ${this.ano}`);
    }
}
console.log(carro);

carro.exibirInfo(); */ //EX-GPT-04 não consegui entender o que fazer para exibir um método (exibirInfo). Não sabia desse "this"

//DESAFIO AVANÇADO - ARRAYS AND OBJECTS

let aluno01 = {
    nome: "Italo",
    nota1: 9,
    nota2: 9
};

let aluno02 = {
    nome: "Lucas",
    nota1: 8,
    nota2: 8
}

let aluno03 = {
    nome: "Edilson",
    nota1: 8,
    nota2: 9
}

let aluno04 = {
    nome: "Gustavo",
    nota1: 9,
    nota2: 10
}

let alunos = [aluno01, aluno02, aluno03, aluno04];

const mediaAluno = () => {
    
    for (let i = 0; i < alunos.length; i++) {
        alunos[i].media = (alunos[i].nota1 + alunos[i].nota2) / 2;
    };

    alunos.sort((a, b) => b.media - a.media);
    
    for (let i = 0; i < alunos.length; i++) { 
        console.log(`Aluno: ${alunos[i].nome}, Média: ${alunos[i].media}`);
    };
};
mediaAluno();
console.log(aluno04); //ESQUEÇA TUDOOOOOOOOO