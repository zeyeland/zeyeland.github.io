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
            ctx.drawImage(rock_ground_tile,columnCount*50,rowCount*50,100,100);
        }
        if(mapGrid[gridCount] == 9){
            ctx.drawImage(rock_wall_tile,columnCount*50,rowCount*50,100,100);
        }
        console.log("column is " + columnCount);
        console.log("gridcount is " + gridCount)
        gridCount++;
    }//end of inner for
}
}//end of drawtile function


function drawTiles2(){
     ctx.drawImage(rock_wall_tile, 1500,700,100,100);
     ctx.drawImage(rock_wall_tile, 1500,720,100,100);
     ctx.drawImage(rock_wall_tile, 1500,740,100,100);
     ctx.drawImage(rock_wall_tile, 1500,760,100,100);
   }//end of drawtile function