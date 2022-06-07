
function AlteraRele(){
    var estado = document.getElementById("estado").innerHTML;
    if(estado === "0"){
        document.getElementById("estado").innerHTML="1";
        document.getElementById("rele").innerHTML="<div class='rele_ligado'></div>";
		document.getElementById("botao").innerHTML="<a href='/?desligar' class='botao'>Desligar</a>";
    } else {
        document.getElementById("estado").innerHTML="0";
        document.getElementById("rele").innerHTML="<div class='rele_desligado'></div>";
        document.getElementById("botao").innerHTML="<a href='/?ligar' class='botao'>Ligar</a>";
    }
}

function AlteraMovimento1(){
    var estado_2 = document.getElementById("estado_2").innerHTML;
        document.getElementById("estado_2").innerHTML="1";
        document.getElementById("movit").innerHTML="<div class='sem_movi'></div>";
	document.getElementById("botao_2").innerHTML="<a href='/?2_desligar' class='botao_2'>vazio</a>";
}
function AlteraMovimento2(){
    var estado_3 = document.getElementById("estado_3").innerHTML;
        document.getElementById("estado_3").innerHTML="0";
        document.getElementById("movit").innerHTML="<div class='movi'></div>";
        document.getElementById("botao_mov").innerHTML="<a href='/?2_ligar' class='botao_mov'>Em Aula</a>";
}
