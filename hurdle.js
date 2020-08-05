class Box {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
     
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      angleMode(RADIANS);
      var angle=this.body.angle;
      push();
  
      translate(pos.x,pos.y);
      rectMode(CENTER);
      fill(255);
  
      rotate(angle);
      rect(0, 0, this.width, this.height);
      pop();
    
    }
}