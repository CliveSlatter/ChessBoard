function runThis(){
    Draw();
    FogOfWar();
}

function Draw(){
        // size of each chess square
        const squareSize = 25;
        // position of board's top left
        const boardTopx = 50;
        const boardTopy = 50;
    alert(window.innerHeight + " " + window.innerWidth);
    let canvas = document.getElementById("canvasChessboard");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    context = canvas.getContext("2d");

    let x = Math.floor((window.innerWidth-100) / squareSize);
    let y = Math.floor((window.innerHeight-100) / squareSize);
    let array = new Array(y);

    alert(x + " " +y);

    for(let i = 0; i < y; i++){
        array[i] = new Array(x);
        for(let j = 0; j < x; j++){
            array[i][j] = Math.floor(Math.random()*2);
        }
    }
        for(let i=0; i<y; i++) {
            for(let j=0; j<x; j++) {
                context.fillStyle = ((array[i][j])%2===0) ? "purple":"orange";
                let xOffset = boardTopx + j*squareSize;
                let yOffset = boardTopy + i*squareSize;
                context.fillRect(xOffset, yOffset, squareSize, squareSize);
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