/**
* Validação da obrigatoriedade de valor
 * @author Stela Calmon
 */

//Importação de pacote
const prompt = require(`prompt-sync`)()

//variáveis
let idade 

//UX
console.clear(
console.log("Validação da obrigatoriedade de votar"))

//entrada 
idade = Number(prompt("Digite a sua idade: "))

//processamento e saída
if (idade < 16) {
    console.log("Proibido votar")
} else if (idade === 16 || idade === 17 || idade > 70 ) {
    console.log("Voto facultativo")
} else {
    console.log("Obrigatório votar ")
}