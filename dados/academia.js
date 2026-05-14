/**
 * Sistema para gestão de academia 
 * Estudo de array como estrutura de dados
 * @author Stela Calmon
 */

//importação de pacotes 
const prompt = require('prompt-sync')()
const colors = require('colors')

//Variáveis blobais 
let nome, idade, peso, altura, vip
let matricula = 1 //contador de matricula 
let opcaoMenu, opcaoConsulta, opcaoRelatorio, busca

//Array principal (estrutura de dados)
let alunos = []

/*
   estrutura de dados
   [0] Matricula
   [1] Nome
   [2] Idade
   [3] Peso
   [4] Altura
   [5] Vip
*/

//Main >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function mainAcademia() {
    //Menu principal
    do {
        console.clear()
        console.log(" _____           _           _           __ _____")
        console.log("|  _  |___ ___ _| |___ _____|_|___    __|  |   __|")
        console.log("|     |  _| .'| . | -_|     | | .'|  |  |  |__   |")
        console.log("|__|__|___|__,|___|___|_|_|_|_|__,|  |_____|_____|")
        console.log("")
        console.log('1'.blue + '. Cadastrar aluno')
        console.log('2'.blue + '. Consultar alunos')
        console.log('3'.blue + '. Alterar aluno')
        console.log('4'.blue + '. Excluir aluno')
        console.log('5'.blue + '. Ficha do aluno')
        console.log('6'.blue + '. Relatórios')
        console.log('0'.blue + '. Sair')
        console.log("")

        opcaoMenu = Number(prompt("Escolha: "))

        switch (opcaoMenu) {
            case 1:
                cadastrarAlunos()
                break
            case 2:
                consultarAlunos()
                break
            case 3:
                editarAluno()
                break
            case 4:
                excluirAluno()
                break
            case 5:
                gerarFichaAluno()
                break
            case 6:
                gerarRelatorios()
                break
            case 0:
                console.log("Encerrando o sistema.")
                break
            default:
                console.log("Opção inválida! ".red)
                prompt("[ENTER]")
                break;
        }
    } while (opcaoMenu !== 0)
}

//Main (fim)          <<<<<<<<<<<<<<<<<<<<<<<

//CRUD - Create       >>>>>>>>>>>>>>>>>>>>>>
function cadastrarAlunos() {
    console.clear()
    console.log("                                             ".underline)
    console.log("                                             ".bgBlack)
    console.log("              CADRASTRO DE ALUNO             ".bgBlack)
    console.log("                                             ".bgBlack)

    //Lógica principal
    //Captura de dados
    console.log("")
    nome = prompt("Nome:".bgBlack)
    idade = Number(prompt("Idade:".bgBlack))
    peso = Number(prompt("Peso:".bgBlack))
    altura = Number(prompt("Altura:".bgBlack))
    vip = prompt("Aluno vip? (s/n):".bgBlack)
    if (vip === "s") {
        vip = true

    } else {
        vip = false
    }

    //Adicionar os dados na matriz 
    alunos.push([
        matricula,
        nome,
        idade,
        peso,
        altura,
        vip

    ])

    matricula++ //Auto incremento da matrícula 

    console.log("")
    console.log("Aluno cadrastrado com sucesso!".bgGreen)
    prompt("[ENTER]".green)
}
//CRUD - Create (fim) <<<<<<<<<<<<<<<<<<<<<<<

