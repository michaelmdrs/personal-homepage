var test = 'Example'

(() => {
    console.log(`Valor dentro da função "${test}"`)

    if (true) {
        var test = 'Example'
        console.log(`Valor dentro do if "${test}" `)
    }

    console.log(`valor após a execução do if "${test}" `)
})();