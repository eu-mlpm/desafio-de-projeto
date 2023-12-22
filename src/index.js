// Insira os dados do personagem: Nome e experiência.
let dadosDoPersonagem = ["Shann", 10001]
let rankDoPersonagem = ""

if(dadosDoPersonagem[1] <= 1000 ){
    rankDoPersonagem = "Ferro"
} else if(dadosDoPersonagem[1] >= 1001 && dadosDoPersonagem[1] <= 2000){
    rankDoPersonagem = "Bronze"
} else if(dadosDoPersonagem[1] >= 2001 && dadosDoPersonagem[1] <= 5000){
    rankDoPersonagem = "Prata"
} else if(dadosDoPersonagem[1] >= 5001 &&dadosDoPersonagem[1] <= 7000){
    rankDoPersonagem = "Ouro"
} else if(dadosDoPersonagem[1] >= 7001 &&dadosDoPersonagem[1] <= 8000){
    rankDoPersonagem = "Ascendente"
} else if(dadosDoPersonagem[1] >= 8001 &&dadosDoPersonagem[1] <= 10000){
    rankDoPersonagem = "Imortal"
} else {
    rankDoPersonagem = "Radiante"
} 

console.log("O Herói é " + dadosDoPersonagem[0] + " e está no rank " + rankDoPersonagem + ".")