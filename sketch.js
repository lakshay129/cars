var gameState=0;
var car1
var car2
var car3
var car4
var cars
  

var playerCount=0;
var allPlayers;
var form1,player1;
var game1;
var database;

function setup(){
  createCanvas(displayWidth-20,displayHeight-20);
  database=firebase.database();
game1 = new game();
game1.getState();                                
game1.start();

  
}

function draw(){
  if(playerCount === 4){
    game1.update(1);
  }
  if(gameState ===1){
    clear ();
    game1.play();

  }
  

}
