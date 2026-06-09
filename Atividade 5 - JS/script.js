// Pt. 1
const compras = document.getElementById("compras");
function addItem() {
    const itemC = document.getElementById("itemCompra");
    const iVal = itemC.value.trim();
    if (!iVal) {
        item.innerText = iVal;
    }
    const item = document.createElement("li");
    item.textContent = iVal;

    const removerI = document.createElement("button");
    removerI.textContent = "Remover";



    compras.appendChild(item);
    compras.value = "";
}

// Pt. 2
function addLinha() {
    const tabela = document.getElementById("nomes");
    const linha = document.createElement("tr");

    let N = document.createElement("td");
    N.textContent = prompt("Digite seu nome");
    let S = document.createElement("td");
    S.textContent = prompt("Digite seu sobrenome");
    let R = document.createElement("td");
    let btnRemover = document.createElement("button");
    btnRemover.textContent = "Remover";
    btnRemover.onclick = function(){
        removerL(this);
    }
    let E = document.createElement("td");
    let btnEditar = document.createElement("button");
    btnEditar.textContent = "Editar";
    
    R.appendChild(btnRemover);
    linha.appendChild(N);
    linha.appendChild(S);
    linha.appendChild(R);

    tabela.appendChild(linha);

}
function removerL(botao){
    let linha = botao.parentNode.parentNode;
    let tabela = linha.parentNode;
    tabela.removeChild(linha);
}