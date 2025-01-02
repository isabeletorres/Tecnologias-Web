// criar função de forma literal
function fun1(){
}

// Armazenar uma função em uma variável
const fun2 = function (){
} 

// Armazenar function em um array

const array = [function (a, b){return a+b}]
console.log(array[0](2,3))

//Armazenar em um atributo de obrjeto
const obj = {}
obj.falar = function () {return 'Opa'}
console.log(obj.falar())

//Passnado função como parâmetro

function run (fun){
    fun()
}

run (function () {console.log('Execultando...')})

//function pode retornar outra function

function soma (a, b){
    return function (c){
        console.log(a+b+c)
    }
}
soma(2, 3)(4)