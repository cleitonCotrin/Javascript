const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2))
console.log(media.toString())

// Converte para o valor binário
console.log(media.toString(2))

// Coisas estranhas do Javascript

console.log(7 / 0) // infinity
console.log('10' / 2) // 5
console.log('show' * 2) // NaN

/*
* 0.7999999999 segue uma especificação que a conta acaba não sendo precisa.
* mas é mais rapida e outras linguagens usam essa especificação
*/
console.log(0.1 + 0.7)

// console.log(10.toString()) erro
console.log((10.354).toFixed(2))

// Math
const raio = 5.6
const area = Math.PI * Math.pow(raio, 2)
console.log(area)





