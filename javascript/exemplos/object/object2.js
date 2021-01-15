const user = {
    name: 'Qualquer',
    lastName: 'Outro'
}

// Recupera as chaves do objeto
console.log('Propriedade do objeto user:', Object.keys(user))

// Recupera os valores das chaves do objeto
console.log('\nvalores das propriedades do objeto user:', Object.values(user))

// Retorna um array de arrays contendo [ nome_prop, valor_prop ]
console.log('\nLista de propriedades e valores:', Object.entries(user))

// Mergear propriedades de objetos
Object.assign(user, {fullName: 'Qualquer outro'})

console.log('\nAdiciona a propriedade fullName no objeto user', user)
console.log('\nRetorna um novo objeto mergeando dois ou mais objetos', Object.assign({}, user, {age: 34})) // Cria um novo array antes de fazer as alterações no novo objeto

// Previne todas as alterações em um objeto
const newObj = { foo: 'bar' }
Object.freeze(newObj)

// Permite apenas a alteração de propriedades existentes em um objeto
const person = { name: 'Qualquer' }
Object.seal(person)

person.name = 'Usuario'
// delete person.name (Não consegue deletar nem criar novas propriedades)
// person.age = 31

console.log('\nVariavel person após as alterações:', person)