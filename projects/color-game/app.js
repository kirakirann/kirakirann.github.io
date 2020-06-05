let numOfSquares = 6;
let colors = [];
let pickedColor;
let squares = document.querySelectorAll('.squares');
let colorDisplay = document.querySelector('#colorDisplay');
let messageDisplay = document.querySelector('#message');
let h1 = document.querySelector('h1');
let resetButton = document.querySelector('#reset');
let modeButtons = document.querySelectorAll('.mode');

init();

function init(){
    setupButtons();
    setupSquares();
    reset();
}

function setupButtons(){
     //mode buttons event listeners
     for(let i = 0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener('click', function(){
        modeButtons[0].classList.remove('selected');
        modeButtons[1].classList.remove('selected');
        this.classList.add('selected');
        this.textContent === 'Easy' ? numOfSquares = 3: numOfSquares = 6;
        reset();
        });
    }
}

function setupSquares(){
    for(let i = 0; i < squares.length; i++){
        //inital colors of squares
        squares[i].style.backgroundColor = colors[i];
    
        //add click listener to squares
        squares[i].addEventListener('click', function(){
        //grab color of clicked square
        let clickedColor = this.style.backgroundColor;
        //compare color to picked color
        if (clickedColor === pickedColor){
            messageDisplay.textContent = 'Correct!';
            resetButton.textContent = 'Play Again';
            h1.style.backgroundColor = clickedColor;
            changeColor(clickedColor);
        }
        else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = 'Try Again';
        }
        });
    }
}

function reset(){
    //generate all new colors
    colors = generateRandomColor(numOfSquares);
    //pick a new random color from array
    pickedColor = pickColor();
    //change color display to match picked color
    colorDisplay.textContent = pickedColor;
    //change color of squares
    for(let i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.display = 'block';
            squares[i].style.backgroundColor = colors[i];
        }
        else {
            squares[i].style.display = 'none'; 
        }
    }
    //change h1 background back to home
    h1.style.backgroundColor = 'steelblue'; 
    resetButton.textContent = 'New Colors'
    messageDisplay.textContent = '';
}

//reset button listener
resetButton.addEventListener('click', function(){
    reset();
});

//change squares color to color picked (if correct)
function changeColor(color){
    //loop through all squares
    for (let i = 0; i < squares.length; i++){
        //change color to match picked color
        squares[i].style.backgroundColor = pickedColor;
    }
}

//pick random color
function pickColor(){
    let random = Math.floor(Math.random() * colors.length);
    return colors[random];
}
//generate random color for squares
function generateRandomColor(num){
    //make an empty array
    let arr = [];
    //repeat num times
    for(let i = 0; i < num; i++){
     //add num of random colors to array
        arr.push(randomColors());
    }
    //return array
    return arr;
}

function randomColors(){
    let r = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);

    return 'rgb(' + r + ', ' + b + ', ' + g + ')';
}