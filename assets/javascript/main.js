//determine what variables we need
var winScore = 0;
var lossScore = 0;
var tieScore = 0;
var roundLeft = 9;
var computerOptions = ["r", "p", "s"];


//create functions that display onto DOM
//update winning score
function updateWS() {
    document.querySelector("#win-text").innerHTML = winScore;
};

//update lossing score
function updateLS() {
    document.querySelector("#losses-text").innerHTML = lossScore;
};

//update tie score
function updateTS() {
    document.querySelector("#tie-text").innerHTML = tieScore;
};

//update round left
function updateRL() {
    document.querySelector("#roundLeft-text").innerHTML = roundLeft;
};

 //display your guess on DOM
function updateYG() {
    document.querySelector("#yourGuess-text").innerHTML = event.key;
};



//Event is when you pressed on a key 'r, p, s' then computer randomly pick a key
document.onkeyup = function(event) {
    //if rounds left reaches zero then determine who wins and end the game
    if (roundLeft == 0) {
        return;
    }
    //The event is when a key is pressed, make it lowercase
    var keyPressed = event.key.toLowerCase();


    //if the key is equal to any of the options
    if (keyPressed === "r" || keyPressed === "p" || keyPressed === "s") {

        //minus 1 from the current rounds
        //if roundLeft is equal to 0 then determain who wins
        roundLeft--;
        updateRL();

        //display your guess on DOMS
        updateYG();

        //then computer pick randomly and display their pick on DOM
        var computerGuess = computerOptions[Math.floor(Math.random()*computerOptions.length)];
        //display computer guess on DOM
        function updateCG() {
            document.querySelector("#computerGuess-text").innerHTML = computerGuess;
        };
        updateCG();
        
        //if user win then winning score increase by 1, if computer wins then losing score increase by 1
        if (
            keyPressed === "r" && computerGuess === "s" ||
            keyPressed === "s" && computerGuess === "p" ||
            keyPressed === "p" && computerGuess === "r" ) {

            winScore++;
            updateWS();
        }
        else if( 
            keyPressed === "r" && computerGuess === "r" ||
            keyPressed === "s" && computerGuess === "s" ||
            keyPressed === "p" && computerGuess === "p" ) {

            tieScore++;
            updateTS();
        }
        else {
            lossScore++;
            updateLS();
        }
    }

    //if any other letters is keyed, alert that they have to press 'r', 'p', or 's'
    else {
        alert("Your options are 'r', 'p', or 's'.")
    };

    //if rounds left reaches zero then determine who wins and end the game
    if (roundLeft === 0) {
        document.querySelector("#end").innerHTML = "GOOD GAME :)";
        //if your score is higer than computer's score then display you win. Vise versa
        if (lossScore > winScore) {
            document.querySelector("#result").innerHTML = "YOU LOSE!!!";
        }
        else if(winScore === lossScore) {
            document.querySelector("#result").innerHTML = "It's a TIE!!!";
        }
        else {
            document.querySelector("#result").innerHTML = "VICTORY!!!";
        }
    }
}