// Un decorador es simplemente una función que se ejecuta en el momento de transpilación/definición
// Un decorador de clase recibe el constructor de la clase como único argumento
function printToConsole(constructor: Function) {
    console.log(constructor);
}

// Un Decorator Factory (Fábrica de decoradores) es una función que devuelve la función decoradora que TypeScript va a ejecutar.
// Al ser una fábrica, nos permite enviarle argumentos personalizados al decorador al momento de usarlo (ej: @miDecorador(true)).
const printoToConsoleConditional = (print: boolean = false): Function => {
    if (print) {
        return printToConsole; // Retorna la función decorador si print es true
    } else {
        return () => { }; // Retorna una función vacía si print es false
    }
}

// Decorador para evitar que la clase o su prototipo puedan ser modificados o expandidos
// Object.seal() previene que se le agreguen nuevas propiedades o métodos al constructor y a su prototipo
// Esto ayuda a asegurar que la estructura de la clase se mantenga exactamente como fue definida
const blockPrototype = function (constructor: Function) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}

// Un decorador de método recibe 3 argumentos: target, nombre de la propiedad y su descriptor
// Nos permite interceptar y modificar el comportamiento del método (ej. añadir validaciones)
function CheckValidPokemonId() {
    return function (target: any, propertyName: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value; // Guardamos la referencia al método original

        // Sobreescribimos el método con nuestra lógica de validación
        descriptor.value = (id: number) => {
            if (id < 1 || id > 800) {
                return console.error('Pokemon no valido');
            } else {
                return originalMethod(id); // Ejecutamos el método original si pasa la validación
            }
        }
    }
}

// Decorador de Propiedad (Property Decorator)
// Recibe 2 argumentos principales: target (el prototipo de la clase) y el nombre de la propiedad
// Al retornar un PropertyDescriptor, podemos redefinir completamente cómo se lee o escribe esa propiedad
function readOnly(isWritable: boolean = true): Function {
    return function (target: any, propertyKey: string) {
        
        // Creamos un nuevo descriptor que sobreescribirá el comportamiento por defecto de la propiedad
        const descriptor: PropertyDescriptor = {
            // get() se ejecuta cada vez que intentamos LEER el valor de la propiedad
            get() {
                console.log(this);
                return 'Nicolás';
            },
            // set() se ejecuta cada vez que intentamos ASIGNAR un nuevo valor a la propiedad
            set(this, value) {
                // console.log(this, value);
                
                // Redefinimos la propiedad en la instancia actual usando Object.defineProperty
                Object.defineProperty(this, propertyKey, {
                    value: value,
                    writable: !isWritable, // Si enviamos true, writable es false -> Bloquea reasignaciones
                    enumerable: false      // false oculta la propiedad en iteraciones (ej. Object.keys)
                })
            }
        }
        return descriptor;
    }
}


// Se usa el símbolo @ seguido del nombre del decorador para aplicarlo a la clase
// En este caso llamamos al factory decorator, el cual retorna el decorador real basado en el argumento
@blockPrototype
@printoToConsoleConditional(false)
export class Pokemon {

    @readOnly(true)
    public publicApi: string = 'https://pokeapi.co';
    
    constructor(
        public name: string
    ) { }

    @CheckValidPokemonId()
    savePokemonToDB(id: number) {
        console.log(`Pokemon guardado en DB: ${id}`);
    }
}
