
(() => {
    const player:string = 'Djokovic';
    const player2:string = "Nadal";
    const player3:string = `Federer`;

    console.log(`El mejor tenista es: ${player}`);
    console.log(player.toUpperCase());
    
    console.log(player[10]?.toUpperCase() || 'No existe esa letra');
    
    console.log(player2);
    console.log(player3);
})();
