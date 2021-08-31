

//Función Autoejecutable
(function () {
    console.log("Buenos días Función Autoejecutable")
})()

let men = `Buenos días Función autoejecutables de otra manera `;
(function(mensaje){
    console.log(`${mensaje}`);
})(men)

const resultado = (function () {
    return 2+3;
})();
console.log(resultado);

if(resultado<=5){
    console.log("la condición es correcta")
}

//Con Función Expresiva

const datos1 = function () {
    return 2+3;
}

const resultado1 = datos1();
if (resultado1<=5) {
    console.log("La condición sigue siendo correcta")
}

const datos2 = (function (num1, num2) {
    return num1+num2;
});

const resultado3 = datos2(2,3);

if(resultado3<=5){
    console.log("la condición es correcta en resultado 3");
}

//Lo mismo con la función autoejecutable 

const resultado4 = (function (num1, num2) { return num1+num2;
    
})(2,3)
if(resultado4<=5){
    console.log("la condición es correcta en resultado 4, con autoejecutable");
}


(function() {
    console.log("Buenos días a todos")
})()

setTimeout(()=> {
    (function() {
        console.log("Buenos días a todos por segunda vez");

})()
},10);

//Clausura 
const sumarDeUnoAUno = (function(){
    let data;
    return function(nombre){
        if(nombre!=null){
            data = nombre;
        }
        return data;
        // return (nombre!=null) ?(data = nombre, data) :data;
    };
})();

console.log(sumarDeUnoAUno(`Rafael`));
console.log(sumarDeUnoAUno(null));
console.log(sumarDeUnoAUno());
console.log(sumarDeUnoAUno());
console.log(sumarDeUnoAUno());
console.log(sumarDeUnoAUno(`Angarita`));
console.log(sumarDeUnoAUno(null));
console.log(sumarDeUnoAUno());
console.log(sumarDeUnoAUno());
console.log(sumarDeUnoAUno());

const data = (()=>{
    let mensaje;
    return (...men) => 
        (men!=null && men!=undefined)
        ?
            mensaje = men
        : 
            mensaje;
})();
console.log(data('Rafael'));
console.log(data(null));
console.log(data(undefined));
console.log(data());





// Funciones Flecha
function saludar(){
    return `Hola mundo`;
}
console.log(saludar());


const saludar =()=>{
    return `Hola mundo`;
}
const suma =()=> 1+3;
const parametros_1 = mensaje => mensaje;
const condicio = num1 => num1>=3;

console.log(condicio(3));