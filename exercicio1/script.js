//a) Declare uma função que imprima Olá, [SEU NOME]!. Chame esta função.
//b) Declare uma função que imprima a tabuada do 6. Chame esta função.
//c) Comente as funções criadas acima, e reescreva-as utilizando expressões de 
//função, ou arrow functions

function imprimirOla() {
    console.log("Alexandre Shirota")
}
imprimirOla()

console.log("========================================================")


function tabuada(num1) {
    for (let i = 1; i <= 11; i++) {
        console.log(`${i} * ${num1} = ${Number(num1 * i)}`)
    }

}
tabuada(6)

console.log("========================================================")

const tabuada2 = (num2) => {
    for (let i = 1; i <= 11; i++) {
        console.log(`${i} * ${num2} = ${Number(num2 * i)}`)

    }

}

tabuada2(prompt("digite um número"));














