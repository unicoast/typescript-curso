(function () {
    var tennisPlayer = 'Novak';
    function returnName() {
        return tennisPlayer;
    }
    var activatePower = function () {
        return 'Activate Elasticity';
    };
    console.log(typeof activatePower);
    var tennisPlayerName = returnName();
    console.log(tennisPlayerName);
    console.log(activatePower());
})();
export {};
