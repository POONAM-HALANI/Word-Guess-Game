

var words = ["bottle", "toys"]

var randomWord = "";

var lettersOfWord = []

var blanks = 0;

var blanksAndCorrect = [];

var wrongGuess = [];

var wins = 0;

var losses = 0;

var guessesRemaining = 9;

function Game() {

    randomWord = words[Math.floor(Math.random() * words.length)];

    lettersOfWord = randomWord.split("");

    blanks = lettersOfWord.length;

    for (var i = 0; i < blanks; i++) {

        blanksAndCorrect.push("_");

    }

    document.getElementById("currentword").innerHTML = "  " + blanksAndCorrect.join("  ");

    console.log(randomWord);

    console.log(lettersOfWord)

    console.log(blanks)

    console.log(blanksAndCorrect)

}

var b = document.getElementById("bottle");

var t = document.getElementById("toys");


function bottle() {

    //Arthur Audio & Image

    //---------------------------

    if (randomWord === words[0]) {

        t.pause();
        b.play();

        document.getElementById("image").src = "./assets/images/bottle.jpeg";

    }
    else if (randomWord === words[1]) {

        
        b.pause();
        t.play();

        document.getElementById("image").src = "./assets/images/toys.jpeg";

    }
};

function reset() {

    guessesRemaining = 9;

    wrongGuess = [];

    blanksAndCorrect = [];

    Game()

};


function checkLetters(letter) {

    var letterInWord = false;

    for (var i = 0; i < blanks; i++) {

        if (randomWord[i] == letter) {

            letterInWord = true;

        }

    }

    if (letterInWord) {

        for (var i = 0; i < blanks; i++) {

            if (randomWord[i] == letter) {

                blanksAndCorrect[i] = letter;

            }

        }

    }

    else {

        wrongGuess.push(letter);

        guessesRemaining--;

    }

    console.log(blanksAndCorrect);

};


function complete() {

    console.log("wins:" + wins + "| losses:" + losses + "| guesses left:" + guessesRemaining)

    if (lettersOfWord.toString() == blanksAndCorrect.toString()) {

        wins++;

        aud()

        reset()

        document.getElementById("winstracker").innerHTML = " " + wins;

    } else if (guessesRemaining === 0) {

        losses++;

        reset()

        document.getElementById("losstracker").innerHTML = " " + losses;

    }

    document.getElementById("currentword").innerHTML = "  " + blanksAndCorrect.join(" ");

    document.getElementById("guessesremaining").innerHTML = " " + guessesRemaining;

};


Game()


document.onkeyup = function (event) {

    var guesses = String.fromCharCode(event.keyCode).toLowerCase();
   
    checkLetters(guesses);
   
    complete();

    console.log(guesses);

    document.getElementById("playerguesses").innerHTML = "  " + wrongGuess.join(" ");

};