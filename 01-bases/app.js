// Functión anónima autoejecutable
// Técnica para evitar la contaminación del espacio global de variables y funciones
(function () {
    // Typescript infiere el tipo de dato a partir del valor asignado
    // Es recomendable declarar el tipo de dato explícitamente para evitar errores
    // Evitar el uso de 'any' ya que pierde las ventajas de TypeScript
    var a = 10;
    var b = 10;
    // Es importante especificar el tipo de dato para indicar el tipo de dato que recibe la función y el tipo de dato que devuelve
    function sayHello(msg) {
        console.log(msg);
        msg.toUpperCase(); // TypeScript infiere que msg es de tipo string y permite usar métodos de string
    }
    sayHello('Hola Mundo');
})();
export {};
