function AlteraRele(){
    var estado = document.getElementById("estado_1").innerHTML;
    if(estado === "0"){
        document.getElementById("estado").innerHTML="1";
        document.getElementById("rele").innerHTML="<div class='rele_ligado'></div>";
	document.getElementById("botao").innerHTML="<a href='/?desligar' class='botao'>Desliga</a>";
    } else {
        document.getElementById("estado").innerHTML="0";
        document.getElementById("rele").innerHTML="<div class='rele_desligado'></div>";
        document.getElementById("botao").innerHTML="<a href='/?ligar' class='botao'>Liga</a>";
    }
}

function AlteraMovimento(){
    var estado2 = document.getElementById("estado2").innerHTML;
        if(estado2 === "1"){
	document.getElementById("estado2").innerHTML="0";
        document.getElementById("movit").innerHTML="<div class='sem_movi'></div>";
	document.getElementById("botao_2").innerHTML="<a href='/?2_desligar' class='botao_2'>VAZIO</a>";
     } else {
        document.getElementById("estado2").innerHTML="1";
        document.getElementById("movit").innerHTML="<div class='movi'></div>";
        document.getElementById("botao_2").innerHTML="<a href='/?2_ligar' class='botao_mov'>Em Aula</a>";
}
