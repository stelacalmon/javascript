/**
 * Exercício - Conversão de temperatura 
 * @author Stela Calmon
 * 
 */

const promtp = require(`prompt-sync`)()

//variáveis
let c, f

console.clear()
console.log("Conversão de temperatura Fahrenheit -> Celsius")

//entrada
f = Number(promtp("Digite a temperatura em fahrenheit "))

//processamento
c = (f - 32) * 5/9

//saída
console.log(`${f} °F equivalem a ${c.toFixed(1)} °C `)