var rock_ground_tile = new Image(); 
rock_ground_tile.src = "assets/tiles/rock_ground_tile.png";

var stone_wall_tile = new Image(); 
stone_wall_tile .src = "assets/tiles/stone_Wall.png";

var sand_Tile = new Image(); 
sand_Tile .src = "assets/tiles/sand_Tile.png";

var lava_Tile = new Image(); 
lava_Tile .src = "assets/tiles/lava_Tile.png";

var wool_tile = new Image(); 
wool_tile .src = "assets/tiles/wool_tile.png";

var water_tile = new Image();
water_tile.src = "assets/tiles/water_Tile.png";

/*
tile representation
0 = grass
1 = rock_ground_
2 = wool_tile_
3 = water tile
8 = sky_tile
9 = rock_wall
*/

const mapColumn = 40 ; // very important variable - sets the amount of columns the map can generated
const mapRow = 20; // very important variable- sets the amount of rows that can be generated
const totalGrid = mapColumn * mapColumn;
var mapGrid = [9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,8,8,8,8,8,8,8,8,8,8,
               9,2,2,2,2,2,2,3,9,3,1,1,1,1,1,9,0,0,0,1,2,2,2,2,1,0,1,1,1,1,1,1,0,1,2,2,2,2,2,8,
               9,2,2,2,2,2,2,2,9,3,1,1,1,1,1,9,0,0,0,1,2,2,2,2,1,0,1,2,2,2,2,1,0,1,2,2,2,2,2,8,
               9,2,2,2,2,2,2,2,9,3,1,1,1,1,1,0,0,0,0,1,2,2,2,2,1,0,1,2,2,2,2,1,0,1,2,2,2,2,2,8,
               9,2,2,2,2,2,2,2,9,1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,0,1,2,2,2,2,1,0,1,2,2,2,2,2,8,
               9,1,1,9,9,9,9,9,9,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,2,2,2,2,1,0,1,2,2,2,2,2,8,
               9,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,8,
               9,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,2,2,2,2,2,2,2,2,1,0,0,0,0,0,0,0,0,8,
               9,1,1,1,1,1,1,1,1,1,1,1,1,1,1,9,0,0,0,0,0,1,2,2,2,2,2,2,2,2,1,0,0,0,0,0,0,0,0,8,
               9,1,1,1,1,1,1,1,1,1,1,1,1,1,1,9,0,0,0,0,0,1,2,2,2,2,2,2,2,2,1,0,3,3,3,3,3,3,3,8,
               9,1,1,1,1,1,1,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,
               9,1,1,1,1,1,1,1,1,1,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
               9,1,1,1,1,1,1,1,1,1,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
               9,1,1,1,1,1,1,1,1,1,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
               9,9,9,9,9,9,9,9,9,9,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
               9,1,1,1,1,1,1,1,1,1,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
               9,1,1,1,1,1,1,1,1,1,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
               9,1,1,1,1,1,1,1,1,1,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
               9,3,1,1,1,1,1,1,1,1,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
               9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9]


function drawTiles(){
   var rowCount;
   var columnCount;
   var gridCount=0;
   for(rowCount = 0; rowCount < mapRow; rowCount++){
      for(columnCount = 0; columnCount < mapColumn; columnCount++){
          if(mapGrid[gridCount] == 0){ // if for grass
              ctx.drawImage(sand_Tile,columnCount*50,rowCount*50,50,50);
          }
          if(mapGrid[gridCount] == 1){ // if for rock ground
              ctx.drawImage(rock_ground_tile,columnCount*50,rowCount*50,50,50);
          }
          if(mapGrid[gridCount] == 2){ // if for wool tile
              ctx.drawImage(wool_tile,columnCount*50,rowCount*50,50,50);
          }
          if(mapGrid[gridCount] == 3){ // if for water tile
              ctx.drawImage(water_tile,columnCount*50,rowCount*50,100,100);
              //ctx.drawImage(water_tile,50,55,100,100,columnCount*50,rowCount*50,100,100);
          }
          if(mapGrid[gridCount] == 8){ // if for skyr_tile
              ctx.drawImage(lava_Tile,columnCount*50,rowCount*50,50,50);
          }
          if(mapGrid[gridCount] == 9){ // if for rock wall
              ctx.drawImage(stone_wall_tile,columnCount*50,rowCount*50,50,50);
          }
          gridCount++;
      }//end of inner for
  }
}//end of drawtile function


