function enviarForm() {

    let res = document.getElementById('res')
    let tInicio = Number(document.getElementById('inicio').value)
    let tPasso = Number(document.getElementById('passo').value)
    let tFim = Number(document.getElementById('fim').value)

    if (tInicio == 0 || tFim == 0 || tPasso == 0) {
        alert(`Erro : Digite valores corretos`)
    }
    
    else {

        var ini = tInicio
        var fim = tFim
        var passo = tPasso

        res.innerHTML += `Contagem ... <br>`

        if (fim > ini) {
            for (ini; ini <= fim; ini += passo) {
                res.innerHTML += `${ini} \u{1F449}`
            }
        }
        else {
            for (ini; ini >= fim; ini -= passo) {
                res.innerHTML += `${ini} \u{1F449}`
            }
        }

        res.innerHTML += `🏁`
    }

}