//CRUD - Read >>>>>>>>>>>>>>>>>>
function consultarAlunos() {
    //Sub menu
    do {
        console.clear()
        console.log("              CONSULTA DE ALUNOS             ".underline)
        console.log()

        console.log("1. Buscar aluno")
        console.log("2. Listar alunos")
        console.log("0. Voltar")

        opcaoConsulta = Number(prompt("Escolha: "))

        switch (opcaoConsulta) {
            case 1:
                buscarAluno()
                break;
            case 2:
                listarAluno()
                break
            case 0:
                break
            default:
                console.log("")
                console.log("Opção inválida".red)
                prompt("[ENTER]".green)
        }
    } while (opcaoConsulta !== 0)
    //Buscar aluno
    function buscarAluno() {
        console.clear()
        console.log("             BUSCAR ALUNO              ")
        console.log("                                       ".underline)

        //Lógica principal (busca pelo nome)
        //(.toLowerCase) converte tudo em letras minúsculas
        busca = prompt("Digite o nome do aluno: ").toLowerCase()

        //Pesquisa(Filtro) na estrutura de dados
        let encontrados = alunos.filter((a) => {
            return a[1].toLowerCase().includes(busca)
        })

        //validação (aluno não encontrado)
        if (encontrados.length === 0) {
            console.log("")
            console.log("Aluno não encontrado.".red)

        } else {
            //console.table(alunosOrdenados)
            //Criando um cabeçalho para tabela 
            let alunoEncontrado = encontrados
                .map((a) => {
                    return {
                        matrícula: a[0],
                        Nome: a[1],
                        Idade: a[2],
                        Peso: a[3],
                        Altura: a[4],
                        VIP: a[5]


                    }

                })
            console.table(alunoEncontrado)

        }

        prompt("[ENTER]".green)
    }

    //Listar aluno
    function listarAluno() {
        console.clear()
        console.log("                                             ".underline)
        console.log("             LISTA DE ALUNOS                 ")
        console.log("                                             ".underline)

        //Validação (se nenhum aluno cadastrado)
        if (alunos.length === 0) {
            console.log("Nenhum aluno cadrastrado.".red)
        } else {

            //console.table(alunosOrdenados)
            //Criando um cabeçalho para tabela 
            let listarAlunos = alunosOrdenados
                .map((a) => {
                    return {
                        matrícula: a[0],
                        Nome: a[1],
                        Idade: a[2],
                        Peso: a[3],
                        Altura: a[4],
                        VIP: a[5]


                    }

                })
            console.table(listarAlunos)
        }

        prompt("[ENTER]".green)
    }
}

//CRUD - Read (fim) <<<<<<<<<<<<<<

//CRUD - Update >>>>>>>>>>>>>>>
function editarAluno() {
    console.clear()
    console.log("                                             ".underline)
    console.log("                   ALTERAR ALUNO             ")
    console.log("                                              ".underline)

    prompt("[ENTER]".green)
}

//CRUD - Update (fim) <<<<<<<<<<<<<<<<<<<<<<<<


//CRUD - Delete >>>>>>>>>>>>
function excluirAluno() {
    console.clear()
    console.log("")
    console.log("                                             ".underline)
    console.log("                  EXCLUIR ALUNO              ".bgCyan)
    console.log("                                             ".underline)

    prompt("[ENTER]".green)
}

//CRUD - Delete (fim) <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<


//Ficha do aluno
function gerarFichaAluno() {
    console.clear()
    console.log("                                             ".underline)
    console.log("")
    console.log("             FICHA DO ALUNO                  ")
    console.log("                                             ".underline)

    let buscarMatricula = Number(prompt("Digite a matrícula do aluno: "))

    //Lógica principal (buscar o index da estrutura de dados )
    let indice = alunos.findIndex((a) => {
        return a[0] === buscarMatricula
    })

    //Validação da busca (pelo index do array -1 (vazio)
    if (indice === -1) {
        console.log("Aluno não encontrado.".red)
    } else {
        //dados do aluno
        nome = alunos[indice][1]
        idade = alunos[indice][2]
        peso = alunos[indice][3]
        altura = alunos[indice][4]
        vip = alunos[indice][5]
        //Status VIP
        let statusVip
        if (vip === true) {
            statusVip = "Sim".green + "(Direito a personal trainer)"

        } else {
            statusVip
        }

        //Cálculos
        let fcm = (208 - (0.7 * idade)).toFixed(0)
        let agua = (peso * 35) / 1000
        let imc = (peso / (altura * altura))
        let pesoIdealMin = (18.5 * (altura / altura)).toFixed(1)
        let pesoIdealMax = (24.9 * (altura * altura)).toFixed(1)
        let statusImc
        if (imc < 18.5) {
            statusImc = "Abaixo do peso"
        } else if (imc < 25) {
            statusImc = "Peso normal"
        } else if (imc < 30) {
            statusImc = "Sobrepeso"
        } else if (imc < 35) {
            statusImc = "Obesidade de grau I"
        } else if (imc < 40) {
            statusImc = "Obesidade de grau II"
        } else {
            statusImc = "Obesidade de grau III"
        }

        //exibição 
        console.log("                                             ".underline)
        console.log("                                             ")
        console.log("             FICHA DO ALUNO                  ")
        console.log("                                             ".underline)
        console.log(`Matrícula: ${buscarMatricula}`)
        console.log(`Nome: ${nome}`)
        console.log(`Idade: ${idade}`)
        console.log(`Peso: ${peso}`)
        console.log(`Altura: ${altura}`)
        console.log(`VIP: ${statusVip}`)
        console.log("")
        console.log(`FCM: ${fcm} bpm`)
        console.log(`Água recomendada: ${agua.toFixed(1)} litros/dia`)
        console.log(`IMC: ${imc.toFixed(2)} ${StatusImc}`)
        console.log(`Faixa de peso ideal: ${pesoIdealMin} kg até ${pesoIdealMax} kg`)
        console.log("                                             ".underline)

    }

    prompt("[ENTER]".green)
}

