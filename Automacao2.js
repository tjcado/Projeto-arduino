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

function Movimento(){
    var estado_2 = document.getElementById("estado_2").innerHTML;
    if(estado_2 === "0"){
        document.getElementById("estado_2").innerHTML="1";
        document.getElementById("movimento").innerHTML="<div class='movimento'></div>";
	document.getElementById("botao_2").innerHTML="<a href='/?2_desligar' class='botao_2'>vazio</a>";
    } else {
        document.getElementById("estado_2").innerHTML="0";
        document.getElementById("movimento").innerHTML="<div class='sem_movimento'></div>";
        document.getElementById("botao_2").innerHTML="<a href='/?2_ligar' class='botao_2'>movimento</a>";
    }
}
