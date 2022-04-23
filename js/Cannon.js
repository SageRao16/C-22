class Cannon {
  constructor(x, y, width, height, angle) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;
    
    this.cannonimage=loadImage("assets/canon.png")
    this.cannonBaseimage=loadImage("assets/cannonBase.png")

  }
  display(){
  //create cannon top
  push()
  imageMode(CENTER)
  image(this.cannonimage,this.x,this.y,this.width,this.height)    
  pop()

  //create cannon bottom
  image(this.cannonBaseimage,70,20,200,200)  
  noFill()
  }
  
}
