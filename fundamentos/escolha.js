/**
* Exemplo de uso da estrutura switch case 
 * @author Stela Calmon
 */

const prompt = require('prompt-sync')()

let opcao 

console.clear()
console.log("Menu de opções>:")
console.log("")
console.log("1. cadastro de clientes")
console.log("2. cadastro de produtos")
console.log("3. Relatório")
opcao = Number(prompt("Digite a opção desejada: "))
//Uso da estrutura switch case para tratamento do valor digitado. Obs: Esta estrutura aceita variáveis numéricas do tipo números inteiros e caracteres únicos, dentro da estrutura o default é opcinal

switch (opcao) {
    case 1: 
        console.clear()
        console.log("Tela de cadastro de cliente")
        break
    case 2: 
        console.clear()
        console.log("Tela de cadastro de produtos")
        break
    case 3: 
        console.clear()
        console.log("Impressão de relatórios")
        break
    default:
        console.clear()
        console.log("Opção inválida")
}