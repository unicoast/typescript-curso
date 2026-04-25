
// namespace: agrupa funciones relacionadas bajo un mismo nombre
// export: hace que esas funciones puedan usarse fuera del namespace
namespace Validations {
    
    export const validateText = (text: string): boolean => {    
        return (text.length > 3) ? true : false;
    }
    
    export const validateDate = (myDate: Date): boolean => {
        return (isNaN(myDate.valueOf())) ? false : true;
    }
}

console.log(Validations.validateText('Hola')); // true
console.log(Validations.validateText('Ho')); // false
console.log(Validations.validateDate(new Date())); // true
console.log(Validations.validateDate(new Date('invalid date'))); // false
