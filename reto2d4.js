var persona1 =
{
"nombre" : "Maria",
"apellido" : "Lopez",
"anyoNacimiento" : 1975,
"aficiones": ["hockey","comer","viajar"],
"dni": { "anyoExpedicion" : 2005,
"lugarNacimento": "madrid"},
"colorPelo" : "negro",
}

var persona2 =
{
"nombre" : "Julieta",
"apellido" : "Taffoni",
"anyoNacimiento" : 1979,
"aficiones": ["gimnasia","shopping","viajar"],
"dni": { "anyoExpedicion" : 1999,
"lugarNacimento": "valencia"},
"colorPelo" : "rubio",
}

var persona3 =
{
"nombre" : "German",
"apellido" : "Abud",
"anyoNacimiento" : 1998,
"aficiones": ["futbol","comer","tenis"],
"dni": { "anyoExpedicion" : 2010,
"lugarNacimento": "barcelona"},
"colorPelo" : "negro",
}

var persona4 =
{
"nombre" : "Felipe",
"apellido" : "Abud",
"anyoNacimiento" : 2007,
"aficiones": ["playstation","nadar","futbol"],
"dni": { "anyoExpedicion" : 2007,
"lugarNacimento": "barcelona"},
"colorPelo" : "castano",
}

var personas = [persona1,persona2,persona3,persona4];
//BUCLE FOR
var i;
var result = personas;

for(i=0;i<= personas.length;i++){

  console.log(result[i]);
}


//BUCLE WHILE

i=0;
var result = personas;
while(i<= personas.length){
    console.log(result[i]);
    i++;
}


/*Mostrar en la consola javascript los elementos del array persona que cumplan que su año
de nacimiento esté entre 1978 y 2000. Hacerlo con un bucle for y luego con un bucle
while
*/

//BUCLE FOR
var i;

for(i=0;i<personas.length;i++){
 if(personas[i].anyoNacimiento >1978 && personas[i].anyoNacimiento < 2000){
   console.log(personas[i] );
 }
}

//mostrar mensaje edad

var i;

for(i=0;i<personas.length;i++){
 if(personas[i].anyoNacimiento >1978 && personas[i].anyoNacimiento < 2000){

   console.log(personas[i].nombre + " Tu edad está entre 40 y 20 años"); 
 }else
   console.log(personas[i].nombre + " Tu edad es menor de 20");
 
}

//agregar "jugar a la play" a los elementos del array

var i;

for(i=0;i<personas.length;i++){
   personas[i].aficiones.push("jugar a la play");
console.log(personas[i]);
}
