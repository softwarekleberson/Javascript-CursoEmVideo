function tabuada (){
    
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')

    if(num.value.length == 0){
        alert('Digite algum numero')
    }
    else {

        numero = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while(c <= 10){
        
            let criarOption = document.createElement('option')
            criarOption.text = `${numero} x ${c} = ${numero*c}`
            tab.appendChild(criarOption)
            c++
        }
    }
}