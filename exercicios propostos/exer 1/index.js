var horario = new Date()
var horas = horario.getHours()

var imagemDoDia = window.document.getElementById('imagemDoDia')
var paragrafo = window.document.getElementById('paragrafo')
var fundo = document.querySelector('body.fundo');

paragrafo.innerHTML += horas

if(horas <= 12){
  imagemDoDia.setAttribute('src', 'flower.jpg')
  paragrafo.style.color = 'yellow'
  fundo.style.backgroundColor = 'rgb(255, 255, 0)'
}

else if(horas > 12 && horas <= 18){
    imagemDoDia.setAttribute('src', 'monk.jpg')
    paragrafo.style.color = 'orange'
    fundo.style.backgroundColor = 'rgb(255, 165, 0)'
}
else {
    imagemDoDia.setAttribute('src', 'wolf.jpg')
    paragrafo.style.color = 'black'
    fundo.style.backgroundColor = 'rgb(000, 000, 20)'
}