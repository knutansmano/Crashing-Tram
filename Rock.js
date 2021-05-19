class Rock{
  constructor(x,y,width,height){
    var options ={ isStatic: false}
    
    this.body =  Bodies.rectangle(x,y,width,height,options);
    World.add(myWorld,this.body);
    this.width = width;
    this.height = height;
    this.image = loadImage("images/rock1.png");
  }
  display()
  {
      fill("black")
      stroke("grey");
      imageMode(CENTER);
      image(this.image,this.body.position.x, this.body.position.y,this.width, this.height);
  }


}