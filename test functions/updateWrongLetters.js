const updateWrongLetters = function (word, inputs) {
    let wrongLettersArray = inputs.filter(function (letter) {

        return !word.includes(letter);
    });
    return wrongLettersArray;
}

module.exports = updateWrongLetters;