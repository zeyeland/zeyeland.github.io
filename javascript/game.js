var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var player1 = new playerComponnet()



function update(){
    ctx.drawImage(player1.playerImage,200,200,300,300);
 }
setInterval(update,40);



