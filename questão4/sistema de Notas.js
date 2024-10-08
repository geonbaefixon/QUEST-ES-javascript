var aluno = {
    nome: "Luana",
    notas: [9.8, 5.4, 8.2],
    media: function(){
           let somar = 0;
    for (let i = 0; i < this.notas.length; i++) {
        somar += this.notas[i];
    }
    return somar / this.notas.length;
    }
};
const mediadoAluno = aluno.media();
console.log(`A média de ${aluno.nome} é ${mediadoAluno.toFixed(2)}`);