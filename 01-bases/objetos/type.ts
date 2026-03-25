(() => {

    // type: describe la forma y estructura de un valor (objeto, función, etc.),
    // define qué propiedades y tipos debe tener para ayudar a detectar errores en compilación.
    type Player = {
        name: string;
        age?: number;
        powers: string[];
        getName?: () => string;
    }

    let nole: Player = {
        name: 'Novak Djokovic',
        age: 38,
        powers: ['elasticidad', 'resistencia', 'fuerza']
    }

    let roger: Player = {
        name: 'Roger Federer',
        age: 44,
        powers: ['elegancia', 'precisión', 'fuerza'],
        getName() {
            return this.name
        }
    }

    console.log(nole.getName?.())

})()
