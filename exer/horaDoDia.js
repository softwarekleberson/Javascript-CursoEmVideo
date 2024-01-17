var horaDia = new Date()
var hora = horaDia.getHours()
console.log(hora)

if(hora <= 11){
    console.log('Bom dia')
}
else if(hora > 11 && hora < 18){
    console.log('Boa tarde')
}else {
    console.log('Boa noite')
}