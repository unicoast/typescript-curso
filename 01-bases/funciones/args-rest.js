(function () {
    // REST: Agrupa el resto de argumentos en un array -> ...restArgs: string[]
    var fullName = function (firstName) {
        var restArgs = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            restArgs[_i - 1] = arguments[_i];
        }
        // join une los elementos de un array en un string, separados por el string que se le pase como argumento
        return "".concat(firstName, " ").concat(restArgs.join(' '));
    };
    var name = fullName('Novak', 'Djokovic', 'Nole', 'Serbian');
    console.log({ name: name });
})();
export {};
