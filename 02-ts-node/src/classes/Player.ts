import powers from '../data/powers';

// export para que pueda ser importada en otros archivos
export class Player {
    constructor(
        public name: string,
        public powerId: number,
        public age: number
    ) {}
    
    get power(): string {
        // powers.find() puede devolver undefined si no encuentra coincidencia
        // ? devuelve undefined en vez de lanzar error si no existe el objeto
        // ! le dice a TypeScript "confía en mí, esto no es undefined", puede lanzar error en tiempo de ejecución si el valor es realmente undefined
        // || 'No encontrado' usa un valor por defecto si lo anterior devuelve undefined
        return powers.find(power => power.id === this.powerId)?.description || 'No encontrado';
    }
}
