(() => {

    // Tiene argumentos requeridos, es decir, no pueden ser omitidos
    const fullName = (firstName: string, lastName: string): string => {
        return `${firstName} ${lastName}`;
    }
    
    const name: string = fullName('Roger', 'Federer');
    console.log({ name });
})()
