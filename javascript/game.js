var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var player1 = new playerComponnet()

function update(){
    ctx.clearRect(0, 0, 100, 100);
    player1.update();
    ctx.drawImage(player1.playerImage,player1.x,player1.y,200,200);
 }
setInterval(update,40);





