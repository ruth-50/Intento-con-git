 function sumar(arr) {
   
    let sum = (acumulador , contador) => acumulador + contador  
    return arr.reduce(sum)

}
let funcion_de_suma_con_arrays = sumar([8,9])
console.log(funcion_de_suma_con_arrays);

function restar(arr) {
    let sum = (acumulador , contador) => acumulador - contador 
    return arr.reduce(sum) 

}
let funcion_de_resta_con_arrays = restar([8 ,2])
console.log(funcion_de_resta_con_arrays);

function multiplicar(arr) {
    let sum = (acumulador , contador) => acumulador * contador 
    return arr.reduce(sum) 
 
}
let funcion_de_multiplicar_con_arrays = multiplicar([8 ,2])
console.log(funcion_de_multiplicar_con_arrays);

function dividir(arr) {
    let sum = (acumulador , contador) => acumulador / contador 
    return arr.reduce(sum) 

}
let funcion_de_dividir_con_arrays = dividir([8 ,2])
console.log(funcion_de_dividir_con_arrays);

//...........................................................................

document.getElementById('boton1').addEventListener('click',function(){
    document.getElementById('input').value += 1
})

document.getElementById('boton2').addEventListener('click',function(){
    document.getElementById('input').value += 2
})

document.getElementById('boton3').addEventListener('click',function(){
    document.getElementById('input').value += 3
})

document.getElementById('boton4').addEventListener('click',function(){
    document.getElementById('input').value += 4
})

document.getElementById('boton5').addEventListener('click',function(){
    document.getElementById('input').value += 5
})

document.getElementById('boton6').addEventListener('click',function(){
    document.getElementById('input').value += 6
})

document.getElementById('boton7').addEventListener('click',function(){
    document.getElementById('input').value += 7
})

document.getElementById('boton8').addEventListener('click',function(){
    document.getElementById('input').value += 8
})

document.getElementById('boton9').addEventListener('click',function(){
    document.getElementById('input').value += 9
})

document.getElementById('boton0').addEventListener('click',function(){
    document.getElementById('input').value += 0
})

//..........................................................................

let array_de_toda_la_suma = []
document.getElementById('sumar').addEventListener('click',function (){
   
array_de_toda_la_suma.push(parseInt(document.getElementById('input').value))

let LLamando_la_suma = sumar(array_de_toda_la_suma) 
console.log(LLamando_la_suma);

document.getElementById('input').value = ''

})

let array_de_toda_la_resta = []
document.getElementById('restar').addEventListener('click',function(){

array_de_toda_la_resta.push(parseInt(document.getElementById('input').value))

let LLamando_la_resta = restar(array_de_toda_la_resta) 
console.log(LLamando_la_resta);

document.getElementById('input').value = ''

})

let array_de_toda_la_multiplicacion = []
document.getElementById('multiplicar').addEventListener('click',function(){

array_de_toda_la_multiplicacion.push(parseInt(document.getElementById('input').value))

let LLamando_la_multiplicacion = multiplicar(array_de_toda_la_multiplicacion) 
console.log(LLamando_la_multiplicacion); 

document.getElementById('input').value = ''

})

let array_de_toda_la_divicion = []
document.getElementById('dividir').addEventListener('click',function(){

array_de_toda_la_divicion.push(document.getElementById('input').value)

let llamando_la_divicion = dividir(array_de_toda_la_divicion)
console.log(llamando_la_divicion);

document.getElementById('input').value = ''

})

//..............................................................................


document.getElementById('igual').addEventListener('click',function(arr){
    array_de_toda_la_suma.push(parseInt(document.getElementById('input').value))

let LLamando_la_suma = sumar(array_de_toda_la_suma) 
console.log(LLamando_la_suma);
document.getElementById('input').value=LLamando_la_suma

    array_de_toda_la_resta.push(parseInt(document.getElementById('input').value))

let LLamando_la_resta = restar(array_de_toda_la_resta) 
console.log(LLamando_la_resta);
document.getElementById('input').value=LLamando_la_resta

    array_de_toda_la_multiplicacion.push(parseInt(document.getElementById('input').value))

let LLamando_la_multiplicacion = multiplicar(array_de_toda_la_multiplicacion) 
console.log(LLamando_la_multiplicacion); 
document.getElementById('input').value=LLamando_la_multiplicacion

    array_de_toda_la_divicion.push(document.getElementById('input').value)

let llamando_la_divicion = dividir(array_de_toda_la_divicion)
console.log(llamando_la_divicion);
document.getElementById('input').value=llamando_la_divicion


})






