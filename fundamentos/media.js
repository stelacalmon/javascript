/**
 * Estudo da estrutura de controle if else
 * Cálculo da média
 * @author Stela Calmon
 */

//importação de pacotes 
const color = require(`colors`)
const prompt = require(`prompt-sync`)()

//varíaveis
let nota1, nota2, media

console.clear()
console.log("Cálculo da média".red)
console.log()

//entrada 
nota1 = Number(prompt("Digite a nota1: "))
nota2 = Number(prompt("Digite a nota2: "))
console.log()

//processamento 
media = (nota1 + nota2) / 2

//saída
console.log(`Média: ${media.toFixed(1)}`)

//
if (media < 5) {
    console.log("REPROVADO".red)
} else {
    console.log("APROVADO".cyan)
}

