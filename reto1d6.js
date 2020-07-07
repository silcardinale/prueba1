function calculadora(tipo_operacion,x,y){
    if(tipo_operacion == "sum"){
        return x+y;
    }if(tipo_operacion =="subs"){
        return x-y;
    }if(tipo_operacion =="mult"){
        return x*y;
    }if(tipo_operacion =="div"){
        return x/y;
    }
}
calculadora("sum",5,5);
console.log(calculadora("sum",5,5));

var texto = "sum";
var x = 1;
var y = 3;

console.log(calculadora(texto,x,y));