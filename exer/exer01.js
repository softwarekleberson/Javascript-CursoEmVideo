var idade = 66

if(idade >= 18 && idade <= 65){
    console.log('Voto obrigatorio')
}else if ((idade >= 16 && idade <= 17) || idade >= 65){
    console.log('Voto opional')
}
else {
    console.log('Não vota')
}