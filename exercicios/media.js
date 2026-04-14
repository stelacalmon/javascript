/**
 * Cálculo da média de 2 notas 
 * Exemplo de uso da biblioteca prompt-sync
 * @author Stela Calmon
 */

const prompt = require (`prompt-sync`)()
//variáveis
let disciplina, nota1, nota2, media

console.clear()
console.log ("Cálculo da média de 2 notas")
console.log()

//entrada de dados 
disciplina = prompt("Digite o nome da disciplina: ")
console.log(disciplina)
console.log(typeof(disciplina))
nota1 = Number(prompt("Digite a nota 1: "))
//console.log(nota1)
//console.log(typeof(nota1))
nota2 = Number(prompt("Digite a nota 2: "))

//Processamento 
media = (nota1 + nota2) / 2
// saída
console.log(`Média: ${media.toFixed(1)}`)