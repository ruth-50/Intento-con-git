function sumar() {
    let arrays1= [4]
    arrays1.push(10)
    let arrays2= [3]
    arrays2.push(10,9)
    let sum1 = (acumulador , contador) => acumulador + contador 
    let sum2 = (acumulador , contador) => acumulador + contador 
    return arrays1.reduce(sum1) + parseInt(arrays2.reduce(sum2))
 }
 let s = sumar()
 console.log(s);
 
 
 function restar() {
     let arrays1= []
     arrays1.push(10)
     let arrays2= []
     arrays2.push(1)
     let rest1 = (acumulador , contador) => acumulador - contador 
     let rest2 = (acumulador , contador) => acumulador - contador 
     return arrays1.reduce(rest1) - parseInt(arrays2.reduce(rest2))
     
  }
  let r = restar()
  console.log(r);
 
  function dividir() {
     let arrays1= []
     arrays1.push(10)
     let arrays2= []
     arrays2.push(4)
     let div1 = (acumulador , contador) => acumulador / contador 
     let div2 = (acumulador , contador) => acumulador / contador
     return  arrays1.reduce(div1) / parseInt(arrays2.reduce(div2))
     
     
  }
  let d = dividir()
  console.log(d);
  
 
  function multiplicar() {
     let arrays1= [4]
     arrays1.push()
     let arrays2= []
     arrays2.push(10)
     let multi1 = (acumulador , contador) => acumulador * contador 
     let multi2 = (acumulador , contador) => acumulador * contador 
     return arrays1.reduce(multi1) * parseInt(arrays2.reduce(multi2))
     
     
  }
  let m = multiplicar()
  console.log(m);