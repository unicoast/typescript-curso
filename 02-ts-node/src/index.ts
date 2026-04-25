import { Player } from './classes/Player';
// import { Player as SuperPlayer } from './classes/Player';
// import * as PlayerClasses from './classes/Player';
import powers from './data/powers';

// const player = new SuperPlayer('Nicolás', 1, 25);
const player = new Player('Nicolás', 1, 25);
    
console.log(player);
console.log('Poderes: ', powers);
console.log(`Poder de ${player.name}: ${player.power}`);

// console.log('Poder de ' + player.name + ': ', player.power);

// console.log('Powers: ', powers);
