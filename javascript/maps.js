var rock_ground_tile = new Image(); //player img with src
rock_ground_tile.src = "assets/tiles/rock_ground_tile.png";

var rock_wall_tile = new Image(); //player img with src
rock_wall_tile .src = "assets/tiles/rocks_wall_tile.png";

const mapColumn = 20 ;
const mapRow = 10;
const totalGrid = mapColumn * mapColumn;
mapGrid = [9,0,0,0,0,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,
           9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,
           9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,
           9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
           9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
           9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
           9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
           9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,
           9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,
           9,0,0,0,0,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9]


function drawTiles(){
 var rowCount;
 var columnCount;
 var gridCount=0;
 for(rowCount = 0; rowCount < mapColumn; rowCount++){
    for(columnCount = 0; columnCount < mapColumn; columnCount++){
        if(mapGrid[gridCount] == 0){
            ctx.drawImage(rock_ground_tile,columnCount*50,rowCount*50,50,50);
        }
        if(mapGrid[gridCount] == 9){
            ctx.drawImage(rock_wall_tile,columnCount*50,rowCount*50,50,50);
        }
        console.log("column is " + columnCount);
        console.log("gridcount is " + gridCount)
        gridCount++;
    }//end of inner for
}
}//end of drawtile function