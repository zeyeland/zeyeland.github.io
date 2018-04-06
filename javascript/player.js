//playerComponnet
function playerComponnet(){
    this.health;
    this.x = 100;
    this.spdX = 10; // player speed
    this. y = 100;
    this.spdY= 10;  // player speed
    this.playerImage = new Image(); //player img with src
    this.playerImage.src = "assets/spartan.png";

    this.update = function(){
        var parentThis = this;
        document.onkeydown = function(e) {
            switch (e.keyCode) {
                case 37:
                    parentThis.x -= parentThis.spdX;
                    break;
                case 38:
                    parentThis.y -= parentThis.spdY;
                    break;
                case 39:
                    parentThis.x += parentThis.spdX;
                    break;
                case 40:
                    parentThis.y += parentThis.spdY;
                    break;
            }//end of switch
        };   //end of document on keydown function 

    }//end of update 
   

    

}
