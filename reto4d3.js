var persona1 =
{
"nombre" : "Silvia",
"apellido" : "Cardinale",
"anyoNacimiento" : 1977,
"aficiones": ["leer","comer","viajar"],
"dni": { "anyoExpedicion" : 2019,
"lugarNacimento": "Buenos Aires"},
"colorPelo" : "rubio",
}

var persona2 =
{
"nombre" : "Sofia",
"apellido" : "Etchepare Cardinale",
"anyoNacimiento" : 1997,
"aficiones": ["gimnasia","shopping","viajar"],
"dni": { "anyoExpedicion" : 2020,
"lugarNacimento": "Buenos Aires"},
"colorPelo" : "rubio",
}

var persona3 =
{
"nombre" : "Juani",
"apellido" : "Casalaspro",
"anyoNacimiento" : 1978,
"aficiones": ["ciclismo","comer","tenis"],
"dni": { "anyoExpedicion" : 2018,
"lugarNacimento": "Buenos Aires"},
"colorPelo" : "castano",
}

var persona4 =
{
"nombre" : "Tomas",
"apellido" : "Casalaspro",
"anyoNacimiento" : 2008,
"aficiones": ["playstation","comer","dormir"],
"dni": { "anyoExpedicion" : 2019,
"lugarNacimento": "Buenos Aires"},
"colorPelo" : "castano",
}

var personas = Array (persona1,persona2,persona3,persona4);

if(personas[0].colorPelo == "castano"){
    console.log(personas[0].nombre);
}else{
    console.log("No hay resultados");
};
console.log();

if(personas[1].colorPelo == "castano"){
    console.log(personas[1].nombre);
}else{
    console.log("No hay resultados");
};
console.log();

if(personas[2].colorPelo == "castano"){
    console.log(personas[2].nombre);
}else{
    console.log("No hay resultados");
};
console.log();

if(personas[3].colorPelo == "castano"){
    console.log(personas[3].nombre);
}else{
    console.log("No hay resultados");
};
console.log();

if(personas[0].anyoNacimiento <= 1990){
    var edad = 2020-1977;
        console.log(edad);
}else{
    console.log("Menor de 30");
};
console.log();

if(personas[1].anyoNacimiento <= 1990){
    var edad = 2020-1997;
        console.log(edad);
}else{
    console.log("Menor de 30");
};
console.log();

if(personas[2].anyoNacimiento <= 1990){
    var edad = 2020-1978;
        console.log(edad);
}else{
    console.log("Menor de 30");
};
console.log();

if(personas[3].anyoNacimiento <= 1990){
    var edad = 2020-2008;
        console.log(edad);
}else{
    console.log("Menor de 30");
};
console.log();


if((personas[3].colorPelo == "negro" && personas[3].dni.anyoExpedicion < 2020) || (personas[3].anyoNacimiento > 2003 && personas[3].aficiones.includes("comer") && personas[3].aficiones.includes("dormir"))){
        console.log(personas[3].dni.lugarNacimento);
}else{
    console.log("No hay resultados");
};
console.log()

if((personas[0].colorPelo == "negro" && personas[0].dni.anyoExpedicion < 2020) || (personas[0].anyoNacimiento > 2003 && personas[0].aficiones.includes("comer") && personas[0].aficiones.includes("dormir"))){
    console.log(personas[0].dni.lugarNacimento);
}else{
console.log("No hay resultados");
};
console.log()

if((personas[1].colorPelo == "negro" && personas[1].dni.anyoExpedicion < 2020) || (personas[1].anyoNacimiento > 2003 && personas[1].aficiones.includes("comer") && personas[1].aficiones.includes("dormir"))){
    console.log(personas[1].dni.lugarNacimento);
}else{
console.log("No hay resultados");
};
console.log()

if((personas[2].colorPelo == "negro" && personas[2].dni.anyoExpedicion < 2020) || (personas[2].anyoNacimiento > 2003 && personas[2].aficiones.includes("comer") && personas[2].aficiones.includes("dormir"))){
    console.log(personas[2].dni.lugarNacimento);
}else{
console.log("No hay resultados");
};
console.log()