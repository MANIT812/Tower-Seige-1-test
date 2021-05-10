class Box{
    constructor(x,y){
        var options={
            density:1,
            restitution:0.5,
            frictionAir:0.005,
            friction:0.9
        }
        this.body=Bodies.rectangle(x,y,40,40,options);
        this.width=40;
        this.height=40;
        World.add(world,this.body);
    }
    display(){
           var pos =this.body.position;
           fill("blue");
           rect(pos.x,pos.y,this.width,this.height);
    }
}