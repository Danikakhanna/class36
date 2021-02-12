class Game{
constructor(){

}
getState(){
    var gameStateNode=database.ref("gameState")
    gameStateNode.on("value",function(data){
        gameState=data.val()
    })
}
updateState(state){
    database.ref('/').set({
        gameState:state
    })
}
start(){
    if (gameState ===0){
    player=new Player()
player.getCount()
form=new Form()
form.display()
}

}
play(){
    form.hide()
    textSize(30)
    text("game Start",120,100)
    Player.getPlayerInfo();
    if(allPlayers !==undefined){
        var displayPosition=130
        displayPosition+=20
        for(var p in allPlayers){
            if(p==="player"+player.index)
            fill ("red")
            else
            fill("black")
            textSize(15)
            text(allPlayers[p].name+":"+allPlayers[p].distance,120,displayPosition)
        

        }
    }
    if(keyIsDown(UP_ARROW)&&player.index!==null){
        player.distance+=15
        player.update();
    }
}