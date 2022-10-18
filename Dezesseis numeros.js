

function numeros(){

    var numerosMaiores=[];
    var numerosMenores=[];


var contador=0;

while(contador<2){

    var numero=parseInt(prompt("escreva o numero"));

    



    if(numero>50){
        numerosMaiores.push(numero);
    }else if(numero<50){
        numerosMenores.push(numero);
    }

    contador++;

    
}

alert("esses sâo os numeros maiores que 50:"+" "+numerosMaiores);
alert("esses sâo os numeros menores que 50:"+" "+numerosMenores);




}

numeros();