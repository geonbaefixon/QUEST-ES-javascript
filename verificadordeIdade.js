function dadosdasPessoas(){
    const pessoas = [];
            
    for (let i = 0; i < 5; i++){
        const nome = prompt(`Informe seu nome ${i+1}:`);
        const idade = parseInt(prompt(`Informe sua idade ${i+1}:`));
                                        
    pessoas.push({nome, idade});
    }
    return pessoas;
}

function maioresdeIdade(pessoas){
    console.log("As pessoas maiores de idade são: ");
    for (let i = 0; i < pessoas.length; i++) {
        if (pessoas[i].idade >= 18) {
            console.log(pessoas[i].nome);
        }
    }
}
const pessoas = dadosdasPessoas();
maioresdeIdade(pessoas)