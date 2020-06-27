
function sumar(arr) {
let sum = (acumulador , contador) => acumulador + contador;
return arr.reduce(sum)

};
function restar(arr) {
let sum = (acumulador , contador) => acumulador - contador;
return arr.reduce(sum) 

};
function multiplicar(arr) {
let sum = (acumulador , contador) => acumulador * contador;
return arr.reduce(sum) 
 
};
function dividir(arr) {
let sum = (acumulador , contador) => acumulador / contador;
return arr.reduce(sum) 

};


//...........................................................................

document.getElementById('boton1').addEventListener('click',function(){
    document.getElementById('input').value += 1;
});

document.getElementById('boton2').addEventListener('click',function(){
    document.getElementById('input').value += 2;
});

document.getElementById('boton3').addEventListener('click',function(){
    document.getElementById('input').value += 3;
});

document.getElementById('boton4').addEventListener('click',function(){
    document.getElementById('input').value += 4;
});

document.getElementById('boton5').addEventListener('click',function(){
    document.getElementById('input').value += 5;
});

document.getElementById('boton6').addEventListener('click',function(){
    document.getElementById('input').value += 6;
});

document.getElementById('boton7').addEventListener('click',function(){
    document.getElementById('input').value += 7;
});

document.getElementById('boton8').addEventListener('click',function(){
    document.getElementById('input').value += 8;
});

document.getElementById('boton9').addEventListener('click',function(){
    document.getElementById('input').value += 9;
});

document.getElementById('boton0').addEventListener('click',function(){
    document.getElementById('input').value += 0;
});

//..........................................................................
let operador = '';
let array_de_toda_la_suma = [];

document.getElementById('sumar').addEventListener('click',function (){
array_de_toda_la_suma.push(parseInt(document.getElementById('input').value))
sumar(array_de_toda_la_suma)
document.getElementById('input').value = ''
operador = 'sumar'

});
//.................................................................................
let array_de_toda_la_resta = [];
document.getElementById('restar').addEventListener('click',function(){
array_de_toda_la_resta.push(parseInt(document.getElementById('input').value))
restar(array_de_toda_la_resta) 
document.getElementById('input').value = ''
operador = 'restar'
});
//.................................................................................
let array_de_toda_la_multiplicacion = [];

document.getElementById('multiplicar').addEventListener('click',function(){
array_de_toda_la_multiplicacion.push(parseInt(document.getElementById('input').value))
multiplicar(array_de_toda_la_multiplicacion) 
document.getElementById('input').value = ''
operador = 'multiplicar'
});
//..................................................................................
let array_de_toda_la_divicion = [];
document.getElementById('dividir').addEventListener('click',function(){
array_de_toda_la_divicion.push(document.getElementById('input').value)
dividir(array_de_toda_la_divicion)
document.getElementById('input').value = ''
operador = 'dividir'
});

//..............................................................................
document.getElementById('igual').addEventListener('click',function(arr){

switch (operador) {
    case 'sumar':
         array_de_toda_la_suma.push(parseInt(document.getElementById('input').value) )
        let LLamando_la_suma = sumar(array_de_toda_la_suma)
        array_de_toda_la_suma=[]
        document.getElementById('input').value=LLamando_la_suma;
        break;
    case 'restar':
        array_de_toda_la_resta.push(parseInt(document.getElementById('input').value))
        let LLamando_la_resta = restar(array_de_toda_la_resta) 
        array_de_toda_la_suma=[]
        document.getElementById('input').value=LLamando_la_resta;
        break ;
    case 'multiplicar':
        array_de_toda_la_multiplicacion.push(parseInt(document.getElementById('input').value))
        let LLamando_la_multiplicacion = multiplicar(array_de_toda_la_multiplicacion) 
        array_de_toda_la_suma=[]
        document.getElementById('input').value=LLamando_la_multiplicacion;
        break;
    case 'dividir':
        array_de_toda_la_divicion.push(parseInt(document.getElementById('input').value)  )
        let llamando_la_divicion = dividir( array_de_toda_la_divicion)
        array_de_toda_la_suma=[]
        document.getElementById('input').value=llamando_la_divicion
        break;
    default:
        break;
};

});






