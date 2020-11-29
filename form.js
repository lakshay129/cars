class form{
    constructor (){
        this.input = createInput("Enter your name:");
        this.button = createButton("START");
        this.greeting = createElement('h2');
        this.title  = createElement('h2');

    }
    hide(){
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
;

    }
    
    display(){
      
       this.title.html("CAR RACING!!!!");
       this.title.position(200,10);
     
        
        this.input.position(displayWidth/2-40, displayHeight/2-80);
        this.button.position(displayWidth/2+30,displayHeight/2);

        this.button.mousePressed(()=>{
           this.input.hide();
           this.button.hide();
            player1.name = this.input.value();

           this. greeting.html("Hye!!!" +player1.name);
            this.greeting.position(displayWidth/2-70,displayHeight/4);

            playerCount = playerCount +1;
            player1.index = playerCount;
            player1.update();
            player1.updateCount(playerCount);
        })
    }


}