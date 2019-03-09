// Create array of words
const sportsList = ['tennis','soccer','football','hockey','handball','cricket','baseball','basketball','volleyball','badminton'];
// TO count number of wins
let wins = 0;
// Maximum guesses for each word
const maxGuess = 20;
// Counting guesses
let guessCount = 0;
// Letters Matched
let letterMatch = 0;
// Underscores array
var underScore = [];
let choosenWord;
let isFinished = false;

// Create underscores based on length of the word
const printUnderscore = () => {
    if(choosenWord != undefined) {
        for(let i=0 ;i<choosenWord.length;i++){
            underScore.push('_');
        }
    // return underScore; 
    }
}

const init = _ => {
    // Choose words randomly
    let sportIndex = Math.floor(Math.random() * sportsList.length);
    isFinished = false;
    choosenWord = sportsList[sportIndex];
    underScore = [];
    guessCount = 0;
    letterMatch = 0;
    console.log(choosenWord);
    printUnderscore();
    updatePage();
}
// Get users guess
document.addEventListener('keypress',(event) => {
    let currentKey = event.keyCode;
    console.log(currentKey);
    let currentLetter = String.fromCharCode(currentKey);
    console.log(currentLetter);
    // increment the guess count
    guessCount++;
    // Check if guess is right
    let index = choosenWord.indexOf(currentLetter);
    if ( index > -1)
    {
        // If right,flip corresponding underscore
        if(underScore[index] === '_') {
            underScore.fill(currentLetter,index, index+1);
            letterMatch++;    
        }
        //underScore[index] = currentKey;
        //underScore.toString();
        console.log(underScore);
        for(let loop =index+1;loop<choosenWord.length;loop++){
            if(choosenWord.charAt(loop)===currentLetter){
                if(underScore[loop] === '_') {
                    underScore.fill(currentLetter,loop,loop+1);
                    letterMatch++;    
                }
            }
         }
         console.log(underScore);
         console.log(letterMatch);
         if(letterMatch===choosenWord.length){
             wins++;
             isFinished = true;
             //now restart/reset/init agian for finding next word
         }
         else if(guessCount === maxGuess) {
             //Oops you have reached max number of guess
             // try again
             // now restart/reset/init again for finding next word5
             isFinished = true;
         }
         console.log(wins);
         updatePage();

    }
})

function updatePage() {
    document.querySelector('#Wins').textContent = `Wins:${wins}`;
    document.querySelector('#MaskedWord').textContent = `${underScore.toString()}`;
    document.querySelector('#RemainingGuesses').textContent = `${maxGuess - guessCount}`;
    document.querySelector('#LettersGuessed').textContent = `${letterMatch}`;
    if(isFinished) {
        // Set the correct image.
        document.getElementById("gamePicture").src = `./assets/images/${choosenWord}.png`;
    }
    else {
        // Set the question mark image.
        document.getElementById("gamePicture").src = "./assets/images/questionmark.png";
    }
}

function resetPage() {
    if(isFinished) {
        init();
    }
}

init()
// If wrong,[]