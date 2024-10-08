function verificadordePalindromo(palavra){
     
    palavra = palavra.replace(/\s+/g, '').toLowerCase();
    let palindromo = palavra.length;

    for (let i = 0; i < Math.floor(palindromo / 2); i++) {
        if (palavra[i] !== palavra[palindromo - 1 - i]) {
          return `${palavra} palavra não é um palíndromo.`;
          }
        }
    return `${palavra} palavra é um palíndromo.`;
}

const palavraInformada = prompt("Escreva uma palavra: ");
const verificacao = verificadordePalindromo(palavraInformada);
console.log(verificacao);