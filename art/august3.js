var canvas = document.querySelector('canvas');

canvas.width = window.innerHeight - 25;
canvas.height = window.innerHeight - 25;

var c = canvas.getContext('2d');
var amountCol = 100;
var amountRow = 100;
var dist = 200;
var dist2 = 50;
var colorTest = 100;


var mouse = {
  x: undefined,
  y: undefined

}



window.addEventListener('mousemove', function(event){

  mouse.x = event.x;
  mouse.y = event.y;



})

window.addEventListener('resize', function()
{
  canvas.width = window.innerWidth - 25;
  canvas.height = window.innerHeight - 25;


});

function Rectangle(x, y, width, height, color) {

  this.x = x;
  this.y = y;
  this.color = 'blue';
  this.height = height;
  this.width = width;







  this.draw = function() {
    c.fillStyle = this.color;
    c.fillRect(this.x, this.y, this.width, this.height);
    c.fill();


  }

  this.update = function() {

    // if (mouse.x - this.x < dist && mouse.x - this.x > -dist && mouse.y - this.y < dist && mouse.y - this.y > -dist) {
    //     this.color = 'rgba(255, 0, 0, 0.5)';
    // }








   var alphaDist = (Math.sqrt(((mouse.x - this.x) * (mouse.x - this.x)) +
    ((mouse.y - this.y) + (mouse.y - this.y))));












    // this.color = 'rgba(255, 0, 0, alphaDist)';
    var alphaDistX = mouse.x - this.x;
    var alphaDistY = mouse.y - this.y;

    // if (alphaDistX < dist && alphaDistY < dist && alphaDistX > -dist && alphaDistY > -dist) {
    //   if (alphaDistX < (dist * 0.6) && alphaDistY < (dist * 0.6) && alphaDistX > -(dist * 0.6)&& alphaDistY > -(dist * 0.6)) {
    //       if (alphaDistX < (dist * 0.4) && alphaDistY < (dist * 0.4) && alphaDistX > -(dist * 0.4)&& alphaDistY > -(dist * 0.4)) {
    //         this.color = 'rgba(255, 0, 0, 0.3)';
    //       } else {
    //         this.color = 'rgba(255, 0, 0, 0.5)';
    //       }
    //   } else {
    //   this.color = 'rgba(255, 0, 0, 0.8)';
    // }
    //
    //
    // }

    //console.log(alphaDist);

    if (alphaDist < dist) {

      if (alphaDist < (dist * 0.8)) {
        if (alphaDist < (dist * 0.6)) {
          if (alphaDist < (dist * 0.3)) {

            this.color = 'blue';
            // this.height += 1;
            // this.width += 1;
          } else {
            this.color = 'green';
          }
          } else {
            this.color = 'black';
        }
      } else {
        this.color = 'pink';
      }
    } else {
      this.color = 'orange';
    }







    this.draw();

    // this.height = height;
    // this.width = width;
  }


}

var rectangleArray = [];


for (var i = 0; i < amountRow; i++) {
  for (var j = 0; j < amountCol; j++) {
    var x = canvas.width * (j / amountCol);
    var y = canvas.height * (i / amountRow);
    var height = (canvas.height / amountRow) - 2;
    var width = (canvas.width / amountCol) - 2;
    var color = 'blue';

    rectangleArray.push(new Rectangle(x, y, width, height, color));
  }


}

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);

  for(var i = 0; i < rectangleArray.length; i++) {
    rectangleArray[i].update();
  }
}

animate();
