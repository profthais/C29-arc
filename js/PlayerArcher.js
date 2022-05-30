class PlayerArcher {
    constructor(x, y, width, height) {
      const options = {
        isStatic: true
      };
  
      this.body = Matter.Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      //this.collapse = false;
      this.image = loadImage("./assets/playerArcher.png");
  
      World.add(world, this.body);
  
      Matter.Body.setAngle(this.body, -PI / 2); 
    }
  
    display() {
      var pos = this.body.position;
      var angle = this.body.angle;
      console.log(angle)
      
      if (keyIsDown(DOWN_ARROW) && angle < -1.38) {
        angle += 0.01;
        Matter.Body.setAngle(this.body, angle);
      }
  
      if (keyIsDown(UP_ARROW) && angle > -1.68) {
        angle -= 0.01;
        Matter.Body.setAngle(this.body, angle);
      }
      
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      //imageMode(CENTER); //prof: apagado o método CENTER, deixado o padrão CORNER
      image(this.image, -45, 40, this.width, this.height); //prof: alterado os valores de x,y
      pop();
    }
  }
  