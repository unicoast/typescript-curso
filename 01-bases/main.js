"use strict";
(() => {
    let nole = {
        name: 'Novak Djokovic',
        age: 38,
        powers: ['elasticidad', 'resistencia', 'fuerza']
    };
    let roger = {
        name: 'Roger Federer',
        age: 44,
        powers: ['elegancia', 'precisión', 'fuerza'],
        getName() {
            return this.name;
        }
    };
})();
(() => {
    class Mutant {
        constructor() {
            this.age = 0;
            this.name = '';
            this.realName = '';
        }
        mutantPower(id) {
            return this.name + ' ' + this.realName;
        }
    }
})();
(() => {
    const client = {
        name: 'Nicolás',
        age: 25,
        address: {
            id: 125,
            zip: 'MZD 323',
            city: 'Miami'
        },
        getFullAddress(id) {
            return this.address.city;
        }
    };
    const client2 = {
        name: 'Novak',
        age: 38,
        address: {
            id: 130,
            zip: '10001',
            city: 'New York'
        },
        getFullAddress(id) {
            return this.address.city;
        }
    };
})();
(() => {
    let addNumbersFunction;
    addNumbersFunction = (a, b) => {
        return a + b;
    };
})();
//# sourceMappingURL=main.js.map