let valores = [1,4,2,0,10,5]

//Ordena os valores no vetor
console.log(`Valores em order crecente : ${valores.sort()}`)

//Quantidade de elementos
console.log(`Quantidade de elementos ${valores.length}`)

//Adiciona na ultima posição
valores.push(100)
console.log(`Adição de novo elemento ${valores}`)

//Adicionando elemento em posição x
valores[0] = 1000
console.log(`Adição de elemento na posição 0 ${valores[0]}`)

//Achar valor qualquer
console.log(`O valor 2 está na posição ${valores.indexOf(2)}`)

console.log(`Valores em order crecente ${valores.sort((a, b) => a - b)}`)