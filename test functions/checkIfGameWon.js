const checkIfGameWon = function (word, inputs) {

    let lettersNotYetGuessed = word.filter(function (letter) {
        //returns array of letters that have not yet been guessed correctly
        return !inputs.includes(letter);
    });
    return (lettersNotYetGuessed.length === 0) ? true : false;
};

module.exports = checkIfGameWon;