//Ficha do aluno (fim)

//Relatótios
function gerarRelatorios() {
    do {
        //Submenu
        console.clear()
        console.log("                                             ".underline)
        console.log("                   Relatórios                ")
        console.log("                                             ".underline)

        console.log("1. alunos VIP")
        console.log("2. Média de idade")
        console.log("3. % IMC dos alunos")
        console.log("0. Voltar")
        console.log("")

        opcaoRelatorio = Number(prompt("Escolha: "))

        switch (opcaoRelatorio) {
            case 1:
                gerarRelatorioVip()
                break;
            case 2:
                gerarRelatorioMediaIdade()
                break;
            case 3:
                gerarRelatorioImc()
                break;
            case 0:
                break;
            default:
                console.log("")
                console.log("Opção inválida".red)
                prompt("[ENTER]".green)
        }
    } while (opcaoRelatorio !== 0)

    //Relatótio de alunos VIP
    function gerarRelatorioVip() {
        console.clear()
        console.log("                    ALUNO VIP           ".underline)
        console.log("")
        prompt("[ENTER]".green)
    }

    //Relatótio média de idade dos alunos 
    function gerarRelatorioMediaIdade() {
        console.clear()
        console.log("                MÉDIA DE IDADE".underline)
        console.log("")
        prompt("[ENTER]".green)
    }
    //Relatótio de percentual de IMC  
    function gerarRelatorioImc() {
        console.clear()
        console.log("          % IMC DOS ALUNOS                ".underline)
        console.log("")



        //Lógica principal (map() obter %imc da estrutura de dados)
        //validação 

        //se nenhum aluno cadastrado 
        if (alunos.length === 0) {
            console.log("Nenhum aluno cadrastrado".red)
        } else {
            let abaixoPeso = 0
            let pesoNormal = 0
            let acimaPeso = 0

            alunos.map((a) => {
                let peso = a[3]
                let altura = a[4]
                let imc = peso / (altura * altura)
                if (imc < 18.5) {
                    abaixoPeso++

                } else if (imc < 25) {
                    pesoNormal++
                } else {
                    acimaPeso++
                }
            })

            //Cálculos 
            let total = alunos.length
            let percAbaixo = ((abaixoPeso / total) * 100)
            let percNormal = ((pesoNormal / total) * 100)
            let percAcima = ((acimaPeso / total) * 100)

            //mini gráfico 
            let graficoAbaixo = "■".repeat(Math.round(percAbaixo / 2))
            let graficoNormal = "■".repeat(Math.round(percNormal / 2))
            let graficoAcima = "■".repeat(Math.round(percAcima / 2))

            console.log(`Abaixo do peso: ${percAbaixo.toFixed(1)}%`)
            console.log(graficoAbaixo)
            console.log("")

            console.log(`Peso normal: ${percNormal.toFixed(1)}%`)
            console.log(graficoNormal)
            console.log("")

            console.log(`Acima do peso: ${percAcima.toFixed(1)}%`)
            console.log(graficoAcima)
            console.log("")
        }




        prompt("[ENTER]".green)
    }
}


//Relatórios (fim)

//Iniciar sistema
mainAcademia()