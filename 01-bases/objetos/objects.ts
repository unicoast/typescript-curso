(() => {

    // Definir el tipo de un objeto
    // No importa el orden de las propiedades, pero si el tipo de cada una de ellas
    // Usualmente se recomiendan poner las propiedades alfabéticamente
    let nole: {
        name: string,
        age?: number,
        powers: string[],
        // Si queremos definir un método dentro de un objeto, lo hacemos de la siguiente manera
        getName?: () => string
    } = {
        name: 'Novak Djokovic',
        age: 38,
        powers: ['elasticidad', 'resistencia', 'fuerza']
    }

    nole = {
        name: 'Rafael Nadal',
        age: 37,
        powers: ['resistencia', 'fuerza', 'agilidad'],
        getName(){
            return this.name
        }
    }

    console.log(nole.getName?.())

})()
