/**
 * Estudo das funções 
 * @author Stela Calmon
 */

// Função literal (simples)
function hello () {
    console.clear()
    console.log("Hello function")
    console.log("Tipo: " + typeof (hello)) //apoio ao entendimento da lógica
}

//Para executar uma função basta "chamar" o nome da função, não esquecendo dos parênteses
hello()

//Função anônoima >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
const hello2 = function () {
    console.log("Hello function assigned")
    console.log("Tipo: " + typeof (hello2)) //apoio ao entendimento da lógica
}

hello2()

//Função anônima simplificada >>>>>>>>>>>>>>>>>>>>>>>>>>>
const hello3 = () => {
    console.log("Hello Arrow function assigned")
    console.log("Tipo: " + typeof (hello3)) //apoio ao entendimento da lógica
}

hello3()

//Função simples com parâmetros 
function somar(num1, num2) {
    return (console.log(num1 + num2))
    console.log("Tipo: " + typeof (somar)) //apoio ao entendimento da lógica
}

//Neste caso dentro de parênteses, fornecemos os números que serão somados na função 
somar(2, 3)

//Função anônima com parâmetros 
const somarA = function(num1, num2) {
    console.log("Tipo: " + typeof (somarA)) //apoio ao entendimento da lógica
    return (console.log(num1 + num2))
}

somarA(6, 7)


//Função anônima simplificada com parâmetros 
const somarAF = (num1, num2) => {
    console.log("Tipo: " + typeof (somarAF)) //apoio ao entendimento da lógica
    return (console.log(num1 + num2))
}

somarAF(8, 8)

//Função anônima super simplificada com parâmetros 
//CUIDADO! Neste caso o retorno é implicito 
const somarAFS = (num1, num2) => (console.log(num1 + num2))

somarAFS(2, 7)