function runThis(){
    Draw();
    //FogOfWar();
}

// size of each chess square
const squareSize = 15;
// position of board's top left
const boardTopx = 50;
const boardTopy = 50;

let maxRooms = 25;

let x = Math.floor((window.innerWidth-100) / squareSize);
let y = Math.floor((window.innerHeight-100) / squareSize);
let array = new Array(y);

function Draw(){

    let canvas = document.getElementById("canvasChessboard");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    context = canvas.getContext("2d");

    for(let i = 0; i < y; i++){
        array[i] = new Array(x);
        for(let j = 0; j < x; j++){
            array[i][j] = 0;
            //array[i][j] = Math.floor(Math.random()*2);
        }
    }

    addRooms();

        for(let i=0; i<y; i++) {
            for(let j=0; j<x; j++) {
                context.fillStyle = ((array[i][j])%2===0) ? "black":"white";
                let xOffset = boardTopx + j*squareSize;
                let yOffset = boardTopy + i*squareSize;
                context.fillRect(xOffset, yOffset, squareSize-1, squareSize-1);
                context.strokeRect(xOffset,yOffset,squareSize,squareSize);
            }
        }
        // draw the border around the chessboard
        context.strokeStyle = "black";
        context.strokeRect(boardTopx, boardTopy, squareSize*x, squareSize*y);
    canvas.addEventListener('click',function(event){alert(array[Math.floor(event.pageX/15)][Math.floor(event.pageY/15)])});
}

function FogOfWar(){
    let canvas = document.getElementById("fogOfWar");
    let context = canvas.getContext("2d");
    let fogness = 0.5;
    let fogColour = "Black";
    let width = window.innerWidth;
    let height = window.innerHeight;

    let entity_size = 25;
    let entities = [];
    let entityColour = "Yellow";
    let entitySpacing = 50;
    let entityVisionRadius = 75;
    for(let i = 0; i < width/(entity_size+entitySpacing);i++){
        for(let j = 0; j < height/(entity_size+entitySpacing);j++){
            entities.push({
               x:i*(entity_size+entitySpacing),
               y:j*(entity_size+entitySpacing)
            });
        }
    }
}

function addRooms(){
    let roomXMax = 10;
    let roomYMax = 10;
    let roomXYMin = 2;
    let a = 0;
    let b = 0;
    let roomX = Math.floor(Math.random()*roomXMax);
    let roomY = Math.floor(Math.random()*roomYMax);
    do {
        a = Math.floor(Math.random() * x);
        b = Math.floor(Math.random() * y);
    } while(a + roomX > x && b + roomY > y);
    for(let i = a; i < a+roomX;i++){
        for(let j = b; j < b + roomY; j++){
            array[i][j] = 1;
        }
    }

}

