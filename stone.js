class Stone{
    constructor(x,y,w,h){
        var options={
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2
        }
        this.x=x;
        this.y=y;
        this.w=w;
        this.h=h;
        this.body=Bodies.rectangle(this.x,this.y,this.w,this.h,options);
        this.image=loadImage("stone.png");
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.image,0,0,this.w,this.h);
        pop();
    }
}