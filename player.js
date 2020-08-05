class Player {
    constructor(){
      this.index = null;
      this.distance = 0;
      this.name = null;
    }
  
    getCount(){
      var playerCountRef = database.ref('playerCount');
      playerCountRef.on("value",(data)=>{
        playerCount = data.val();
      })
    }
  
    updateCount(count){
      database.ref('/').update({
        playerCount: count
      });
    }
  
    update(){
      var playerIndex = "players/player" + this.index;
      database.ref(playerIndex).set({
        name:this.name,
        distance:this.distance
      });
    }
  
    static getPlayerInfo(){
      var playerInfoRef = database.ref('players');
      playerInfoRef.on("value",(data)=>{
        allPlayers = data.val();
      })
    }
    getPlayerAtEnd(){
        var playersAtEndRef=database.ref("playerAtEnd");
        playersAtEndRef.on("value",(data)=>{
          this.rank=data.val();
        })
      }
      static updatePlayerAtEnd(rank){
        console.log("ujjessha");
        var playersUpdateRef= database.ref("/");
        playersUpdateRef.update({
          playerAtEnd:rank
          
        });
  }
}