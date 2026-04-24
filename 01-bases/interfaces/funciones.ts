(() => {
    
    // Interface de función: define el tipo de una función con sus parámetros y retorno
    interface addTwoNumbers {
        (a: number, b: number): number;
    }
    
    let addNumbersFunction: addTwoNumbers;
    
    addNumbersFunction = (a: number, b: number) => {
        return a + b;
    }
    
})()
