function calculadora(valor1, valor2, operacao){
    if (operacao == 'somar'){
        return valor1 + valor2}
    else if (operacao == 'subtrair'){
        return valor1 - valor2}
    else if (operacao == 'multiplicar'){
        return valor1 * valor2}
    else if (operacao == 'dividir'){
        return valor1 / valor2}
    else{
        return "Operacação inválida!"}
}
console.log(calculadora(7, 5, 'somar'))
console.log(calculadora(10, 3, 'subtrair'))
console.log(calculadora(8, 2, 'multiplicar'))
console.log(calculadora(10,5, 'dividir'))
console.log(calculadora(7,3, 'chumdeurugyaru'))