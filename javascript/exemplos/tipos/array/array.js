const users = ['Néfi', 'Nara', 'Michael', 'Patrícia']

const gender = {
    man: Symbol('M'),
    woman: Symbol('F')
}

const persons = [
    {
        name: 'Néfi',
        age: 12,
        gender: gender.man
    },
    {
        name: 'Nara',
        age: 11,
        gender: gender.woman
    },
    {
        name: 'Michael',
        age: 34,
        gender: gender.man
    },
    {
        name: 'Patrícia',
        age: 33,
        gender: gender.woman
    }
]

// Retornar a quantidade de itens de um array
console.log('Items:', persons.length)

// Verifica se é array
console.log('A variável persons é um array:', Array.isArray(persons))

// Iterar os itens do array
persons.forEach(persons => {
    console.log(`Nome: ${persons.name}`)
})

/**
 * persons.forEach((persons, index, arr) => {
    console.log(`Nome: ${persons.name} index: ${index}`, arr)
})
 */

// Filtrar array
const mens = persons.filter(persons => persons.gender === gender.man)
console.log('\nListas de usuários do sexo masculino:', mens)

const woman = persons.filter(persons => persons.gender === gender.woman)
console.log('\nListas de usuários do sexo feminino:', woman)

// Retornar um novo
const personsWithCourse = persons.map(persons => {
    persons.course = 'Introdução a Javascript'
    return persons
})

console.log('\nPessoas com a adição de course:', personsWithCourse) 

// Transformar um array em outro tipo
const totalAge = persons.reduce((age, persons) => {
    age += persons.age 
    return age
}, 0)

console.log('\nSoma de idade das pessoas', totalAge)

// juntando operações somando a idade das pessoas com numero par
const totalEvenAges = persons
                        .filter(persons => persons.age % 2 === 0)
                        .reduce((age, persons) => {
                            age += persons.age
                            return age
                        }, 0)

console.log('\nSoma de idades das pessoas que possuem idade par:', totalEvenAges)