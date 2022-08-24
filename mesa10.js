let nomes = ['Lucas', 'João', 'Vinicius']

console.log(nomes)
console.log(nomes[0]);//A

nomes[0] = 'Lucas2' //B
nomes[1] = 'João2' //B
nomes[2] = 'Vinicus2' //B

console.log(nomes)

nomes.push('Gustavo')//C

console.log(nomes)

nomes.pop //D

console.log(nomes)

console.log(nomes[0] === nomes[1]) //E


//O que esses códigos retornam?

//1

let numbers =[22, 33, 54, 66, 72]
console.log(numbers.length) //Quantidade de elementos do Array (5)


//2
let grupoDeAmigos = [ ["Harry", "Ron", "Hermione"], ["Spiderman", "Hulk", "Ironman"], ["Penélope Glamour", "Pierre Nodoyuna","Patán"] ]
console.log(grupoDeAmigos[1][0]) //Spiderman - Segundo array na posicão 0

//3
let str = "uma string qualquer"
let grupoDeAmigos2 = [ [45, 89, 0], ["Digital", "House", true], ["string", "123","false", 54, true, str] ]
console.log(grupoDeAmigos2[2][grupoDeAmigos2[2].length - 1])


//Array Invertido

// 1
function imprimirInverso (inverter){
    return inverter.reverse();
}
console.log(imprimirInverso(nomes)) 

//2

function inverter (array){
    Novoarray = array.reverse()
    return Novoarray
}
console.log(inverter(numbers));


//Soma Array

let arraysoma = [1,2,3]
let soma = 0
function somaArray(array){
    for(var i = 0; i < array.length; i++) {
        soma += array[i];
    }
    return soma
}
console.log(somaArray(arraysoma))

// Simulação Array.join()
let simulaJoin = ['o', 'l', 'a']
function join (arrayjoin){
    let transformajoin = [arrayjoin[0]+arrayjoin[1]+arrayjoin[2]]
    return transformajoin
}

console.log(join(simulaJoin))


//Coleções de Filmes 

//1
let filmes = ["star wars", "matrix",  "mr. robot", "o preço do amanhã",  "a vida é bela"]

//2
function transformaParaMaiusculo(palavras)
{
    for (let i = 0, j = palavras.length; i < j; i++) {
         palavras[i] = palavras[i].toUpperCase();
    }

    return palavras;
}

console.log(transformaParaMaiusculo(filmes));