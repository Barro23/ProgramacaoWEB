var acertou = 0;
var errou = 0;

function conferir(){
    var rq1 = document.getElementsByName("q1");
    var marcadaq1;
    for(let i = 0; i < rq1.length; i++){
        if(rq1[i].checked){
            marcadaq1= rq1[i].value;

            if(marcadaq1 === "a"){
                acertou++;
            }
            else{
                errou++;
            }
        }
    }

    var rq2 = document.getElementsByName("q2");
    var marcadaq2;
    for(let i= 0; i < rq2.length; i++){
        if(rq2[i].checked){
            marcadaq2= rq2[i].value;

            if(marcadaq2 === "a"){
                acertou++;
            }
            else{
                errou++;
            }
        }
    }

    var rq3 = document.getElementsByName("q3");
    var marcadaq3;
    for(let i= 0; i < rq3.length; i++){
        if(rq3[i].checked){
            marcadaq3= rq3[i].value;

            if(marcadaq3 === "a"){
                acertou++;
            }
            else{
                errou++;
            }
        }
    }

    var rq4 = document.getElementsByName("q4");
    var marcadaq4;
    for(let i= 0; i < rq4.length; i++){
        if(rq4[i].checked){
            marcadaq4= rq4[i].value;

            if(marcadaq4 === "a"){
                acertou++;
            }
            else{
                errou++;
            }
        }
    }

    var rq5 = document.getElementsByName("q5");
    var marcadaq5;
    for(let i= 0; i < rq5.length; i++){
        if(rq5[i].checked){
            marcadaq5= rq5[i].value;

            if(marcadaq5 === "a"){
                acertou++;
            }
            else{
                errou++;
            }
        }
    }

    document.getElementById("acertou").style.color="green";
    document.getElementById("acertou").innerHTML ="voce acertou "  + acertou;
    document.getElementById("errou").style.color="red";
    document.getElementById("errou").innerHTML ="voce errou " + errou;
    acertou=errou=0;
}