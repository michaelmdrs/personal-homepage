
function load() {
    alert('Carregamento concluído')
}

function button() {
    document.getElementById('resultclick').innerHTML = 'Bem vindo ao site!'
    //alert('Obrigado, por clicar')
}

function redirect() {
    window.open('https://github.com/michaelmdrs')
    // window.location.href = 'https://github.com/michaelmdrs' abre o link na mesma página
}

function move(elemento) {
    //document.querySelector('.mouse').innerHTML = '<strong>Passe o mouse aqui e clique</strong>'
    elemento.innerHTML = 'Passe o mouse aqui e clique'
    
}

function moveOut(elemento) {
    //document.querySelector('.mouse').innerHTML = '<strong>Entra o texto</strong>'
    elemento.innerHTML = 'Entra o texto'
}

function moveUp(elemento) {
    //document.querySelector('.mouse').innerHTML = 'Clique'
    elemento.innerHTML = 'Clica'
}

function changeValue(elemento) {
    console.log(elemento.value)
}

/**
 * function moveOut(elemento) {
    document.querySelector('.mouse').innerHTML = '<strong>Entra o texto</strong>'
}

function moveUp(elemento) {
    document.querySelector('.mouse').innerHTML = 'Clique'
}
 * 
 */
 

/* Basico de função

function soma(n1, n2) {
    return n1 + n2
}

var validar = 0

function validaIdade(idade) {
    if (idade >= 18) {
        validar = console.log('Você é de MAIOR')
    } else {
        validar = console.log('Você é de MENOR')
    }
}

var idade = prompt('Digite sua idade: ')
validaIdade(idade)

// alert(soma(4, 11))

*/

/* Exemplos de date

var hoje = new Date()
alert(hoje.getDay())
alert(hoje.getHours())
alert(hoje.getTime())
alert(hoje.getMinutes())
*/

/* For

 * var count;
    for (count = 0; count <= 5; count++) {
    alert(count)
}
  
 */



/* While

var count = 0
while (count < 5) {
    console.log(count)
    count = count + 1
}

*/

/* Condição simples

var idade = prompt('Digite sua idade: ')
if (idade >= 18) {
    alert('Maior de idade')
}else {
    alert('Menor de idade')
}

*/


// Comandos básicos

/* Lista de dicionário

let frutas = [{nome: 'Melancia', cor: 'Verde'}, {nome: 'Banana', cor: 'Amarela'}]

console.log(frutas[1].cor)

*/

/* Dicionário

let frutas = {nome: 'Melancia', cor: 'Verde'}
console.log(frutas.nome)

*/


/* let compras = ['Banana', 'Leite', 'Amendoim', 'Queijo', 'Tapioca']
console.log(compras.join(' | ')) */

// compras.push('Pão')
// compras.pop()
// console.log(compras.reverse()) inverte a ordem do array
// console.log(compras.toString()) converte o array para string
// console.log(compras.join(' | ')) inserir caracteres entre os elementos do array