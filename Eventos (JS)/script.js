// Tipos de Eventos

/* Eventos de Mouse
click: Ao clicar com o mouse
mouseover: Ao passar o mouse em algo
mouseout: Ao retirar o mouse de algo
mousemove: Ao mover o mouse
*/ 

/* Eventos de Teclado
keydown: Ao pressionar uma tecla
keyup: Ao desprecionar uma tecla
keypress: Ao apertar e soltar uma tecla
*/

/* Eventos de Formulário
submit: Quand o form é enviado
input: Quando o valor de um campo é alterado
change: Quando o valor de umm campo é alterado e o foco é perdido
*/

/* Eventos de Janela
load: Quando a página é carregada
resize: Quando a janela é recarregada
scroll: Quando a barra de rolagem é movida
*/

/* Eventos do HTML
focus: Quando um elemento ganha foco
blur: Quando um elemento perde foco
change:
mouseenter:
*/

/* Adicionar um "listener"
elemento.addEventListener("tipoDeEvento", função);
*/

// Pt. 1
const pClick = document.getElementById("pClick");
pClick.addEventListener("click", function(){
    pClick.innerText = "Parágrafo clicado!"
});

// Pt. 2
const bClick = document.getElementById("bClick");
bClick.addEventListener("click", function(){
    console.log("BOTÃO CLICADO!");
});
const dMOver = document.getElementById("dMOver");
dMOver.addEventListener("mouseover", function(){
    console.log("PASSOU O MOUSE SOBRE A A DIV!");
});
const iTeclado = document.getElementById("iTeclado");
iTeclado.addEventListener("keydown", function(event){
    console.log("TECLA PRESSIONADA:", event.key);
});
const iTeclado2 = document.getElementById("iTeclado2");
iTeclado2.addEventListener("keyup", function(event){
    console.log("TECLA LIBERADA:", event.key);
});
const fSubmit = document.getElementById("fSubmit");
fSubmit.addEventListener("submit", function(event){
    event.preventDefault();
    console.log("FORM ENVIADO");
});
window.addEventListener("resize", function(){
    console.log("JANELA REDIMENSIONADA");
});

// Pt. 3
const iTeclado3 = document.getElementById("iTeclado3");
const num = 0;
iTeclado3.addEventListener("keypress", function(){
    console.log("Quantas vezes você apertou?:", iTeclado3.value.length);
});