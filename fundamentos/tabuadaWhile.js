/**
 * Estudo do laço While - Tabuada 
 * @author Stela Calmon
 */

const prompt = require(`prompt-sync`)()

let tabuada
let i = 1

console.clear()
console.log("Tabuada")
tabuada = Number(prompt("Digite a tabuada desejada: "))


while (i < 11 ) {
    console.log(`${tabuada} x ${i} = ${tabuada * i}`)
    i++
}
