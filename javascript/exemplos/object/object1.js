let user = {
    name: 'Qualquer',
    idade: 25
}

// Alterando a propriedade de um objeto
//console.log(user)

user.name = 'Outro'
//console.log(user)
user['name'] = 'Qualquer outro'

//console.log(user)
const prop = 'Name'
user[prop] = 'Qualquer'

function getProp(prop) {
    return user[prop]
}

// Criando uma propriedade
user.lastName = 'Pode ser'
console.log(user)

//Deletando uma propriedade
delete user.name