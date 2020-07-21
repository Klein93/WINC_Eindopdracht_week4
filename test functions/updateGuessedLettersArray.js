const updateGuessedLettersArray = (guessedLetter, guessedLettersArray) => {
    (guessedLetter.length === 1 && /[a-zA-Z]/.test(guessedLetter)) ? guessedLettersArray.push(guessedLetter) : null;
    return guessedLettersArray;
}

module.exports = updateGuessedLettersArray;