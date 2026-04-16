"use strict";
(() => {
    class Mutante {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
        }
    }
    class Xmen extends Mutante {
        salvarMundo() {
            return 'Salvando al mundo...';
        }
    }
    class Villain extends Mutante {
        conquistarMundo() {
            return 'Conquistando el mundo...';
        }
    }
    const wolverine = new Xmen('Wolverine', 'Logan');
    const magneto = new Villain('Magneto', 'Erik Lehnsherr');
    const printName = (character) => {
        console.log(character.realName);
    };
})();
(() => {
    class Avenger {
        static getAvgAge() {
            return this.avgAge;
        }
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
        bio() {
            return `${this.name} (${this.team})`;
        }
    }
    Avenger.avgAge = 35;
    const antman = new Avenger('Ant-Man', 'Capitan', 'Scott Lang');
})();
(() => {
    class SuperHero {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
        }
        getFullName() {
            return `${this.name} ${this.realName}`;
        }
    }
    class Xmen extends SuperHero {
        constructor(name, realName, isMutant) {
            super(name, realName);
            this.isMutant = isMutant;
        }
        get fullName() {
            return `${this.name} - ${this.realName}`;
        }
        set fullName(name) {
            if (name.length < 3) {
                throw new Error('El nombre debe ser mayor a 3 caracteres');
            }
            this.name = name;
        }
        getFullNameFromXmen() {
            console.log(super.getFullName());
        }
    }
    const wolverine = new Xmen('Wolverine', 'Logan', true);
    wolverine.fullName = 'Nicolás';
})();
(() => {
    class ConfigGlobal {
        constructor(apiUrl, modo) {
            this.apiUrl = apiUrl;
            this.modo = modo;
        }
        static getInstance(apiUrl, modo) {
            if (!ConfigGlobal.instance) {
                ConfigGlobal.instance = new ConfigGlobal(apiUrl, modo);
            }
            return ConfigGlobal.instance;
        }
        changeMode(nuevoModo) {
            this.modo = nuevoModo;
        }
    }
    const config1 = ConfigGlobal.getInstance('https://api.miapp.com', 'dev');
    config1.changeMode('prod');
    const config2 = ConfigGlobal.getInstance('https://otra-api.com', 'dev');
    console.log(config1);
    console.log(config2);
    console.log(config1 === config2);
})();
//# sourceMappingURL=main.js.map