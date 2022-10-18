

function historia(){

//inicio da historia todos os inventaruos estvam completos
var inventarioDrofoinicio=["anel da invisibilidade", "dois pares de botas mágicas", "uma poção do sono"  ,"e duas poções da inocência"];

var inventarioTopperinicio=["capa da invisibilidade", "uma pedra do despertar",  "uma varinha das varinhas", "uma poção da inocência", "duas poções da mentira", "poção anti-inteligência"];


//Torper consumiu uma das poções da mentira, perdeu sua pedra e ganhou um par de botar mágicas do Drofo, achou um escudo mágico e uma espada mágica. 

var inventarioTopperfinal=["capa da invisibilidade",  "uma varinha das varinhas", "uma poção da inocência", "uma poçao da mentira"];

var ganhosa="botas magicas";
var ganhosb="escudo magico";
var ganhosc="espada magica";

inventarioTopperfinal.push(ganhosa);
inventarioTopperfinal.push(ganhosb);
inventarioTopperfinal.push(ganhosc);


//No meio da sua jornada, Drofo, ganhou mais uma bota mágica, usou sua poção do sono e consumiu a poção anti-inteligência do Torper, encontrou um ovo de dragão e uma coxinha.

var inventarioDrofofinal=["anel da invisibilidade", "dois pares de botas mágicas" ,"e duas poções da inocência"];

var encontradosa="ovo de dragao";
var encontradosb="coxinha";

inventarioDrofofinal.push(encontradosa);
inventarioDrofofinal.push(encontradosb);

document.write("<br>"+"ao final da jornada Drofo ficou com esses itens:"+"    "+inventarioDrofofinal+"."+"<br>");



document.write("<br>"+"ao final da jornada Topper ficou com esses itens:"+"   "+inventarioTopperfinal+".");

}

historia();

