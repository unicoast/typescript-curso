(() => {
    
    class Avenger {
        // Propiedades comentadas: ejemplo de declaración explícita
        // private name: string;
        // private team: string;
        // public realName?: string | undefined;
        
        // Propiedad ESTÁTICA: compartida por TODAS las instancias de la clase
        // Se puede acceder sin crear una instancia de la clase, solo llamando a la clase Avenger
        static avgAge: number = 35;
        static getAvgAge() {
            return this.avgAge;
        }
        
        // CONSTRUCTOR: inicializa las propiedades al crear el objeto
        constructor(
            private name: string,      // Privada: solo accesible dentro de la clase
            private team: string,      // Privada: solo accesible dentro de la clase  
            public realName?: string   // Pública y OPCIONAL (?)
        ) {}
        
        public bio() {
            return `${this.name} (${this.team})`
        }
    }
    
    // Crea instancia de Avenger con los 3 parámetros
    const antman: Avenger = new Avenger('Ant-Man', 'Capitan', 'Scott Lang');
    
    // console.log(antman);
    
    // console.log(antman.bio())
})();
