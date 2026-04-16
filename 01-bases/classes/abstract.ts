(() => {

    // Las clases abstractas no pueden ser instanciadas, solo pueden ser heredadas
    // Sirven para definir una estructura base para otras clases, pero no se pueden crear objetos directamente de ellas
    abstract class Mutante {
        constructor(
            public name: string,
            public realName: string
        ) {}   
    }

    class Xmen extends Mutante {
        salvarMundo(){
            return 'Salvando al mundo...'
        }
    }
    class Villain extends Mutante {
        conquistarMundo(){
            return 'Conquistando el mundo...'
        }
    }

    const wolverine = new Xmen('Wolverine', 'Logan');
    const magneto = new Villain('Magneto', 'Erik Lehnsherr');

    // console.log(wolverine.salvarMundo());
    // console.log(magneto.conquistarMundo());

    // Podemos usar el tipo de la clase abstracta para definir variables o parámetros de funciones, 
    // pero no podemos crear objetos directamente de la clase abstracta
    const printName = (character: Mutante) => {
        console.log(character.realName);
    }
    // printName(wolverine);
    // printName(magneto);

})()
