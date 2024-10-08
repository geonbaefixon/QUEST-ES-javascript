let tarefas = [];

for (let i = 0; i < 5; i++){
    const nomeTarefas = prompt("informe as tarefas que você quer realizar: ");
   
    tarefas.push({nomeTarefas});
}
console.log("Tarefas:", tarefas)

let concluida = prompt("Qual tarefa deseja marcar alguma tarefa como concluída? ");
if (concluida > 0 && concluida <= tarefas.length) {
    tarefas.splice(concluida - 1, 1);
    console.log(`${concluida} foi marcada como concluída`);
}else{
    console.log("Tarefa não encontrada.");
}

console.log("Tarefas que faltam:", tarefas);
