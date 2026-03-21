(function () {
    // Never: Tipo de retorno para funciones que no retornan nada, como por ejemplo, 
    // funciones que lanzan errores o que tienen bucles infinitos.
    var error = function (message) {
        if (false) {
            throw new Error(message);
        }
        return 'OK';
    };
    error('Error en la función!');
    console.log('Esto no se ejecutará');
})();
export {};
