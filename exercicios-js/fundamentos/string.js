const escola = "coder"

console.log(escola.charAt(4)) // r
console.log(escola.charAt(5)) // ''
console.log(escola.charCodeAt(3)) // valor 101 tabela ascii ou unicode
console.log(escola.indexOf('e')) // retorna o indice a qual a letra E se encontra
console.log(escola.substring(1)) // a partir do indice 1 oder
console.log(escola.substring(0, 3)) // indice 0 ao indice 2 sem incluir o indice 3 cod

console.log("Escola ".concat(escola).concat("!")) // concatena sentenças
console.log(escola.replace('e', 3)) // replace dentro de escola letra E por 3
console.log('ana, maria, braga'.split(',')) // converte em um array