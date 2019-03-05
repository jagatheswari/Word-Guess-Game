// Create array of words
const sportsList = ['tennis','soccer','football','hockey','handball','cricket','baseball','basketball','volleyball','badminton']
// Choose words randomly
let sportIndex = Math.floor(Math.random() * sportsList.length);
let choosenWord = sportsList[sportIndex];
console.log(choosenWord);
let underScore = [];
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
    let index = choosenWord.indexOf(currentLetter);
    if ( index > -1)
    {
        underScore.fill(currentKey,index, index+1);
        //underScore[index] = currentKey;
        underScore.toString();
        console.log(underScore);
    }
})
// Check if guess is right 
// If right,flip corresponding underscore
// If wrong,[]