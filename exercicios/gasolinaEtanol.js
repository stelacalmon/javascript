/**
 * Cálcule gasolina ou etanol
 * @author Stela Calmon
 */

const prompt = require(`prompt-sync`)()

let gasolina, etanol

console.clear()
console.log("Etanol ou Gasolina?")

//entrada 
gasolina = Number(prompt(" Digite o valor da Gasolina: "))
etanol = Number(prompt("Digite o valor do Etanol: "))

//processamento + saída
if (etanol < 0.7 * gasolina) {
    console.log("Abasteça com etanol".green)
} else {
    console.log("Abasteça com gasolina".cyan)
}