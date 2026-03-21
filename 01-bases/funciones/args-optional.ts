(() => {

    // ? -> Opcional
    const fullName = (firstName: string, lastName?: string): string => {
        return `${firstName} ${lastName || '----'}`;
    }
    
    const name: string = fullName('Roger');
    console.log({ name });
})()
