/**
 * Cálculo do IMC
 * Exemplo de encadeamento da estrutura if 
 * @author Stela Calmon
 */

const prompt = require("prompt-sync")()

let peso, altura, imc 

console.clear()
console.log("Cálculo de IMC")

peso = Number(prompt("Digite o seu peso em kg:"))
altura = Number(prompt("Digite sua altura em metros:"))

imc = peso / (altura * altura)

console.log(`IMC: ${imc.toFixed(2)}`)

if (imc < 18.5) {
    console.log(`seu IMC é ${imc.toFixed(2)}, você está abaixo do peso`)
} else if (imc < 25) {
    console.log(`peso normal`)
} else if (imc < 30) {
    console.log(`Sobrepeso`)
} else if (imc < 35) {
    console.log (`Obesidade I`)
} else if (imc < 40) {
    console.log(`Obesidade II`)
} else {
    console.log(`Obesidade III`)
}