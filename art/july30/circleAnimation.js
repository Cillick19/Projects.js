
var canvas = document.querySelector('canvas');


canvas.width = window.innerWidth - 25;
canvas.height = window.innerHeight - 25;

var c = canvas.getContext('2d');




function Circle(x, y, dx, dy, radius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = adius;


  this.draw = function() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);

    c.strokeStyle = 'blue';
    c.stroke();

  }

  this.update = function() {



    if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
      this.dx = - this.dx;
    }
    if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
      this.dy = - this.dy;
    }


    this.x += this.dx;
    this.y += this.dy;

      this.draw();
  }

}


  var circleArray = [];

  for (var i = 0; i < 100; i++) {

    var x = Math.random() * (canvas.width - radius * 2) + radius;
    var y = Math.random() * (canvas.height - radius * 2) + radius;
    var dy = (Math.random() - 0.5);
    var dx = (Math.random() - 0.5);
    var radius = 30;

    circleArray.push(new Circle(x, y, dx, dy, radius));
  }


console.log(circleArray);








function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);

  for(var i = 0; i < circleArray.length; i++) {
    circleArray[i].update();
  }
  //circle.update();


}

animate();
