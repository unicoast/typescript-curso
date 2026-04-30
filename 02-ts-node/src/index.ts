import { Pokemon } from "./decorators/pokemon-class";

const charmander = new Pokemon('Charmander');

// Intentamos expandir el prototipo agregando una nueva propiedad "customName"
// Usamos "as any" para engañar a TypeScript en tiempo de compilación, de lo contrario nos marcaría error de tipo
// Sin embargo, en tiempo de ejecución (runtime), el decorador "blockPrototype" con su Object.seal() bloqueará esto
// Si tenemos el modo estricto activado (use strict), esto lanzará un TypeError: Cannot add property customName, object is not extensible
// (Pokemon.prototype as any).customName = 'Pikachu';

// charmander.savePokemonToDB(4);

// Intentamos modificar publicApi.
// A nivel de TypeScript no hay error porque la propiedad es "public", pero en tiempo de ejecución (runtime),
// el decorador @readOnly(true) la configuró internamente con "writable: false"
// Si el modo estricto está activo esto lanzará un error, de lo contrario simplemente ignorará el nuevo valor
charmander.publicApi = 'https://google.com';

console.log(charmander);

