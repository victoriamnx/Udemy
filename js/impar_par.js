let par = 'Números Pares:'
let impar = 'Números Impares:'

for (let value = 0; value <= 10; value++) {
    
    if (value %2 === 0) {
        par += "\n" + value
    }
   
    else {
        impar += "\n" + value
    }
} 

console.log(impar)
console.log(par)