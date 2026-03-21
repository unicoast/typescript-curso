
(() => {
    let grandSlam: number = 24;
    console.log('Grand Slam: ', grandSlam);
    
    const master1000: number = 9;
    
    if(grandSlam < master1000) {
        console.log('El tenista no es un gran campeón');
    } else {
        console.log('El tenista es un gran campeón');
    }
    
    grandSlam = Number('22');
    
    console.log({ grandSlam});
})();
