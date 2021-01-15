const myNumber = 12.4508

// Transforma número para string
const numberAsString = myNumber.toString();
console.log('Número convertido para string:', typeof numberAsString)

// Retorna número com um número de casas decimais
const fixedTwoDecimals = myNumber.toFixed(2)

// Transforma um string para float
console.log('\nNúmero convertido para float:',parseFloat(12.5000))

// Transforma uma string em int
console.log('\nString para número inteiro:', parseInt(12))