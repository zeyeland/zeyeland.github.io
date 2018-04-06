var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var player1 = new playerComponnet()

function update(){
    ctx.scale(1,1);
    ctx.clearRect(0, 0, 1000, 500);
    drawTiles();
    player1.update();
    ctx.drawImage(player1.playerImage,player1.x,player1.y,100,100);
 }
setInterval(update,40);








