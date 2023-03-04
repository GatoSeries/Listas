var arreglo=[];
function numeros(){
    for (let index = 1; index <= 4; index++) {
        arreglo.push(document.getElementById("caja"+index).value); 
       console.log(arreglo);
    }
    var imprimir=[];
    for (let index = 0; index < 4; index++) {
        imprimir.push("<h3>Nombre: "+arreglo[index]+"</h3>");

    }
    document.getElementById("Comas").innerHTML=imprimir;
    document.getElementById("NoComas").innerHTML=imprimir.join(" ");
document.getElementById("boton").style.display="none";
document.getElementById("boton2").style.display="inline-block";

}
function numeros2(){
arreglo.sort();
var imprimirOr=[];
for (let index = 0; index < 4; index++) {  
    imprimirOr.push("<h4>Nombre: "+arreglo[index]+"</h4>");  
}
document.getElementById("NoComas").innerHTML=imprimirOr.join(" ");
}

