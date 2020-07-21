const decrementTries = require("./test functions/decrementTries.js");
const updateGuessedLettersArray = require("./test functions/updateGuessedLettersArray")
const checkIfGameOver = require("./test functions/checkIfGameOver")
const updateWrongLetters = require("./test functions/updateWrongLetters")
const checkIfGameWon = require("./test functions/checkIfGameWon.js")


describe("Test if tries decrement", () => {

    test("Decrements tries by 1", function () {
        let remainingTries = 5;
        expect(decrementTries(remainingTries)).toEqual(remainingTries - 1);
    });
})

describe("Test function to add guessed letters to array", () => {

    test("Adds guessed letter to array", function () {

        letter = "t"
        testArray = ["T", "e", "s"]
        expected = ["T", "e", "s", letter]
        expect(updateGuessedLettersArray(letter, testArray)).toEqual(expected);
    });

    test("Accepts only single characters", function () {
        letter = "tt"
        testArray = ["T", "e", "s"]
        expect(updateGuessedLettersArray(letter, testArray)).not.toHaveLength(4);
    });

    test("Accepts only a-z characters", function () {
        letter = "@"
        testArray = ["T", "e", "s"]
        expect(updateGuessedLettersArray(letter, testArray)).not.toHaveLength(4);
    });
})

describe("Test function that checks if game is over", () => {

    test("Returns false if remainingTries >= 0", function () {
        remainingTries = 6;
        expect(checkIfGameOver(remainingTries)).not.toBe(true);
    });

    test("Returns true if remainingTries <= 0", function () {
        remainingTries = 0;
        expect(checkIfGameOver(remainingTries)).toBe(true);
    });

})

describe("Test function that updates array with incorrect guesses", () => {

    test("check if function filters correct guesses from return", function () {
        word = ["v", "i", "s"];
        expect(updateWrongLetters(word, ["b", "a", "v"])).toEqual(["b", "a"]);
    });

    test("check if function returns empty array if all guesses are correct", function () {
        word = ["v", "i", "s"];
        expect(updateWrongLetters(word, ["v", "i", "s"])).toEqual([]);
    });
})

describe("Test function that checks whether game has been won", () => {

    test("check if function returns true if inputs match word", function () {
        word = ["v", "i", "s"];
        expect(checkIfGameWon(word, ["v", "i", "s"])).toEqual(true);
    });

    test("check if function returns false if inputs don't match word", function () {
        word = ["v", "i", "s"];
        expect(checkIfGameWon(word, ["b", "a", "k"])).toEqual(false);
    });

})

// functionaliteit: selecteren van het random woord
test(`pickRandomWord should return a random word from the wordList as an array`, () => {
    const pickRandomWord = function (list) {
        let index = Math.floor(Math.random() * list.length);
        let randomPickedWord = (list[index].split(""));
        return randomPickedWord;
    }

    expect(pickRandomWord(wordList)).toEqual([`v`, `i`, `s`])
});

//functionaliteit: checken of een letter voorkomt in het woord
describe(`updateAllUniqueInputtedLetters should update array with all the letters that are once inputted
by the user`, () => {
    let allUniqueInputtedLetters = [`i`, `v`];
    const updateAllUniqueInputtedLetters = function (randomPickedWord, input) {
        if (!input.match(/^[a-zA-Z]+$/)) { return allUniqueInputtedLetters; }
        if (allUniqueInputtedLetters.includes(input) || input === "") {
            return allUniqueInputtedLetters;
        }

        if (!randomPickedWord.includes(input) && (!allUniqueInputtedLetters.includes(input))) {
            allUniqueInputtedLetters.push(input);

        }
        if (randomPickedWord.includes(input) && (!allUniqueInputtedLetters.includes(input))) {
            allUniqueInputtedLetters.push(input);

        };
        return allUniqueInputtedLetters;
    }
    test("updateAllUniqueInputtedLetters", () => {
        expect(updateAllUniqueInputtedLetters([`g`, `e`, `e`, `u`, `w`], `t`)).toEqual([`i`, `v`, `t`]);
    });

    test("giving a % as input", () => {
        expect(updateAllUniqueInputtedLetters([`g`, `e`, `e`, `u`, `w`], `%`)).toEqual([`i`, `v`, `t`]);
    })

    test("giving a number as input", () => {
        expect(updateAllUniqueInputtedLetters([`g`, `e`, `e`, `u`, `w`], `9`)).toEqual([`i`, `v`, `t`]);
    })
});

// functionaliteit: updaten van de goed geraden letters
describe(`updateCorrectGuessedLetters should update the letters that are already guessed correctly by the user
with the array of unique inputs`, () => {
    const updateCorrectGuessedLetters = (randomPickedWord, uniqueInputletters) => {
        let correctGuessedLetters = randomPickedWord.map(function (letterFromPickedWord) {
            if (uniqueInputletters.includes(letterFromPickedWord)) {
                return letterFromPickedWord;
            } else {
                return "_";
            }
        })

        return correctGuessedLetters;
    }
    test(`vis as random word and vesab as uniqueinputted letters`, () => {
        expect(updateCorrectGuessedLetters([`v`, `i`, `s`], [`v`, `e`, `s`, `a`, `b`])).toEqual([`v`, `_`, `s`])
    })

    test(`geeuw as random word and ab as uniqueinputted letters`, () => {
        expect(updateCorrectGuessedLetters([`g`, `e`, `e`, `u`, `w`], [`a`, `b`])).toEqual([`_`, `_`, `_`, `_`, `_`])
    })

    test(`developer as random word and epw as uniqueinputted letters`, () => {
        expect(updateCorrectGuessedLetters([`d`, `e`, `v`, `e`, `l`, `o`, `p`, `e`, `r`], [`e`, `p`, `w`])).toEqual([`_`, `e`, `_`, `e`, `_`, `_`, `p`, `e`, `_`])
    })

    test(`snoer as random word and xvbn as uniqueinputted letters`, () => {
        expect(updateCorrectGuessedLetters([`s`, `n`, `o`, `e`, `r`], [`x`, `v`, `b`, `n`])).toEqual([`_`, `n`, `_`, `_`, `_`])
    })

});

