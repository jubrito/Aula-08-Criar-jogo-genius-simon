/*clicar no começar -> niveis de 1 a 3 e quanto mais dificil mais rapido
sequencia = lista de cores 
pessoa tenta acertar a sequencia em 10s e se acertar clearInterval, proximo nivel (proximo elemento lista)
se errar, alert


btY.classList.add("piscar");

*/
let botao = document.querySelector("#botao");
let btG = document.querySelector(".green");
let btY = document.querySelector(".yellow");
let btR = document.querySelector(".red");
let btB = document.querySelector(".blue");

/*
let niveis = [{btY},             //NIVEL 1
    {btY, btG},                  //NIVEL 2   
    {btY, btG, btB},             //NIVEL 3
    {btY, btG, btB, btR},       //NIVEL 4
    {btY, btG, btB, btR, btY}   //NIVEL 5
]
*/

let niveis = [
    [], [], [], [], []
]

let resposta = [
    [], [], [], [], []
]

let indice;
let i, j = 0;
let nivelAtual = 0;
function comecar(){
    nivelAtual += 1;
    executarNivel(nivelAtual);
}

function randomNumbers (numeroDeNiveis){
    let numerosSorteados = [];
    for (i=0; i<numeroDeNiveis; i++) {
        //Seleciona numero de 1 a 4
        numerosSorteados[i] = Math.floor(Math.random()*(4-1+1)+1); //Math.random()*(max-min+1)+min
    }
    return numerosSorteados;
}

function piscaCor(numeroCor, i, nivelAtual) {
    switch (numeroCor) {
        case 1:
            btG.classList.add("piscar");
            setTimeout(function(){ btG.classList.remove("piscar"); }, 500);
            niveis[nivelAtual-1][i] = 1;
            break;
        case 2:
            btR.classList.add("piscar");
            setTimeout(function(){ btR.classList.remove("piscar"); }, 500);
            niveis[nivelAtual-1][i] = 2;
            break;
        case 3:
            btB.classList.add("piscar");
            setTimeout(function(){ btB.classList.remove("piscar"); }, 500);
            niveis[nivelAtual-1][i] = 3;
            break;
        case 4:
            btY.classList.add("piscar");
            setTimeout(function(){ btY.classList.remove("piscar"); }, 500);
            niveis[nivelAtual-1][i] = 4;
            break;
        default:
            break;
    }
}

function falhou() {
    console.log("Falhou");
}

function armazenaResposta(corCerta, i, NivelAtual) {

    btG.onclick = function () {
        if (corCerta == 1) {
            console.log("Acertou");
            resposta[nivelAtual-1][i] = 1;
            comecar();
        } else { console.log ("Errou"); }
    }
    btR.onclick = function () {
        if (corCerta == 2) {
            console.log("Acertou");
            resposta[nivelAtual-1][i] = 2;
            comecar();
        } else { console.log ("Errou"); }
    }
    btB.onclick = function () {
        if (corCerta == 3) {
            console.log("Acertou");
            resposta[nivelAtual-1][i] = 3;
            comecar();
        } else { console.log ("Errou"); }
    }
    btY.onclick = function () {
        if (corCerta == 4) {
            console.log("Acertou");
            resposta[nivelAtual-1][i] = 4;
            comecar();
        } else { console.log ("Errou"); }
    }
}

function executarNivel(nivelAtual){
    let numerosSorteados = randomNumbers(nivelAtual);
    for (i= 0; i<numerosSorteados.length; i++){
        let cor = numerosSorteados[i];
        piscaCor(cor, i, nivelAtual);
        armazenaResposta(cor, i, nivelAtual);
        // setInterval(function(){ falhou(); }, 5000);
        console.log("FINAL---------------")
        console.log("Cor:"+cor);
        console.log("i:"+i);
        console.log("Nivel Atual:"+nivelAtual);
    }
    console.log("Numeros sorteados:")
    console.log(numerosSorteados);
    console.log(niveis);
    console.log(resposta);
}


//piscar = aparecer e sumir o brilho
botao.onclick = comecar;