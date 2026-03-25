(function () {
    // Union Types: Permite que una variable pueda contener más de un tipo de dato
    // lo que es útil para manejar situaciones donde el valor puede ser de diferentes tipos.
    var myCustomPlayer = 'Novak';
    console.log(typeof myCustomPlayer);
    myCustomPlayer = 38;
    console.log(typeof myCustomPlayer);
    myCustomPlayer = {
        name: 'Novak Djokovic',
        age: 38,
        powers: [1, 2, 3]
    };
    console.log(typeof myCustomPlayer);
    console.log(myCustomPlayer);
})();
export {};
