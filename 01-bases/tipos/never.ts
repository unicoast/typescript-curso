(() => {
    
    // Never: Tipo de retorno para funciones que no retornan nada, como por ejemplo, 
    // funciones que lanzan errores o que tienen bucles infinitos.
    const error = (message: string): (never|string) => {

        if( false ){
            throw new Error(message);
        }

        return 'OK'
    }

    error('Error en la función!')
    console.log('Esto no se ejecutará');
})()
