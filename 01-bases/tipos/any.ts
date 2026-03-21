
(() => {
    let player: any = 123;
    let exist;
    let power;
    
    player = 'Djokovic';
    // console.log(player.charAt(0));
    // tipo de casteo, forzar a que player se comporte como string
    console.log((player as string).charAt(0));
    
    player = 24.123456789;
    // otro tipo de casteo, forzar a que player se comporte como number
    console.log(<number> player.toFixed(2));
    
    console.log(exist);
    console.log(power);
})();
