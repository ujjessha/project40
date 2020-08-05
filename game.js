class Game {
    constructor(){
  
    }
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }
        form = new Form()
        form.display();
      }
    }
    player1=createSprite(100,200);
    player2=createSprite(300,200);
    player3=createSprite(500,200);
    player4=createSprite(700,200);
    players=[player1,player2,player3,player4];

    play(){
      form.hide();
  
      Player.getPlayerInfo();
      
      if(allPlayers !== undefined){
        background(rgb(198,135,103));
       
        //index of the array
        var index = 0;
  
        //x and y position of the player
        var x = 150;
        var y;
  
        for(var plr in allPlayers){
          //add 1 to the index for every loop
          index = index + 1 ;
  
        //position the player a little away from each other in x direction
          x = x + 200;
          //use data form the database to display the player in y direction
          y = displayHeight - allPlayers[plr].distance;
          players[index-1].position.x = x;
          players[index-1].position.y = y;
  
          if (index === player.index){
            players[index - 1].shapeColor = "red";
            ellipse(x,y,70,70);
            camera.position.x = displayWidth/2;
            camera.position.y = cars[index-1].y
          }
        
        }
  
      }
  
      if(keyIsDown(UP_ARROW) && player.index !== null){
        player.distance +=10
        player.update();
      }
      if(keyIsDown(DOWN_ARROW)&& player.index!==null){
        player.y=-2;
        player.update();
      }
      if(player.distance>3800){
        gameState=2;
  
      }
  
      drawSprites();
    }
    end(){
      console.log("gameEnded");
      console.log(player.rank);
     
    }
  }


