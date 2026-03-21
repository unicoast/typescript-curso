(() => {

    // Enum: Es un tipo de dato que permite definir un conjunto de constantes con nombres simbólicos.
    enum AudioLevel {
        min,
        medium,
        max
    }

    let currentAudio = AudioLevel.medium;
    console.log(currentAudio); // Output: 1
    console.log(AudioLevel[currentAudio]); // Output: "medium"
    console.log(AudioLevel);
})() 
