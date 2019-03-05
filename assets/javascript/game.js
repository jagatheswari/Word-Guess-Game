// Create array of words
const sportsList = ['tennis','soccer','football','hockey','handball','cricket','baseball','basketball','volleyball','badminton']
// TO count number of wins
let wins = 0;
// Maximum guesses for each word
const maxGuess = 20;
// Counting guesses
let guessCount = 0;
// Letters Matched
let letterMatch = 0;
// Choose words randomly
let sportIndex = Math.floor(Math.random() * sportsList.length);
let choosenWord = sportsList[sportIndex];
console.log(choosenWord);
var underScore = [];
// Create underscores based on length of the word
let printUnderscore = () => {
    for(let i=0 ;i<choosenWord.length;i++){
        underScore.push('_');
    }
    return underScore; 
}
console.log(printUnderscore());
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
            underScore.fill(currentKey,index, index+1);
            letterMatch++;    
        }
        //underScore[index] = currentKey;
        //underScore.toString();
        console.log(underScore);
        for(let loop =index+1;loop<choosenWord.length;loop++){
            if(choosenWord.charAt(loop)===currentLetter){
                if(underScore[loop] === '_') {
                    underScore.fill(currentKey,loop,loop+1);
                    letterMatch++;    
                }
            }
         }
         console.log(underScore);
         console.log(letterMatch);
         if(letterMatch===choosenWord.length){
             wins++;
             //now restart/reset/init agian for finding next word
         }
         else if(guessCount === maxGuess) {
             //Oops you have reached max number of guess
             // try again
             // now restart/reset/init again for finding next word
         }
         console.log(wins);
    }
})
// If wrong,[]