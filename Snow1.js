class Snow1{
    constructor(x,y){
       var options={
           friction:1.0,
           isStatic:false,
           density:0.9,
       }
       this.body=Bodies.rectangle(x,y,60,60,options)
       this.image=loadImage("snow4.wepb")
       World.add(world,this.body)
    }
    display(){
        var pos=this.body.position
        imageMode(CENTER)
        image(this.image,pos. x,pos.y,60,60);
    }
}