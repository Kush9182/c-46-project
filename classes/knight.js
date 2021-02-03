class Knight{
    constructor(x,y,w,h){
        this.body=Bodies.rectangle(x,y,w,h);
        this.image=loadImage("images/standingKnightImage.png");
        this.width=w;
        this.height=h;
        World.add(world,this.body);
    }
    display(){
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,this.width,this.height)
    }
}