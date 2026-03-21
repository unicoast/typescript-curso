(function () {
    var addNumbers = function (a, b) { return a + b; };
    var greet = function (name) { return "Hola ".concat(name, "!"); };
    var saveTheWorld = function () { return "\u00A1El mundo fu\u00E9 salvado!"; };
    // let myFunction: (Function | number | string);
    var myFunction;
    // myFunction = 10;
    // console.log(myFunction);
    // Paso por referencia: se asigna la función sin ejecutarla
    // myFunction = addNumbers;
    // console.log(myFunction(1, 2));
    // myFunction = greet;
    // console.log(myFunction('Nicolás'));
    myFunction = saveTheWorld;
    console.log(myFunction());
})();
export {};
