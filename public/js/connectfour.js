var gameField = new Array();
var board = document.getElementById("game-table");
var currentCol;
var currentRow;
var currentPlayer;
var id = 1;

newgame();

function newgame(){
	prepareField();
	placeDisc();
}

function prepareField(){
	gameField = new Array();
	for(var i=0; i<6; i++){
		gameField[i] = new Array();
		for(var j=0; j<7; j++){
			gameField[i].push(0);
		}
	}
}

function checkForWin(row, col){}

//
function getAdj(row, col, row_inc, col_inc){}

function cellVal(row, col){}

function firstFreeRow(col, player){}

function possibleColumns(){}

function think(){}

function Disc(player){}

function dropDisc(cid, player){}

function checkForMoveWin(row, col){
  if(getAdj(row,col,0,1)+getAdj(row,col,0,-1) > 2){
    return true;
  } else {
    if(getAdj(row,col,1,0) > 2){
      return true;
    } else {
      if(getAdj(row,col,-1,1)+getAdj(row,col,1,-1) > 2){
        return true;
      } else {
        if(getAdj(row,col,1,1)+getAdj(row,col,-1,-1) > 2){
          return true;
        } else {
          return false;
        }
      }
    }
  }
}

function placeDisc(player){
	currentPlayer = player;
	var disc = new Disc(player);
	disc.addToScene();
}

function prepareField(){}

function moveit(who, where){}