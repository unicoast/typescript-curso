(() => {
    
    // upper es un valor por defecto, si no se le pasa un valor, se asigna false
    const fullName = (firstName: string, lastName?: string, upper: boolean = false): string => {
        const fullName = `${firstName} ${lastName || '----'}`;
        return upper ? fullName.toUpperCase() : fullName;
    }
    
    const name: string = fullName('Novak', 'Djokovic', true);
    console.log({ name });
})()
