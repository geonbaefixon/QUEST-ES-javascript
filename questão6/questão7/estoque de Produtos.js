let produtos = [
    {nome: 'Arroz', preco: 6.00, quantidadeemEstoque: 60},
    {nome: 'Feijão', preco: 5.00, quantidadeemEstoque: 38},
    {nome: 'Macarrão', preco: 4.50, quantidadeemEstoque: 45},
    ];

function calcularvalorEstoque(estoque){
    let valorTtl = 0;
    for (let i = 0; i < estoque.length; i++) {
        const produto = estoque[i];
        valorTtl += produto.preco * produto.quantidadeemEstoque;
    }
    return valorTtl;
}
const valorEstq = calcularvalorEstoque(produtos);
console.log('Valor total dos produtos no estoque: R$', valorEstq);