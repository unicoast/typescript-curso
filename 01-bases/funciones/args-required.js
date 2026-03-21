(function () {
    // Tiene argumentos requeridos, es decir, no pueden ser omitidos
    var fullName = function (firstName, lastName) {
        return "".concat(firstName, " ").concat(lastName);
    };
    var name = fullName('Roger', 'Federer');
    console.log({ name: name });
})();
export {};
