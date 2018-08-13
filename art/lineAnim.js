
var canvas = document.querySelector('canvas');


canvas.width = window.innerWidth - 25;
canvas.height = window.innerHeight - 25;

var c = canvas.getContext('2d');


//random color
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function Circle(x, y, dx, dy, radius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;

  var x2 = canvas.width / 2;
  var dx2 = 4;
  var y2 = canvas.height / 2;

  var color = getRandomColor();


  this.draw = function() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fillStyle = color;
    c.fill();
    c.strokeStyle = color;
    c.stroke();

    c.beginPath();
    c.moveTo(x2, canvas.height / 2);
    c.lineTo(this.x, this.y);
    c.strokeStyle = color;
    c.stroke();
    c.lineWidth = 20;

    //circle.update();

    c.beginPath();
    c.arc(x2, y2, 30, Math.PI * 2, false);
    c.fillStyle = 'black';
    c.fill();
    c.strokeStyle = color;
    c.stroke();




  }

  this.update = function() {



    if (this.x + this.radius + 5 > canvas.width || this.x - this.radius - 5 < 0) {
      this.dx = - this.dx;
      color = getRandomColor();

    }
    if (this.y + this.radius + 5 > canvas.height || this.y - this.radius - 5 < 0) {
      this.dy = - this.dy;
      color = getRandomColor();
    }
    if (x2 + 40 > canvas.width || x2 - 40 < 0) {
      dx2 = - dx2;
    }


    x2 += dx2;


    this.x += this.dx;
    this.y += this.dy;

      this.draw();
  }

}


  var circleArray = [];

  for (var i = 0; i < 300; i++) {

    var x = Math.random() * (canvas.width - (radius + 10) * 2) + (radius + 10);
    var y = Math.random() * (canvas.height - (radius + 10) * 2) + (radius + 10);
    var dy = (Math.random() - 0.5) * 4;
    var dx = (Math.random() - 0.5) * 4;
    var radius = 5;

    circleArray.push(new Circle(x, y, dx, dy, radius));
  }











function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);

  for(var i = 0; i < circleArray.length; i++) {
    circleArray[i].update();

  }




}

animate();
