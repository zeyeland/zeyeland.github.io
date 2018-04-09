
function checkWallCollision( checkDirection ){ // detects collisions with brick walls - dont passable aka moves backone tile
	var gridCount = 0;
	var rowCount = 0;
	var columnCount = 0;

        for(rowCount = 0; rowCount < mapRow; rowCount++){  // colliodes on impact
          for(columnCount = 0; columnCount < mapColumn; columnCount++){
             //check wall to left of player
            if (checkDirection == "left" && mapGrid[gridCount] == 9 && (player1.x - 50) == columnCount*50 && player1.y == rowCount*50){
                console.log("There is a wall to player left");
                return true;
            }
            //check wall to right of player
            if (checkDirection == "right" && mapGrid[gridCount] == 9 && (player1.x + 50) == columnCount*50 && player1.y == rowCount*50){
              console.log("There is a wall to player right");
              return true;
            }
            //check wall above player
            if (checkDirection == "above" && mapGrid[gridCount] == 9 && (player1.y - 50) == rowCount*50 && player1.x == columnCount*50){
              console.log("There is a wall above player");
              return true;
            }
            //check wall below player
            if (checkDirection == "below" && mapGrid[gridCount] == 9 && (player1.y + 50) == rowCount*50 && player1.x == columnCount*50){
              console.log("There is a wall below player");
              return true;
            }
            gridCount++;
          }//end of inner for
          }//end of outer for
          return false;
}// end of checkWallCollision testing 






/////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//////////////////use these two bottom loops to check different types of collisions
//kept for documentation purposes and future testing

/*for(rowCount = 0; rowCount < mapRow; rowCount++){  // colliodes on impact
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
  } return false;//end of outer for */
  
  //this test checks collision in all directions
 /* for(rowCount = 0; rowCount < mapRow; rowCount++){ //collides 50px before impact
    for(columnCount = 0; columnCount < mapColumn; columnCount++){
          
          //var calculateTileCoordinate;
        if ((mapGrid[gridCount] == 9 && ((player1.x + 50) == columnCount*50 || (player1.x - 50) == columnCount*50) && player1.y == rowCount*50) || (mapGrid[gridCount] == 9 && ((player1.y + 50) == rowCount*50 || (player1.y - 50) == rowCount*50) && player1.x == columnCount*50)  )
        {
            //console.log(player1.getPosition());
          //console.log( "counting tile posistion: " + rowCount +  "..." + columnCount);
          console.log("Succesfull collisions");
          return true;
        }
      gridCount++;
    }//end of inner for
    } return false;//end of outer for */