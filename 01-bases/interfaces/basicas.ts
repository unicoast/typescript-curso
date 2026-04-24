(() => {
    
    // interface: contrato que define qué propiedades y métodos debe tener un objeto
    // a diferencia de type, puede fusionarse con otra declaración del mismo nombre
    interface Player {
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
    
})()
