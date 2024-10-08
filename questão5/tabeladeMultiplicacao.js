function tabeladeMultiplicacao(valor){
    if (valor <= 0){
        return;
    }
    for (let i = 1; i <= 10; i++){
        console.log(`${valor} multiplicado por ${i} é:`)
        console.log(`${valor * i}`)
    }
}

const valor = prompt("Insira um valor positivo: ")
tabeladeMultiplicacao(valor);