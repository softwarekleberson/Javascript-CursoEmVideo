const amigo = {'nome': 'kleberson', 'idade': 29, 'sexo': 'M', 'peso': 80, engordar(n=0){
    this.peso += n
    }
}

amigo.engordar(10)
console.log(`Nome ${amigo.nome} e peso ${amigo.peso}`)