(() => {
    
    // REST: Agrupa el resto de argumentos en un array -> ...restArgs: string[]
    const fullName = (firstName: string, ...restArgs: string[]): string => {
        // join une los elementos de un array en un string, separados por el string que se le pase como argumento
        return `${firstName} ${restArgs.join(' ')}`
    }

    const name = fullName('Novak', 'Djokovic', 'Nole', 'Serbian')
    console.log({ name })
})()
