import axios from 'axios';
import { Pokemon } from '../interfaces';

// El genérico Promise<Pokemon> indica que al resolver, obtendremos datos con la estructura de Pokemon
export const getPokemon = async (pokemonId: number): Promise<Pokemon> => {
    
    // La interfaz sirve para decirle a TypeScript cómo es el tipo de dato que esperamos, no necesariamente ese objeto va tener esas propiedades
    // Usamos el genérico <Pokemon> para tipar la respuesta de Axios y tener autocompletado en tiempo de compilación
    const { data } = await axios.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
    // console.log(data);
    
    return data;
}
