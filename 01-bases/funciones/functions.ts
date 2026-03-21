(() => {

    const tennisPlayer: string = 'Novak';

    function returnName(): string {
        return tennisPlayer;
    }

    const activatePower = (): string => {
        return 'Activate Elasticity';
    }

    console.log(typeof activatePower);

    const tennisPlayerName = returnName();
    console.log(tennisPlayerName);
    console.log(activatePower());
})()
