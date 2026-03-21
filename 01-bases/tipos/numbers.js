(function () {
    var grandSlam = 24;
    console.log('Grand Slam: ', grandSlam);
    var master1000 = 9;
    if (grandSlam < master1000) {
        console.log('El tenista no es un gran campeón');
    }
    else {
        console.log('El tenista es un gran campeón');
    }
    grandSlam = Number('22');
    console.log({ grandSlam: grandSlam });
})();
export {};
