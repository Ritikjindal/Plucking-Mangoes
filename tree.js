class Tree {
    constructor(x,y,w,h){
        var options={
            isStatic: true,
            restitution:1,
            density:0.2,
            friction:0.2
        }
        this.x=x;
        this.y=y;
        this.w=w;
        this.h=h;
        this.body=Bodies.rectangle(this.x,this.y,this.w,this.h,options);
        this.image=loadImage("tree.png");
        World.add(world,this.body);
    } 

    display() {
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.image,0,0,this.w,this.h);
        pop();
        
    }
 }