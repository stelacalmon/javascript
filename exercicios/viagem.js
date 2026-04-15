/**
 * Cálculo do volume de um aquário 
 * @author Stela Calmon
 * 
 */

const prompt = require(`prompt-sync`)()

let distancia, velocidademedia, tempo

console.clear()
console.log("Tempo de viagem")

//entrada 
distancia = Number(prompt("Digite a distância a ser percorrida em km "))
velocidademedia = Number(prompt("Digite a velocidade do veículo em km "))

//processamento 
tempo = distancia / velocidademedia

//saída
console.log(`O tempo estimado da viagem é: ${tempo.toFixed(2)}`)