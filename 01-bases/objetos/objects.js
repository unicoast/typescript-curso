(function () {
    var _a;
    // Definir el tipo de un objeto
    // No importa el orden de las propiedades, pero si el tipo de cada una de ellas
    // Usualmente se recomiendan poner las propiedades alfabéticamente
    var nole = {
        name: 'Novak Djokovic',
        age: 38,
        powers: ['elasticidad', 'resistencia', 'fuerza']
    };
    nole = {
        name: 'Rafael Nadal',
        age: 37,
        powers: ['resistencia', 'fuerza', 'agilidad'],
        getName: function () {
            return this.name;
        }
    };
    console.log((_a = nole.getName) === null || _a === void 0 ? void 0 : _a.call(nole));
})();
export {};
