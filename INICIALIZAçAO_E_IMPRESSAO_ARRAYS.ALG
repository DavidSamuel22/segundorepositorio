algoritmo "inicializaçao_e_impressao_arrays"
var
nome:vetor [1..6] de caracter
i:inteiro
inicio
nome[1] <- "karen"
nome[2] <- "leticia"
nome[3] <- "lorrane"
nome[4] <- "izadora"
nome[5] <- "ketlen"
nome[6] <- "agatha"

para i de 1 ate 5 faca
escreva(nome[i], ", ")
fimpara
  para i de 6 ate 6 faca
escreva(nome[i], ".")
fimpara
fimalgoritmo