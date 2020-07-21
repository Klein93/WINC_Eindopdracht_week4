const letters = function (word, inputs) {
    let wrongLetters = inputs.filter(function (letter) {
        // If the letter is in the word return.... false/true (we want to remove that then)
        return !word.includes(letter);
    });
    document.querySelector(".guessed_letters").innerHTML = wrongLetters.join(" ");
    return 5;
};

module.exports = letters;