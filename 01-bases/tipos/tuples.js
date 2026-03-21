(function () {
    // Tuple: Es un tipo de dato que permite almacenar una colección de elementos de diferentes tipos. 
    // A diferencia de los arrays, los tuples tienen una longitud fija y cada elemento puede tener un tipo diferente.
    var person = ['John', 30, true];
    person[0] = 'Jane'; // No hay error, ya que el primer elemento es de tipo string
    person[1] = 25; // No hay error, ya que el segundo elemento es de tipo number
    person[2] = false; // No hay error, ya que el tercer elemento es de tipo boolean
    console.log(person[0]); // John
    console.log(person[1]); // 30
    console.log(person[2]); // true
})();
export {};
