//=============================================================================\\
//                            Higher or Lower game JS                           \\
//                              made by nullcheats                               \\
//================================================================================\\
let GuessNumber;
let Attempts = 0;
let UsedNumbers = [];
let MaxNumber = 10;


/*
This function will simply generate a number
The maximuim number can be ajusted with the variable above (max number)
*/
const GenerateNumber = () => {
    GuessNumber = Math.floor(Math.random() * MaxNumber);
}

/*
This function will get the value entered by user & check it against the random one
This function will also change the image source to "Higher" or "Lower" accordingly
Aslong as the user took a guess the counter variable will also be incremented
*/
const CheckGuess = () => {
    var UserGuess = document.getElementById("NumberGuess").value;
    if (UserGuess) {
        changeImage('visible', 'Higher');
        Attempts++;
        document.getElementById("counter").innerText = "Attempts: " + Attempts;
        UsedNumbers.push(UserGuess);
        if (UserGuess == GuessNumber) {
            document.getElementById("Higher").src = "img/check.svg";
            document.getElementById("info").innerText = "Success you guessed the number in " + Attempts + " attempts !";
            setTimeout(ResetGame, 5500);

        } else {
            if (UserGuess > GuessNumber) {

                document.getElementById("Higher").src = "img/down-arrow.svg";
                document.getElementById("info").innerText = "number is < lower";
            } else {

                document.getElementById("Higher").src = "img/up-arrow.svg";
                document.getElementById("info").innerText = "number is > higher";
            }
        }
    } else {
        alert('No number was entered - please try again');
    }
}

/* 
This is a simple function that will reset the counters for the game upon being invoked
Added "location.reload" to refresh the page to clear user inputs also.
*/
const ResetGame = () => {
    Attempts = 0;
    UsedNumbers = [];
    GenerateNumber();
    location.reload();
}

/* 
Simple function to update the innerText of the "number range" display
This uses the "MaxNumber" variable , the same variable used to control main range
*/
const UpdateNumbers = () => {
    GenerateNumber();
    document.getElementById("Max").innerText = "Number range 1-" + MaxNumber;
}

/* 
This function simply changes the visibility of an image on the page
Changes image from "hidden" to "visible"
*/
function changeImage(option, id) {
    var img = document.getElementById(id);
    img.style.visibility = option;
}