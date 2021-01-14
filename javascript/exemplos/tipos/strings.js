// Retorna o tamanho de uma string
const textSize = 'Texto'.length
console.log(`Quantidade de letras: ${textSize}`)

// Retorna um array quebrando a string por um delimitador
const splittedText = 'Texto'.split('x')
console.log(`\nArray com as posições separadas pelo demilitador`, splittedText)

// Busca por um valor e substitui por outro
const replacedText = 'Texto'.replace('Text', 'txt')
console.log('\nSubstituição de valor:', replacedText)

// Retorna a fatia de um valor
const lastChar = 'Texto'.slice(-1)
console.log(`\nÚltima letra de uma string: `, lastChar)

const allWithoutLastChar = 'Texto'.slice(0, -1)
console.log('\nValor da string da primeira menos a última:', allWithoutLastChar)

const secondToEnd = 'Texto'.slice(1)
console.log('\nValor da string da segunda letra até a última:', secondToEnd)

// Retorna N caracteres a partir de uma posição
const twoCharBeforeFirstPos = 'Texto'.substr(0, 3)
console.log('\nAs duas letras primeiras letras são:', twoCharBeforeFirstPos)