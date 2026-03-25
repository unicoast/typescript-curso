(function () {
    var _a;
    var nole = {
        name: 'Novak Djokovic',
        age: 38,
        powers: ['elasticidad', 'resistencia', 'fuerza']
    };
    var roger = {
        name: 'Roger Federer',
        age: 44,
        powers: ['elegancia', 'precisión', 'fuerza'],
        getName: function () {
            return this.name;
        }
    };
    console.log((_a = nole.getName) === null || _a === void 0 ? void 0 : _a.call(nole));
})();
export {};
