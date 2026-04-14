// Teste diferenciado
function obterValor() {
    // 1. Acessa o elemento pelo ID
    var input = document.getElementById("email");
    // 2. Obtém o valor dele com .value
    var valor = input.value;
    // 3. Exibe o resultado
    document.getElementById("resultado").innerText = valor;
    console.log(valor); // Também mostra no console do navegador
}