class Paper{
    constructor(){
var options={
restitution:0.5,
friction:0.5,
density:1.2
}

this.body=Bodies.circle(130,680,15,options)
World.add(world,this.body)

    }

display(){
ellipseMode(RADIUS)
fill ('red')
ellipse(this.body.position.x,this.body.position.y,15,15)
}}