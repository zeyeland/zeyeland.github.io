
function checkWallCollision(){ // detects collisions with brick walls - dont passable aka moves backone tile
	var gridCount = 0;
	var rowCount = 0;
	var columnCount = 0;


	for(rowCount = 0; rowCount < mapRow; rowCount++){
      for(columnCount = 0; columnCount < mapColumn; columnCount++){
        	
        	//var calculateTileCoordinate;

        if (mapGrid[gridCount] == 9 && player1.x == columnCount*50 && player1.y == rowCount*50){
        	//console.log(player1.getPosition());
            //console.log( "counting tile posistion: " + rowCount +  "..." + columnCount);
            console.log("Succesfull collisions");
            return true;
        }
        gridCount++;
      }//end of inner for
  	} return false;//end of outer for

}// end of checkWallCollision testing 