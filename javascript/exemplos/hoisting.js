function fn() {
    console.log(text)

    var text = 'Exemplo'

    console.log(text)
}

fn()

/**
 * Aqui acontece o hoisting temos o primeiro console log onde é passado
 * um valor text onde a váriavel é declarada depois em seguida, chamamos
 * novamente um console.log com o mesmo parametro. Então o primeiro console.log não retornará erro, pois o valor vai ser descrito como undefined já o segundo console, imprimirá o valor correto.
 * 
 */