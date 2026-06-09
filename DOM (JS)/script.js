// Pt. 1
document.getElementById("demo").innerHTML = "Aula 26/05/2026 e 28/05/2026";

// Pt. 2
const h = document.getElementById("titulo");
const p = document.getElementById("info");
h.innerText = "DOM Interativo";
p.style.color = "royalblue";
p.innerText = "Texto trocado pelo JS!";

// Pt. 3
function destacar() {
    const ps = document.getElementsByTagName("p");
    for (let i = 0; i < ps.length; i++) {
        ps[i].style.background = "royalblue";
        ps[i].style.color = "white";
    }
}

// Pt.4
const avisos = document.getElementsByClassName("aviso");
console.log("Total:", avisos.length);
for (let i = 0; i < avisos.length; i++) {
    avisos[i].style.color = "crimson";
    avisos[i].innerText = "⚠️ " + avisos[i].innerText;
}

// Pt. 5
const box = document.getElementById("box");
document.getElementById("btn").onclick = () => {
    box.innerHTML = `
                <h3></h3>
                <ul>
                    <li><b>1.</b> Estudar DOM</li>
                    <li><b>2.</b> Praticar JS</li>
                </ul>
                `;
};

// Pt. 6
document.getElementById("foto").src = "https://avatars.githubusercontent.com/u/102752985?v=4";
document.getElementById("foto").alt = "Nova foto";
document.getElementById("link").href = "https://github.com/JLProdutor";
document.getElementById("nome").value = "João Lucas";
document.getElementById("enviar").disabled = true;

// Pt. 7
const stiloso = document.getElementById("stiloso");
stiloso.style.color = "white";
stiloso.style.backgroundColor = "royalblue";
stiloso.style.padding = "12px 18px"
stiloso.style.borderRadius = "8px";
stiloso.style.fontWeight = "bold";

// Pt. 8
const toogle = document.getElementById("toogle");
const painel = document.getElementById("painel");
toogle.setAttribute("type", "button"); // atributo padrão
toogle.setAttribute("data-id", "42"); // data: Informação extra no HTML
toogle.setAttribute("data-acao", "abrir");
toogle.setAttribute("ara-expanded", "false"); // aria: Acessibilidade
toogle.setAttribute("role", "region");

// Pt. 9
const pt9 = document.getElementById("pt9");
const novoP = document.createElement("p"); // Criar o elemento, qeu ainda não existe na página
novoP.innerText = "Sou um parágrafo novo!"; // Configurar o elemento
novoP.id = "pNovinho";
novoP.className = "destaque";
novoP.style.color = "royalblue";
pt9.appendChild(novoP); // Anexar à página (sem isso ele não aparece)
const pic = document.createElement("img"); // Outros elementos
pic.src = "https://www.umdoisesportes.com.br/thumbor/DUnkUw5cVMQhPVstiuxd5BYVcjQ=/1200x800/smart/filters:format(webp)/https%3A%2F%2Fmedia.umdoisesportes.com.br%2Fmain%2F2026%2F05%2Falex-poatan-trajetoria-ufc.jpg";
pic.width = "300";
pic.height = "200";
pt9.appendChild(pic);
const space = document.createElement("br");
pt9.appendChild(space);
const botaozin = document.createElement("button");
botaozin.innerHTML = "Botão criado por JS";
pt9.appendChild(botaozin);
const linha = document.createElement("hr");
pt9.appendChild(linha);

// Pt. 10
function adicionar() {
    const campo = document.getElementById("campo");
    const listinha = document.getElementById("listinha");
    const li = document.createElement("li");
    li.innerText = campo.value;
    listinha.appendChild(li);
    campo.value = "";
}

// Pt. 11
const frutas = document.getElementById("frutas"); 
const alvo = document.getElementById("para-remover");
//lista.removeChild(alvo); // Forma clássica: Precisa da referência do pai
alvo.remove(); // Forma moderna: Não precisa do pai
//while (frutas.firstChild) frutas.removeChild(frutas.firstChild); // Remove TODOS os elementos filhos
const remover = document.getElementById("remover"); // Botão para remover
remover.onclick = function (){
    const itens = document.querySelectorAll("#frutas li");
    itens.forEach(item => item.remove());
};

// Pt. 12
const carrega = document.getElementById("carrega");
const placeholder = document.getElementById("placeholder");
const h2 = document.createElement("h2");
h2.innerText = "Carregamento Concluído!";
h2.style.color = "green";
//carrega.replaceChild(h2, placeholder); // Forma clássica: pai.replaceChild(novo, antigo)
placeholder.replaceWith(h2); // Forma moderna: antigo.replaceWith(novo)
