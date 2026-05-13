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
let opcaoMenu, opcaoConsulta, opcaoRelatorio

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
        console.log("1. Cadastrar aluno")
        console.log("2. Consultar alunos")
        console.log("3. Alterar aluno")
        console.log("4. Excluir aluno")
        console.log("5. Ficha do aluno")
        console.log("6. Relatórios")
        console.log("0. Sair")
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
    console.log("              CADRASTRO DE ALUNO            ".underline)
    console.log("")

    //Lógica principal
    //Captura de dados
    nome = prompt("Nome: ".cyan)
    idade = Number(prompt("Idade: ".cyan))
    peso = Number(prompt("Peso: ".cyan))
    altura = Number(prompt("Altura: ".cyan))
    vip = prompt("Aluno vip? (s/n): ".cyan)
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
    console.log("Aluno cadrastrado com sucesso!")
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

        console.log("1. Buscar alunos")
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
        console.log("             BUSCAR ALUNO              ".underline)
        console.log("")

        prompt("[ENTER]".green)
    }

    //Listar aluno
    function listarAluno() {
        console.clear()
        console.log("             LISTA DE ALUNOS             ".underline)
        console.log("")

        //Validação (se nenhum aluno cadastrado)
        if (alunos.length === 0) {
            console.log("Nenhum aluno cadrastrado.".red)
        } else {
            //console.table(alunos)
            //Ordenar os nomes (criar cópia do array)
            let alunosOrdenados = [...alunos]
            alunosOrdenados.sort((a, z) => {
                return a[1].localeCompare(z[1])
            })

            //console.table(alunosOrdenados)
            //Criando um cabeçalho para tabela 
            let listaAluno = alunosOrdenados
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
                console.table(listaAluno)
        }

        prompt("[ENTER]".green)
    }
}

//CRUD - Read (fim) <<<<<<<<<<<<<<

//CRUD - Update >>>>>>>>>>>>>>>
function editarAluno() {
    console.clear()
    console.log("                   ALTERAR ALUNO"          .underline)
    console.log("")

    prompt("[ENTER]".green)
}

//CRUD - Update (fim) <<<<<<<<<<<<<<<<<<<<<<<<


//CRUD - Delete >>>>>>>>>>>>
function excluirAluno() {
    console.clear()
    console.log("                  EXCLUIR ALUNO"            .underline)
    console.log("")

    prompt("[ENTER]".green)
}

//CRUD - Delete (fim) <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<


//Ficha do aluno
function gerarFichaAluno() {
    console.clear()
    console.log("             FICHA DO ALUNO            ".underline)
    console.log("")


    prompt("[ENTER]".green)
}

//Ficha do aluno (fim)

//Relatótios
function gerarRelatorios() {
    do {
        //Submenu
        console.clear()
        console.log("           Relatórios          ".underline)
        console.log()

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
        console.log("                MÉDIA DE IDADE"            .underline)
        console.log("")
        prompt("[ENTER]".green)
    }
    //Relatótio de percentual de IMC  
    function gerarRelatorioImc() {
        console.clear()
        console.log("          % IMC DOS ALUNOS                ".underline)
        console.log("")
        prompt("[ENTER]".green)
    }
}


//Relatórios (fim)

//Iniciar sistema
mainAcademia()