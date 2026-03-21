(function () {
    // upper es un valor por defecto, si no se le pasa un valor, se asigna false
    var fullName = function (firstName, lastName, upper) {
        if (upper === void 0) { upper = false; }
        var fullName = "".concat(firstName, " ").concat(lastName || '----');
        return upper ? fullName.toUpperCase() : fullName;
    };
    var name = fullName('Novak', 'Djokovic', true);
    console.log({ name: name });
})();
export {};
