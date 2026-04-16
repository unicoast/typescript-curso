(() => {
    
    class SuperHero {
        constructor(
            public name: string,
            public realName: string
        ) {
            // console.log('Constructor SuperHero llamado')
        }
        
        // protected = solo se puede acceder desde la clase y sus hijos (extends)
        protected getFullName() {
            return `${this.name} ${this.realName}`
        }
    }
    
    // extends = HERENCIA: Xmen recibe name/realName de SuperHero
    class Xmen extends SuperHero {
        constructor(
            name: string,
            realName: string,
            public isMutant: boolean
        ) {
            // super() = OBLIGATORIO: llama constructor PADRE
            // Pasa name/realName al constructor de SuperHero
            super(name, realName)
            // console.log('Constructor Xmen llamado')
        }

        get fullName () {
            return `${this.name} - ${this.realName}`
        }

        set fullName (name: string) {
            if (name.length < 3) {
                throw new Error('El nombre debe ser mayor a 3 caracteres')
            }
            this.name = name;
        }

        getFullNameFromXmen() {
            console.log(super.getFullName())
        }
    }
    
    const wolverine = new Xmen('Wolverine', 'Logan', true);
    // los getters se llaman como propiedades, no como funciones ()
    // console.log(wolverine.fullName);

    wolverine.fullName = 'Nicolás';
    // console.log(wolverine.fullName);
    // wolverine.getFullNameFromXmen();
    
})()
