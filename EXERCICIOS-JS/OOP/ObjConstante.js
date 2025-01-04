// pessoa -> 123 -> (...)

const pessoa = {nome: 'joão'}
pessoa.nome = 'Pedro'
console.log(pessoa)

Object.freeze(pessoa)