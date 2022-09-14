//Crie 4 funções, cada uma deve receber dois parâmetros numéricos
// e retornar o valor uma das operações básicas (soma, subtração, multiplicação e divisão).


let numero1 = Number(prompt("Digite primeiro número"))
let numero2 = Number(prompt("Digite segundo número"))

function somarNumeros(numero1, numero2) {

    const soma = numero1 + numero2
    console.log(soma)
}

console.log("===========================================================")

function subtraNumeros(numero1, numero2) {
    const subtracao = numero1 - numero2
    console.log(subtracao)

}

console.log("===========================================================")

function multiplicNumeros(num1, num2) {
    const multiplic = num1 * num2
    console.log(multiplic)

}


console.log("===========================================================")

function divNumeros(num1, num2) {
    const div = num1 / num2
    console.log(div)

}

//let numero1 = Number(prompt("Digite primeiro número"))
//let numero2 = Number(prompt("Digite segundo número"))

somarNumeros(numero1, numero2)
subtraNumeros(numero1, numero2)
multiplicNumeros(numero1, numero2)
divNumeros(numero1, numero2)

//Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses
//valores inputados pelo usuário sendo o argumento. Por fim, imprima no console o resultado das operações