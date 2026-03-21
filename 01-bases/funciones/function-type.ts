(() => {

    const addNumbers = (a: number, b: number): number => a + b;

    const greet = (name: string): string => `Hola ${name}!`;

    const saveTheWorld = (): string => `¡El mundo fué salvado!`;

    // let myFunction: (Function | number | string);
    let myFunction: () => string;

    // myFunction = 10;
    // console.log(myFunction);

    // Paso por referencia: se asigna la función sin ejecutarla
    // myFunction = addNumbers;
    // console.log(myFunction(1, 2));

    // myFunction = greet;
    // console.log(myFunction('Nicolás'));

    myFunction = saveTheWorld;
    console.log(myFunction());
})()
