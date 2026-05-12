/**
 * Estrutura de dados - Array(Vetor)
 * @author Stela Calmon
 */

const colors = require('colors')

//a linha abaixo cria um array (Vetor)
let alunos = ["Vitor","Tania", "Pedro", "Maria", "Vivi", "Ana"]

console.clear ()
console.log("===== Array =====".underline)

console.log(alunos)
console.log(`Um array é do tipo: ${typeof(alunos)}`)

//Obtendo o tamanho do array (Length)
console.log(`Tamanho do array: ${alunos.length}`)

//Adicionando dados em um array (CRUD Create)
console.log()
console.log("CRUD Create            ".underline)
// o método push() adiciona de forma segura um dado ao array 
alunos.push("Jorge")
console.log(alunos)
console.log(`Tamanho do array: ${alunos.length}`)

//Exibindo os dados de um array Create Read Update Delete (CRUD Read)
console.log()
console.log("CRUD Read            ".underline)
console.log(alunos)
console.table(alunos)
//Exibindo um dado expecifico do array 
console.log(`Aluno[2]: ${alunos[2]}`)

//Alterando dados de um array (CRUD Update)
//Usar o índice para alterar um dado do vetor
console.log()
console.log("CRUD Update          ".underline)
alunos[0] = "Victor"
alunos[4] = "Viviane"
console.table(alunos)

//Excluindo dados de um array (CRUD Delete)
console.log()
console.log("CRUD Delete        ".underline)
//Delete exclui de forma segura um dado de array 
delete alunos[1]
console.table(alunos)
console.log(`Tamanho do array: ${alunos.length}`)
console.log("")
console.log("                ".underline)
console.log("Percorrendo um array")
console.log("                ".underline)

//          [0] [1] [2] [3] [4] [5]
let notas = [3,  8,  5,  9,  2, 7]
console.log()
console.log(notas)
console.table(notas)

//Percorrendo um array com uso do laço for
console.log("Laço for")
for (let i = 0; i < notas.length; i++) {
    console.log(notas[i])
}

//Simplificação do laço for (for each)
console.log("Laço forEach ".underline)
notas.forEach ((notas) => {
     console.log(notas)
})

//Manipulação e filtragem de dados de um array 
console.log("")
console.log("Manipulação e filtragem de dados".underline)
console.log("")
console.log("Exemplo 1: Adicionar 1 ponto as notas dos alunos")
let notasAtualizadas = notas.map((na) => {
 return na + 1
})
console.log("")
console.log(`Notas originais: ${notas}`)
console.log(`Notas atualizadas: ${notasAtualizadas}`)

console.log("")
console.log("Exemplo 2: Conversão de um sistema de notas(números) para letras(caracteres)")
/*
 NA - Não atendeu (notas < 5 )
 PA - Parcialmente atendido (notas entre 5 e 7)
 A  - Atendeu (nota > 7)
 */

 let notasConvertidas = notas.map((nc) => {
    
    if (nc < 5){
        return "NA"
    } else if (nc > 7){
        return "A"
    } else {
        return "PA"
    }
 })

 console.log("")
 console.log(`Notas originais ${notas}`)
 console.log(`Notas convertidas ${notasConvertidas}`)

 // Nova estrutura de dados 
 let alunosDC = [
    {
        nome: "Bruce",
        idade: 43,
        bolsista: false
    },
    {
        nome: "Clark",
        idade: 45,
        bolsista: false
    },
    {
        nome: "Diana",
        idade: 36,
        bolsista: false
    },
    {
        nome: "Barry",
        idade: 23,
        bolsista: true
    }
 ]

 console.log("")
 console.log("Estrutura de dados usando array")
 console.log("")
 console.log(alunosDC)
 console.table(alunosDC)

 //Filtros 
 console.log("")
 console.log("Filtros: Exempro 1: Alunos bolsistas")
 console.log(alunosDC.filter((b) => {
    return b.bolsista === true
 }))

 console.log("")
 console.log("Filtros: Exempro 2: Alunos com idade superior a 40 anos")
 console.log(alunosDC.filter((i) => {
    return i.idade >= 40 
}))

console.log("")
 console.log("Filtros: Exempro 3: Ordenar os alunos")
 //Dica: criar uma cópia do array original para não modificar o index ([...arry] criar uma cópia) "Relatórios"
 let alunosOrdenados = [...alunosDC] //criar uma cópia
 
 alunosOrdenados.sort((a, z) => {
    return (a.nome.localeCompare(z.nome))
})
console.table(alunosOrdenados)