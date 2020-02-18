//Declare Global varibales

//Constant variables
const COLOR_TEXT = document.getElementById('colorDisplay');
const MESSAGE_DISPLAY = document.getElementById('message');
const RESET_BUTTON = document.getElementById('reset');
const SQUARES = document.querySelectorAll('.square');
const H1 = document.querySelector('h1');
const HARD_BUTTON = document.getElementById('hard-btn');
const EASY_BUTTON = document.getElementById('easy-btn');

//Declaring global varibales 
//Will always store random colors in the array
let colorArr = [];

//picked random color string 
let pickedColor = "";

//Default color mode is 'HARD' so change the background color
let gameMode = 'hard';
HARD_BUTTON.classList.add('selected-btn');

//Will set colors and picked color on loading of the page.
setSquareColors(gameMode);

//This function will always create the color Array 
//depending upon the game type and
//Picked random color from that color array

function setSquareColors(gameType) {

    //Deciding num of squares requires based on game mode

    let numOfSquares = gameType === 'easy' ? 3 : 6;
    gameMode = gameType === 'easy' ? 'easy' : 'hard';

    //Generate color array depends on the number of squares

    colorArr = generateRandomColorArr(numOfSquares);

    //Randomly picked color string from color array

    pickedColor = pickColor();

    //setting the color name on the header
    COLOR_TEXT.textContent = pickedColor;

    //Iterating through each squares and setting colors 
    //from color array

    for (let i = 0; i < SQUARES.length; i++) {
        //Initialize square color;
        SQUARES[i].style.backgroundColor = colorArr[i];

        //showing or hiding sqauers depends upon number of squares
        SQUARES[i].style.display = i > 2 && numOfSquares === 3 ? 'none' : 'block';
    }

    //calling this function which will change the 
    //square colors dynamically on click

    changeSquareColor();
}

// When Toggling game mode on click

function changeGameMode(gameType) {

    //Always setting H1 background color to default on toggle
    H1.style.backgroundColor = 'steelblue';
    //The message should be also blank

    MESSAGE_DISPLAY.textContent = '';

    //Adding or removing 'selected-btn' class on toggle 
    if (gameType === 'easy') {
        EASY_BUTTON.classList.add('selected-btn');
        HARD_BUTTON.classList.remove('selected-btn');
        setSquareColors('easy');
    } else {
        HARD_BUTTON.classList.add('selected-btn');
        EASY_BUTTON.classList.remove('selected-btn');
        setSquareColors('hard');
    }
}

//Resetting the Game
RESET_BUTTON.addEventListener('click', () => {

    //Previous selected game mode will be passed as gameMode is a global variable
    //so that color arr should be generated based on the current game mode

    setSquareColors(gameMode);
    //Always setting H1 background color to default on reset
    //Text also should be blank

    H1.style.backgroundColor = 'steelblue';
    MESSAGE_DISPLAY.textContent = '';
})


//change squares color on clicking the squares conditionally
function changeSquareColor(){
    for (let i = 0; i < SQUARES.length; i++) {
        //Add click events in each box
        SQUARES[i].addEventListener("click", () => {
            if (SQUARES[i].style.backgroundColor === pickedColor) {
                MESSAGE_DISPLAY.textContent = 'Correct!';
                H1.style.background = pickedColor;
                RESET_BUTTON.textContent = 'Play Again?';
                changeAllSqaureColor(SQUARES[i].style.backgroundColor);
            } else {
                SQUARES[i].style.backgroundColor = '#232323';
                MESSAGE_DISPLAY.textContent = 'Try Again';
            }
        })
    }
}

//Need to change the color of all square boxes on picking correct color
//Looping throught all the sqaures.

function changeAllSqaureColor(selectedColor) {
    for (let i = 0; i < SQUARES.length; i++) {
        SQUARES[i].style.backgroundColor = selectedColor;
    }
}

//Randomly pick color on refershing page each time

function pickColor() {
    let randomIndex = Math.floor(Math.random() * colorArr.length);
    return colorArr[randomIndex];
}

//Generate Random Color Array
function generateRandomColorArr(lengthOfArray) {
    let arr = [];
    for (let i = 0; i < lengthOfArray; i++) {
        arr.push(pickRandomColor());
    }
    return arr;
}

//pick random color on each iteration

function pickRandomColor() {
    //picking r,g,b random values to gerenate rgb string

    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    //preparing rgb string 
    //Caution: always add space after ', '
    let rgb = `${red}` + ', ' + `${green}` + ', ' + `${blue}`;
    return `rgb(${rgb})`;
}