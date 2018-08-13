
var canvas = document.querySelector('canvas');


canvas.width = window.innerWidth - 25;
canvas.height = window.innerHeight - 25;

var c = canvas.getContext('2d');
var dist = 50;
var maxRadius = 40;
//var minRadius = 2;

var mouse = {
  x: undefined,
  y: undefined
}

var colorarray = [
  'blue',
  'pink',
  'red',
  'orange',
  'black',

];

window.addEventListener('mousemove', function(event){

  mouse.x = event.x;
  mouse.y = event.y;



})

window.addEventListener('resize', function()
{
  canvas.width = window.innerWidth - 25;
  canvas.height = window.innerHeight - 25;


});

function Circle(x, y, dx, dy, radius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.minRadius = radius;
  this.color = colorarray[Math.floor(Math.random() * colorarray.length)]


  this.draw = function() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fillStyle = this.color;
    c.fill();
    // c.strokeStyle = 'pink';
    // c.stroke();

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



    //interactivity
    if (mouse.x - this.x < dist && mouse.x - this.x > -dist && mouse.y - this.y < dist && mouse.y - this.y > -dist) {
      if (this.radius < maxRadius){
            this.radius += 2;
      }
    }   else if(this.radius > this.minRadius) {
      this.radius -= 1;
    }



      this.draw();
  }

}


  var circleArray = [];

  for (var i = 0; i < 4000; i++) {

    var x = Math.random() * (canvas.width - radius * 2) + radius;
    var y = Math.random() * (canvas.height - radius * 2) + radius;
    var dy = (Math.random() - 0.5);
    var dx = (Math.random() - 0.5);
    var radius = Math.random() * 5 + 1;

    circleArray.push(new Circle(x, y, dx, dy, radius));
  }





function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);

  for(var i = 0; i < circleArray.length; i++) {
    circleArray[i].update();
  }
  //circle.update();


}

animate();
