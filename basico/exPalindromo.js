/*
Faça função recursiva que verifique se uma palavras é palíndromo,
 isto é, se escrita de trás para frente nos leva à mesma palavra.

*/

const input = require('prompt-sync')();

let palavra = input('digite uma palavra qualquer :');

let vetorPalavra = palavra.split(" ");
let palindromo = [], isPalindromo = false;

for(let i=vetorPalavra.length;i>0;i--) {
    palindromo[i] = vetorPalavra[i];
}

for(let i=0;i<vetorPalavra.length;i++) {
    if(vetorPalavra[i] === palindromo[i]) isPalindromo = true;  
    else isPalindromo = false;
}

if(isPalindromo) console.log(`A palavra ${palavra} é um palíndromo !`);
else console.log(`A palavra ${palavra} não é um palíndromo !`);

fdffffd


