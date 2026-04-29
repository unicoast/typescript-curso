
// 'any' permite cualquier valor, pero perdemos el autocompletado y la validación
export const printObject = (argument: any) => {
    console.log(argument);
};

// <T> captura el tipo del argumento para que el valor de retorno sea exactamente del mismo tipo
export function genericFunction<T>(argument: T): T {
    return argument;
}

// Equivalente a la función anterior pero usando sintaxis de función de flecha
export const genericFunctionArrow = <T>(argument: T): T => argument;
