(function () {
    // ? -> Opcional
    var fullName = function (firstName, lastName) {
        return "".concat(firstName, " ").concat(lastName || '----');
    };
    var name = fullName('Roger');
    console.log({ name: name });
})();
export {};
