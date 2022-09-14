//Declare e chame as funções abaixo:

//a) Uma função que receba 2 números como parâmetros, e, dentro da função, faça
//a soma das duas entradas e imprima o resultado. Invoque a função e imprima no console o resultado.

function somarNumeros(num1, num2) {
    const soma = num1 + num2
    console.log(soma)

}

somarNumeros(1, 1)

console.log("=======================================================")

//b) Uma função que recebe 2 números e imprime um booleano que informa se o 
//primeiro número é maior ou igual ao segundo.

function numeroMaiorouIgual(num1, num2) {

    const maiorMenor = num1 >= num2

    console.log(maiorMenor)

}

numeroMaiorouIgual(4, 2)

console.log("=======================================================")

//c) Uma função que receba um número e imprima se ele é par ou não

function numeroPar(num1) {

    const par = num1 % 2 === 0

    console.log(par)

}

numeroPar(4)

console.log("=======================================================")

//d) Uma função que recebe uma mensagem (string) como parâmetro e imprima 
//o tamanho dessa mensagem, juntamente com uma versão dela contendo apenas letras maiúsculas.

let string = prompt("Escreva uma palavra")

function string2(string) {

    //const palavra = string

    //console.log(`letras maiusculas: ${palavra.toUpperCase()} Existe: ${palavra.length} letras `)
    console.log(`letras maiusculas: ${string.toUpperCase()} Existe: ${string.length} letras `)
}

string2(string)
