/**
 *  Calculadpra JS - Exemplo de uso de funções
 * @author Stela Calmon
 */

//Importação de pacote 
const prompt = require(`prompt-sync`)()
const color = require('colors')

//Variáveis globais
let num1, num2, opcao, resultado

//funções das operações (com parâmetros) recomendado antes da função principal
function somar(num1, num2) {
    return num1 + num2
}

function subtrair(num1, num2) {    
    return num1 -  num2
}

function multiplicar (num1, num2) {    
    return num1 * num2
}

function dividir (num1, num2) {  
    //validação 
    if (num2 === 0) {
        console.log("Erro! Impossível dividir por 0 ")
        
    } else {
        return num1 /  num2
    }  
}
function raizQuadrada(num1) {
    return Math.sqrt(num1)
}



//==============================================================================================================================================================================
//Função principal (MAIN)
function iniciarCalculadora() {
    //gerando um loop infinito 
    do {
        mostrarMenu()
        //escolha da opção 
        opcao = Number(prompt("Escolha uma opção: "))
        switch(opcao) {
            case 0:
                console.log("Calculadora encerrada.")
                return //encerra o loop infinito 
                case 1:
                    num1 = Number(prompt("Digite o primeiro número: "))
                    num2 = Number(prompt("Digite o segundo número: "))
                    resultado = somar(num1, num2)
                    console.log(`Resultado: ${resultado}`)
                    break
                    case 2:
                        num1 = Number(prompt("Digite o primeiro número: "))
                        num2 = Number(prompt("Digite o segundo número: "))
                        resultado = subtrair(num1, num2)
                        console.log(`Resultado: ${resultado}`)
                    break
                    case 3:
                        num1 = Number(prompt("Digite o primeiro número: "))
                        num2 = Number(prompt("Digite o segundo número: "))
                        resultado = multiplicar(num1, num2)
                        console.log(`Resultado: ${resultado}`)
                    break
                    case 4:
                        num1 = Number(prompt("Digite o primeiro: "))
                        num2 = Number(prompt("Digite o segundo número: "))
                        resultado = dividir(num1, num2)
                        console.log(`Resultado: ${resultado}`)
                    break
                    case 5:
                        num1 = Number(prompt("Digite o valor número: "))
                        raizQuadrada = (num1)
                    break
                    default:
                        console.log("Opção inválida")
                        prompt("Pressione [Enter] para continuar")
                        continue //continua dentro do switch case
                     break

        }

        //Exibir o resulatdo 
        console.log(`Resultado ${resultado.toFixed(2)}`)
        prompt("Pressione [Enter] para continuar ")

    } while (true)
}

//Função menu
function mostrarMenu(){
    console.clear()
    console.log("===Calculadora JS ===")
    console.log("1. Somar")
    console.log("2. Subtrair")
    console.log("3. Multiplicar")
    console.log("5. Raiz quadrada")
    console.log("0. Sair")
}
//Executar a função principal 
iniciarCalculadora()
