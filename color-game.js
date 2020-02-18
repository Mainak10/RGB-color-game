let colorArr = generateRandomColorArr(6);
let colorText = document.getElementById('colorDisplay');
let pickedColor = pickColor();
let messageDisplay = document.getElementById('message');
let resetButton = document.getElementById('reset');
let squares = document.querySelectorAll('.square');
let h1 = document.querySelector('h1');
let hardButton = document.getElementById('hard-btn');
let easyButton = document.getElementById('easy-btn');
hardButton.classList.add('selected-btn');
colorText.textContent = pickedColor;
let gameMode = 'hard';
setColorOnSqaures(gameMode);

function setColorOnSqaures(gameType) {
    let numOfSquares = gameType === 'easy' ? 3 : 6;
    gameMode = gameType === 'easy' ? 'easy' : 'hard';
    colorArr = generateRandomColorArr(numOfSquares);
    pickedColor = pickColor();
    colorText.textContent = pickedColor;
    for (let i = 0; i < squares.length; i++) {
        //Initialize square color;
        squares[i].style.backgroundColor = colorArr[i];
        squares[i].style.display = i > 2 && numOfSquares === 3 ? 'none' : 'block';
    }
}

function changeGameMode(gameType) {
    h1.style.backgroundColor = 'steelblue';
    messageDisplay.textContent = '';

    if (gameType === 'easy') {
        easyButton.classList.add('selected-btn');
        hardButton.classList.remove('selected-btn');
        setColorOnSqaures('easy');
    } else {
        hardButton.classList.add('selected-btn');
        easyButton.classList.remove('selected-btn');
        setColorOnSqaures('hard');
    }
}
resetButton.addEventListener('click', () => {
    setColorOnSqaures(gameMode);
    h1.style.backgroundColor = 'steelblue';
    messageDisplay.textContent = '';
})



for (let i = 0; i < squares.length; i++) {

    //Initialize square color;
    squares[i].style.backgroundColor = colorArr[i];

    //Add click events in each box
    squares[i].addEventListener("click", () => {
        if (squares[i].style.backgroundColor === pickedColor) {
            messageDisplay.textContent = 'Correct!';
            h1.style.background = pickedColor;
            resetButton.textContent = 'Play Again?';
            changeAllSqaureColor(squares[i].style.backgroundColor);
        } else {
            squares[i].style.backgroundColor = '#232323';
            messageDisplay.textContent = 'Try Again';
        }
    })
}



//Need to change the color of all square boxes on picking correct color
//Looping throught all the sqaures.

function changeAllSqaureColor(selectedColor) {
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = selectedColor;
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
    let rgb = `${red}` + ', ' + `${green}` + ', ' + `${blue}`;
    return `rgb(${rgb})`;
}