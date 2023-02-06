let impar = 'Números Impares:'
let par = 'Números Pares:'


for (let value = 0; value <= 100; value++) {
    
    if (value %2 === 0) {
        par += "\n" + value
    }

    else {
        impar += "\n" + value
    }
} 

console.log(par)
console.log(impar)