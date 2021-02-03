class Ground{
    constructor(x,y,w,h){
        var options={
            isStatic: true
        }
        this.body=Bodies.rectangle(x,y,w,h,options);
        this.image=loadImage("images/groundImage.png");
        this.w=w;
        this.h=h;
        World.add(world,this.body);
        World.add(world,this.image);
    }
    display(){
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,this.w,this.h)
    }
}