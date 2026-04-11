/**
 * Estudo das variáveis 
 * @author Stela Calmon
 */

console.clear () 
console.log ("Estudo das variáveis")
console.log ("")
console.log("string")
// a linha abaixo cria uma variável 
let nome = "Stela Calmon"
console.log(nome)
// a linha abaixo mostra o tipo de variável 
console.log(typeof (nome))
console.log("")
console.log("Variável do tipo Number")
let idade = 24
console.log(idade)
console.log(typeof(idade))

let peso = 50
console.log(peso)

let altura = 1.50
console.log(altura)
console.log("")
console.log("Variável do tipo Boolean")
let vip = true
console.log(vip)
console.log(typeof(vip))

console.log("")
console.log("-------------------------")
console.log("----- Ficha do aluno ----")
console.log("-------------------------")
// a linha abaixo concatena (união) um texto com o conteudo da variável 
//
console.log("")
console.log(`Nome: ${nome}`)
console.log(`Idade: ${idade}`)
console.log(`Peso: ${peso}kg`)
console.log(`Altura: ${altura}m`)
console.log(`Vip: ${vip}`)
console.log(`FCM: ${208 - (0.7 * idade)} bpm`)
// .toFixed(2) formata o resultado em 2 casas decimais 
console.log(`IMC ${(peso / (altura * altura)).toFixed(2)}`)