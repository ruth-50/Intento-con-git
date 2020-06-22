

function multiplicar(arr) {
    let sum = (acumulador , contador) => acumulador * contador 
    
    return arr.reduce(sum) 

}

let a = multiplicar([8 ,2])
console.log(a);


function dividir(arr) {
    let sum = (acumulador , contador) => acumulador / contador 
    
    return arr.reduce(sum) 

}

let b = dividir([8 ,2])
console.log(b);


function restar(arr) {
    let sum = (acumulador , contador) => acumulador - contador 
    
    return arr.reduce(sum) 

}

let c = restar([8 ,2])
console.log(c);


function sumar(arr) {
    let sum = (acumulador , contador) => acumulador + contador 
    
    return arr.reduce(sum) 

}

let d = sumar([8 ,2])
console.log(d);
   