//important variables for the canvas translate 
var offsetX = 0;
var offsetY = 0;
var transOrginX = 0;
var transOrginY = 0;
var slideCount=0;

// this functions updates the canvas location if and when the player moves to far from center of screen
function slideScreen(){ 
	//console.log(player1.getPosition()); // console check to make sure player and tiles are correct for collision mechancis
	if(offsetX < -8){ // translate screen if character too far left
		ctx.translate(50,0);
		offsetX++;
		slideCount = slideCount - 1;
		transOrginX = transOrginX - 50;
	}

	if(offsetX > 8){ // translate screen if character too far right
		ctx.translate(-50,0);
		offsetX--;
		slideCount = slideCount + 1;
		transOrginX = transOrginX + 50;
	}

	if(offsetY < -4){ // translate screen if character too far up
		ctx.translate(0,50);
		offsetY++;
		transOrginY = transOrginY - 50;
	}

	if(offsetY > 3){ // translate screen if character too far down
		ctx.translate(0,-50);
		offsetY--;
		transOrginY = transOrginY + 50;
	}

} // end of screen sliding 