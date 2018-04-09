var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var player1 = new playerComponnet()

function update(){
    ctx.clearRect(transOrginX,transOrginY, 1000, 500); // clears new area after translate is complete
    drawTiles(); 
    player1.update(); // -- update function draws player - drawPlayer();
    checkWallCollision();
 }

setInterval(update,40);








