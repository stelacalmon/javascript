![GitHub License](https://img.shields.io/github/license/stelacalmon/javascript)

# JavaScript
Repositório usado para estudo de lógica de programação com uso da linguagem Java Script.
## AUTOR 
Stela Calmon

---
## Variáveis
Variáveis são espaços na memória do computador usados para guardar valores que podem alterar ao longo do programa.
###Principais tipos primitivos 
- strings (texto)
- number (números inteiros e não inteiros)
- boolean (verdadeiro ou falso)
```mermaid
graph LR
Memória
Entrada --> Processamento --> Saída
```
## Operadores Aritméticos 
| Operador | Propósito | Exemplo | Resultado | 
| ---------|-----------|---------|-----------|
| = | Atribuir um valor | x = 10 | x = 10|
| + | Somar | 10 + 5 | 15 |
| += | somar e atribuir | x += 5 | x = 15 |
| - | Subtrair | 15 - 10 | 5 |
| -= | Subtrair e atribuir | x -= 10 | x = 5 |
| * | Multiplicar | 5 * 4 | 20 |
| *= | Multiplicar e atribuir | x *= 4 |  X = 20 |
| / | Dividir | 20 / 2 | 10 | 
| /= | Dividir e atribuir | x /= 2 | 10 | 
| ++ | Somar 1 ao resultado | x++ | 11 | 
| -- | Subtrair 1 do resultado | x-- | 10 | 
| % | Resto da divisão | 10 % 3 | 1 | 

## Operadores logicos
| Comparador | Simbologia  |
|------------|-------------|
| AND | && |
| OR | \| \| |
| NOT | ! |

 

## Comparadores
| Comparador | Significado |
|------------|-------------|
| > | Maior que |
| >= | Maior ou igual a |
| < | Menor que |
| <= | Menor ou igual a | 
| === | Idêntico a |
| !== | Nao idêntico a |

## Estrutura de controle
### Estrutura de controle condicionais 

```Javascript
if (condição) {
   //condição verdadeira
}

if (condição) {
  //condição verdadeira
} else {
  //condição falsa
}

if (condição 1) {
   //condição 1 verdadeira
} else if (condição 2) {
   //condição 2 verdadeira
} else {
   // se nenhuma das condições anteriores for verdadeira
}

switch (valor) {
   case 1:
      //código caso o valor seja 1
      break
   case 2:
      //código caso o valor seja 2
      break
   default:
   //cógido caso o valor seja diferente de 1 ou 2
   break
}
```














