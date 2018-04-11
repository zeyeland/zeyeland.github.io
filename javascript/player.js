//playerComponnet
function playerComponnet(){
    this.health;
    this.x = 500; //starting position;
    this.spdX = 50; // player speed
    this.y = 250; // starting position
    this.spdY= 50;  // player speed
    this.playerImage = new Image(); //player img with src
    this.playerImage.src = "assets/player_Sprites/playerChill-Right.png";
    /*player looking directions for sprites*/
    this.lookLeft = true;
    this.lookRight = false;

    this.update = function(){
        var parentThis = this;
        document.onkeydown = function(e) { //detects movement with keys strokes
            switch (e.keyCode) {
                case 65:
                if(parentThis.lookLeft == true){
                    if(checkWallCollision("left") == false){
                        parentThis.playerImage.src = "assets/player_Sprites/playerRun-Left.png";
                        parentThis.x -= parentThis.spdX;
                        //console.log("player left");
                        offsetX--;
                        //console.log("offsetX = " + offsetX);
                        slideScreen();
                    }
                }
                else{
                    parentThis.playerImage.src = "assets/player_Sprites/playerChill-Left.png";
                    parentThis.lookLeft = true;
                    parentThis.lookRight = false;
                }
                    break;
                case 87:
                if(checkWallCollision("above") == false){
                    parentThis.y -= parentThis.spdY;
                    //console.log("player up");
                    offsetY--;
                    //console.log("offsetY = " + offsetY);
                    slideScreen();
                }
                    break;
                case 68:
                if(parentThis.lookRight == true){
                    if(checkWallCollision("right") == false){
                        parentThis.playerImage.src = "assets/player_Sprites/playerRun-Right.png";
                        parentThis.x += parentThis.spdX;
                        //console.log("player right");
                        offsetX++;
                        //console.log("offsetX = " + offsetX);
                        slideScreen();
                    }
                }
                else{
                    parentThis.playerImage.src = "assets/player_Sprites/playerChill-Right.png";
                    parentThis.lookRight = true;
                    parentThis.lookLeft = false;
                }
                    break;
                case 83:
                if(checkWallCollision("below") == false){
                    parentThis.y += parentThis.spdY;
                    //console.log("player down");
                    offsetY++;
                    //console.log("offsetY = " + offsetY);
                    slideScreen();
                }
                    break;
            }//end of switch
        };   //end of document on keydown function 
        document.onkeyup = function(e){ //detects key up after movement
             switch (e.keyCode) {
                case 65:
                    parentThis.playerImage.src = "assets/player_Sprites/playerChill-Left.png";
                    
                    break;
                case 87:
                
                
                    break;
                case 68:
                    parentThis.playerImage.src = "assets/player_Sprites/playerChill-Right.png";
                
                    break;
                case 83:
                
                
                    break;
            }//end of key up switch
        }//end of keyup function
        //end of movement functions

        canvas.onmousedown = function(e){ // have to calculate and process coordniates becasue character sprite is not centered in its origin
            var clickX = event.clientX;
            var clickY = event.clientY;

            if(clickY < parentThis.y && clickX >= parentThis.x && clickX <= parentThis.x + 50){
                console.log("Attack UP is successful");
                parentThis.playerImage.src = "assets/player_Sprites/attacking/attack-Sword-Up.png";
            }
            if(clickY > parentThis.y + 50 && clickX >= parentThis.x && clickX <= parentThis.x + 50){
                console.log("Attack DOWN is successful");
                parentThis.playerImage.src = "assets/player_Sprites/attacking/attack-Sword-Down.png";
            }
            if(clickX < parentThis.x && clickY >= parentThis.y && clickY <= parentThis.y + 50){
                console.log("Attack LEFT is successful");
                parentThis.playerImage.src = "assets/player_Sprites/attacking/attack-Sword-Left.png";
            }
            if(clickX > parentThis.x + 50 && clickY >= parentThis.y && clickY <= parentThis.y + 50){
                console.log("Attack RIGHT is successful");
                parentThis.playerImage.src = "assets/player_Sprites/attacking/attack-Sword-Right.png";
            }
            var coords = "X coords: " + clickX + ", Y coords: " + clickY;
            //console.log("Player x is: " + parentThis.x + " Player y is: " + parentThis.y);
            //console.log(coords);
        }
        canvas.onmouseup = function(e){ //change image back to normal on mouse click up
            parentThis.playerImage.src = "assets/player_Sprites/playerChill-Left.png";
        }
        drawPlayer();
    }//end of update function

    this.getPosition = function(){
        console.log(this.x + " .. " + this.y);
    }
} // end of playerComponnet

function drawPlayer(){
    ctx.drawImage(player1.playerImage,player1.x,player1.y,50,50);
}