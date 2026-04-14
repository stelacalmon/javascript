/**
 * Cálculo do volume de um aquário 
 * @author Stela Calmon
 * 
 */
 
const prompt = require(`prompt-sync`)()

// variáveis
let comprimento, largura, altura, volume 

console.clear()
console.log("litros de um aquário")

//entrada 
comprimento = Number(prompt("Digite o comprimento do aquário: "))
largura = Number(prompt("Digite a largura do aquário: "))
altura = Number(prompt("Digite a altura do aquário: "))

// processamento
volume = (comprimento * largura * altura) / 100

//saída 
console.log(`A quantidade de litros adequada para o seu aquário é ${volume.toFixed(1)}`)