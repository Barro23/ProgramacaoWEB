const TEMPO_INICIO = 10; 
const QDT_BANDEIRAS = 50;   

var pontos = 0;
var tempo;
var timer;

function contarTempo(){
    tempo--;
    document.getElementById("tempo").innerHTML = tempo;

    if(tempo<=0){
        clearInterval(timer);
        alert("Parebens vc conseguiu fazer "+pontos+"pontos")
        iniciarJogo();
    }
}

function iniciarJogo(){
    tempo=TEMPO_INICIO;
    pontos=0;
    document.getElementById('tela').innerHTML="";
    for(let i=0; i<QDT_BANDEIRAS; i++){
        var bandeiras = document.createElement("img");
        bandeiras.src = "img/bandeirazul.png";
        bandeiras.id="band"+(i+1);
        bandeiras.onclick = function(){pegarBandeira(this);
        }
        document.getElementById("tela").appendChild(bandeiras);
    }
    document.getElementById('tempo').innerHTML=tempo;    
    document.getElementById('pontos').innerHTML= pontos;
    timer = setInterval(contarTempo, 1000);
}

function pegarBandeira(elemento){
    pontos++;
    elemento.src = "img/bandeiravermelha.png";
    elemento.onclick = null;
    document.getElementById("pontos").innerHTML = pontos;

}