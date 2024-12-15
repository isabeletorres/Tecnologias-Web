// armazenando uma funcao em uma variável

const imprimaSoma = function  (a, b){
    console.log(a+b)
}

imprimaSoma(2, 3)

// armazenando uma funcao arrow em uma variavel

const soma = (a, b) => {
    return a +b
}
console.log(soma(2, 3))

//retorno implicito

const subtracao = (a, b) => a-b
console.log(subtracao(2, 3))