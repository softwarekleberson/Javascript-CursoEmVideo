let numeros = [10,8,4,7,6,3,0,2,9]

/*
for(let i = 0; i < numeros.length; i++){
    console.log(`A posição ${i} possui valor ${numeros[i]}`)
}
*/

for(let posição in numeros){
    console.log(`A posição ${posição} possui valor ${numeros[posição]}`)
}

