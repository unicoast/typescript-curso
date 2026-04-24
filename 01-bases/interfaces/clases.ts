(() => {
    
    // Interface que define las propiedades y métodos que debe tener un mutante
    interface Xmen {
        name: string;
        realName: string;
        mutantPower(id: number): string;
    }
    
    // Interface que define una propiedad extra para un humano
    interface Human {
        age: number;
    }
    
    // La clase implementa ambas interfaces, así que debe cumplir con sus propiedades y métodos
    class Mutant implements Xmen, Human {
        public age: number = 0;
        public name: string = '';
        public realName: string = '';
        
        mutantPower(id: number): string {
            return this.name + ' ' + this.realName
        }
    }
    
})()
