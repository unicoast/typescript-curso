(function () {
    // Enum: Es un tipo de dato que permite definir un conjunto de constantes con nombres simbólicos.
    var AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 0] = "min";
        AudioLevel[AudioLevel["medium"] = 1] = "medium";
        AudioLevel[AudioLevel["max"] = 2] = "max";
    })(AudioLevel || (AudioLevel = {}));
    var currentAudio = AudioLevel.medium;
    console.log(currentAudio); // Output: 1
    console.log(AudioLevel[currentAudio]); // Output: "medium"
    console.log(AudioLevel);
})();
export {};
