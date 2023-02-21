class Ground
  {  
  
    constructor(x, y, w, h){
      
      let options = {
        isStatic:true
    }

      this.h = h;
      this.w = w;

      this.body = Bodies.rectangle(x, y, w, h, options);
      World.add(world, this.body);
  }
  
  show(){
    var pos = this.body;
    var angle;

    Matter.Body.rotate(this.body, angle);

    push();
    stroke(red);
    translate(pos.x, pos.y);
    rectMode(CENTER);
    rect(0, 0, this.w, this.h);
    pop();

    angle += 0.1;

  }

 
   
}
