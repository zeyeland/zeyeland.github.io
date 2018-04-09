//playerComponnet
function playerComponnet(){
    this.health;
    this.x = 500; //500;
    this.spdX = 50; // player speed
    this.y = 250; //250;
    this.spdY= 50;  // player speed
    this.playerImage = new Image(); //player img with src
    this.playerImage.src = "assets/player_Sprites/person-Chill-Right.png";

    this.playerImage2 = new Image(); //player img with src
    this.playerImage2.src = "assets/player_Sprites/person-Sword-Left.png";

    this.update = function(){
        var parentThis = this;
        document.onkeydown = function(e) {
            switch (e.keyCode) {
                case 37:
                if(checkWallCollision("left") == false){
                    parentThis.x -= parentThis.spdX;
                    console.log("player left");
                    offsetX--;
                    console.log("offsetX = " + offsetX);
                    console.log(player1.getPosition());
                    slideScreen();
                }
                    break;
                case 38:
                if(checkWallCollision("above") == false){
                    parentThis.y -= parentThis.spdY;
                    console.log("player up");
                    offsetY--;
                    console.log("offsetY = " + offsetY);
                    console.log(player1.getPosition());
                    slideScreen();
                }
                    break;
                case 39:
                if(checkWallCollision("right") == false){
                    parentThis.x += parentThis.spdX;
                    console.log("player right");
                    offsetX++;
                    console.log("offsetX = " + offsetX);
                    console.log(player1.getPosition());
                    slideScreen();
                }
                    break;
                case 40:
                if(checkWallCollision("below") == false){
                    parentThis.y += parentThis.spdY;
                    console.log("player down");
                    offsetY++;
                    console.log("offsetY = " + offsetY);
                    console.log(player1.getPosition());
                    slideScreen();
                }
                    break;
            }//end of switch
        };   //end of document on keydown function 
        drawPlayer();
    }//end of update function

    this.getPosition = function(){
        console.log(this.x + " .. " + this.y);
        //checkWallCollision();
        //return (this.x, this.y);
    }
} // end of playerComponnet

function drawPlayer(){
    //ctx.drawImage(player1.playerImage,0,0,100,100,player1.x,player1.y,400,400);
    ctx.drawImage(player1.playerImage,player1.x,player1.y,50,50);
    //ctx.drawImage(player1.playerImage2,player1.x,player1.y,50,50);
   
    
}
