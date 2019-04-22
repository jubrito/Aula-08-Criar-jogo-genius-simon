/*clicar no começar -> niveis de 1 a 3 e quanto mais dificil mais rapido
sequencia = lista de cores 
pessoa tenta acertar a sequencia em 10s e se acertar clearInterval, proximo nivel (proximo elemento lista)
se errar, alert
*/

let botao = document.querySelector("#botao");
let btG = document.querySelector(".green");
let btY = document.querySelector(".yellow");
let btR = document.querySelector(".red");
let btB = document.querySelector(".blue");

/*
let niveis = [{btY},                       //NIVEL 1
    {btY, btG},                  //NIVEL 2   
    {btY, btG, btB},             //NIVEL 3
    {btY, btG, btB, btR},       //NIVEL 4
    {btY, btG, btB, btR, btY}   //NIVEL 5
]
*/

let niveis = [
    [btY],
    [btY, btG],
    [btY, btG, btB],
    [btY, btG, btB, btR]
]

let indice;
let nivelAtual;
function comecar(){
    for(indice=0; indice<niveis.length; indice++){
        executarNivel(niveis[i]);
        armazenarResposta();
    } 
}

let i=0;
function executarNivel(nivel){
    for (i=0; i<nivel[0].length; i++){
        nivel[i].classList.add("piscar");
    }
}

function armazenarResposta(){
}

//piscar = aparecer e sumir o brilho
botao.onclick = comecar;