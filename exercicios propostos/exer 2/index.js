function verificar() {

    var dataAtual = new Date()
    var anoCheio = dataAtual.getFullYear()
    var nascimento = Number.parseInt(window.document.getElementById('txtano').value)
    var res = window.document.querySelector('div#res')

    var img = document.createElement('img')
    img.setAttribute('id', 'foto')

    if(nascimento > anoCheio){
        alert('Ano nascimento preenchido de modo incorreto')
    }

    else {
        var fsexo = document.getElementsByName('radsex')
        var idade = anoCheio - nascimento
        var genero = ''

        if(fsexo[0].checked){
            genero = 'Homen'

            if(idade <= 10){
                img.setAttribute('src', 'menino.jpg')
            }
            else if(idade <= 60){
                img.setAttribute('src', 'homen-novo.jpg')
            }
            else {
                img.setAttribute('src', 'homen-velho.jpg')
            }

        }else if(fsexo[1].checked){
            genero = 'Mulher'

            if(idade <= 10){
                img.setAttribute('src', 'menina.jpg')
            }
            else if(idade < 60){
                img.setAttribute('src', 'mulher-nova.jpg')
            }
            else {
                img.setAttribute('src', 'idosa.jpg')
            }
        }
        
        res.style.textAlign = 'center'
        res.innerHTML = `Detectei ${genero} com ${idade} anos`
        res.appendChild(img)

    }
}

