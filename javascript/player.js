function playerComponnet(){
    this.health;
    this.x = 100;
    this.spdX = 10;
    this. y = 100;
    this.spdY= 10;
    this.playerImage = new Image();
    this.playerImage.src = "assets/apple.jpg";

    this.update = function(newX, newY){
      this.x += this.spdX;
      this.y += this.spdY;
    }


}
